/**
 * Hashnode headless-CMS API layer.
 *
 * Single source of truth for talking to the Hashnode GraphQL API
 * (https://gql.hashnode.com/). All blog data for the site flows through
 * the functions exported here so pages never embed raw queries.
 *
 * Content auto-updates: every request is tagged + time-revalidated via
 * Next.js ISR (see REVALIDATE_SECONDS and the `next` fetch option below),
 * and can be invalidated instantly from a Hashnode webhook that hits
 * /api/revalidate.
 */

// NOTE: no trailing slash. `https://gql.hashnode.com/` issues a 301 redirect,
// and fetch downgrades the redirected POST to a GET — which returns Hashnode's
// HTML landing page instead of JSON. Hitting the canonical URL avoids that.
const HASHNODE_ENDPOINT = "https://gql.hashnode.com"

/** The publication host to pull posts from. Override via env in other environments. */
export const HASHNODE_HOST = process.env.NEXT_PUBLIC_HASHNODE_HOST ?? "durubuildinfra.hashnode.dev"

/** Cache tag used so a webhook can revalidate every blog page at once. */
export const HASHNODE_CACHE_TAG = "hashnode-posts"

/** How long (seconds) before cached blog data is considered stale and refetched. */
export const REVALIDATE_SECONDS = 60

/* -------------------------------------------------------------------------- */
/*  Types                                                                      */
/* -------------------------------------------------------------------------- */

export interface PostAuthor {
  name: string
  profilePicture: string | null
  bio?: { text: string | null } | null
}

export interface PostTag {
  name: string
  slug: string
}

/** Shape returned for the listing grid (lightweight). */
export interface PostPreview {
  id: string
  title: string
  brief: string
  slug: string
  publishedAt: string
  readTimeInMinutes: number
  coverImage: string | null
  author: PostAuthor | null
}

/** Full post for the detail page (includes rendered HTML). */
export interface PostDetail extends PostPreview {
  subtitle: string | null
  updatedAt: string | null
  contentHtml: string
  tags: PostTag[]
  seoTitle: string | null
  seoDescription: string | null
  ogImage: string | null
}

export interface PostsPage {
  posts: PostPreview[]
  hasNextPage: boolean
  endCursor: string | null
}

/* -------------------------------------------------------------------------- */
/*  Low-level GraphQL request                                                  */
/* -------------------------------------------------------------------------- */

interface GraphQLResponse<T> {
  data?: T
  errors?: Array<{ message: string }>
}

/**
 * Execute a GraphQL request against Hashnode with ISR caching.
 * Throws on network/GraphQL errors so callers (and Next.js error boundaries)
 * can react.
 */
async function hashnodeFetch<T>(query: string, variables: Record<string, unknown>): Promise<T> {
  const res = await fetch(HASHNODE_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ query, variables }),
    // Don't silently follow redirects into an HTML page — surface them instead.
    redirect: "follow",
    // ISR: cache the response, revalidate periodically, and allow on-demand
    // invalidation through the shared cache tag.
    next: { revalidate: REVALIDATE_SECONDS, tags: [HASHNODE_CACHE_TAG] },
  })

  if (!res.ok) {
    throw new Error(`Hashnode request failed: ${res.status} ${res.statusText}`)
  }

  // Guard against non-JSON responses (redirects, challenge pages, outages):
  // parsing HTML as JSON would otherwise throw a cryptic "Unexpected token '<'".
  const contentType = res.headers.get("content-type") ?? ""
  if (!contentType.includes("application/json")) {
    const snippet = (await res.text()).slice(0, 120).replace(/\s+/g, " ")
    throw new Error(`Hashnode returned a non-JSON response (content-type: "${contentType}"): ${snippet}`)
  }

  const json = (await res.json()) as GraphQLResponse<T>

  if (json.errors?.length) {
    throw new Error(`Hashnode GraphQL error: ${json.errors.map((e) => e.message).join("; ")}`)
  }

  if (!json.data) {
    throw new Error("Hashnode returned no data")
  }

  return json.data
}

/* -------------------------------------------------------------------------- */
/*  Queries                                                                    */
/* -------------------------------------------------------------------------- */

const POSTS_QUERY = /* GraphQL */ `
  query PublicationPosts($host: String!, $first: Int!, $after: String) {
    publication(host: $host) {
      id
      posts(first: $first, after: $after) {
        edges {
          node {
            id
            title
            brief
            slug
            publishedAt
            readTimeInMinutes
            coverImage {
              url
            }
            author {
              name
              profilePicture
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`

const POST_BY_SLUG_QUERY = /* GraphQL */ `
  query PostBySlug($host: String!, $slug: String!) {
    publication(host: $host) {
      id
      post(slug: $slug) {
        id
        title
        subtitle
        brief
        slug
        publishedAt
        updatedAt
        readTimeInMinutes
        coverImage {
          url
        }
        tags {
          name
          slug
        }
        author {
          name
          profilePicture
          bio {
            text
          }
        }
        content {
          html
        }
        seo {
          title
          description
        }
        ogMetaData {
          image
        }
      }
    }
  }
`

const SLUGS_QUERY = /* GraphQL */ `
  query PublicationSlugs($host: String!, $first: Int!) {
    publication(host: $host) {
      id
      posts(first: $first) {
        edges {
          node {
            slug
          }
        }
      }
    }
  }
`

/* -------------------------------------------------------------------------- */
/*  Raw response shapes (internal)                                             */
/* -------------------------------------------------------------------------- */

interface RawPostNode {
  id: string
  title: string
  subtitle?: string | null
  brief: string
  slug: string
  publishedAt: string
  updatedAt?: string | null
  readTimeInMinutes: number
  coverImage: { url: string } | null
  tags?: PostTag[] | null
  author: PostAuthor | null
  content?: { html: string } | null
  seo?: { title: string | null; description: string | null } | null
  ogMetaData?: { image: string | null } | null
}

interface PostsQueryResult {
  publication: {
    posts: {
      edges: Array<{ node: RawPostNode }>
      pageInfo: { hasNextPage: boolean; endCursor: string | null }
    }
  } | null
}

interface PostQueryResult {
  publication: { post: RawPostNode | null } | null
}

interface SlugsQueryResult {
  publication: { posts: { edges: Array<{ node: { slug: string } }> } } | null
}

/* -------------------------------------------------------------------------- */
/*  Mappers                                                                    */
/* -------------------------------------------------------------------------- */

function toPreview(node: RawPostNode): PostPreview {
  return {
    id: node.id,
    title: node.title,
    brief: node.brief,
    slug: node.slug,
    publishedAt: node.publishedAt,
    readTimeInMinutes: node.readTimeInMinutes,
    coverImage: node.coverImage?.url ?? null,
    author: node.author,
  }
}

/* -------------------------------------------------------------------------- */
/*  Public API                                                                 */
/* -------------------------------------------------------------------------- */

/**
 * Fetch a page of posts for the listing grid.
 * @param first  Number of posts to fetch (default 12).
 * @param after  Cursor for pagination (omit for the first page).
 */
export async function getPosts(first = 12, after?: string): Promise<PostsPage> {
  const data = await hashnodeFetch<PostsQueryResult>(POSTS_QUERY, {
    host: HASHNODE_HOST,
    first,
    after: after ?? null,
  })

  const connection = data.publication?.posts
  if (!connection) {
    return { posts: [], hasNextPage: false, endCursor: null }
  }

  return {
    posts: connection.edges.map((edge) => toPreview(edge.node)),
    hasNextPage: connection.pageInfo.hasNextPage,
    endCursor: connection.pageInfo.endCursor,
  }
}

/**
 * Fetch a single post by slug. Returns `null` when the post does not exist
 * (so the caller can render a 404).
 */
export async function getPostBySlug(slug: string): Promise<PostDetail | null> {
  const data = await hashnodeFetch<PostQueryResult>(POST_BY_SLUG_QUERY, {
    host: HASHNODE_HOST,
    slug,
  })

  const node = data.publication?.post
  if (!node) return null

  return {
    ...toPreview(node),
    subtitle: node.subtitle ?? null,
    updatedAt: node.updatedAt ?? null,
    contentHtml: node.content?.html ?? "",
    tags: node.tags ?? [],
    seoTitle: node.seo?.title ?? null,
    seoDescription: node.seo?.description ?? null,
    ogImage: node.ogMetaData?.image ?? null,
  }
}

/**
 * Fetch all post slugs — used by `generateStaticParams` to pre-render
 * detail pages at build time.
 */
export async function getAllPostSlugs(first = 100): Promise<string[]> {
  const data = await hashnodeFetch<SlugsQueryResult>(SLUGS_QUERY, {
    host: HASHNODE_HOST,
    first,
  })

  return data.publication?.posts.edges.map((edge) => edge.node.slug) ?? []
}

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                    */
/* -------------------------------------------------------------------------- */

/** Format an ISO date string into a readable "June 11, 2026" label. */
export function formatPostDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  } catch {
    return iso
  }
}
