import { NextResponse } from "next/server"
import { revalidatePath } from "next/cache"

/**
 * On-demand revalidation endpoint for Hashnode webhooks.
 *
 * Configure a webhook in your Hashnode dashboard
 * (Settings → Webhooks) pointing at:
 *
 *   https://<your-domain>/api/revalidate?secret=<HASHNODE_REVALIDATE_SECRET>
 *
 * On "Post published / updated / deleted" events this clears the cached blog
 * data immediately, so new articles go live without waiting for the ISR timer.
 *
 * Set HASHNODE_REVALIDATE_SECRET in your environment to a strong random value.
 */
export async function POST(request: Request) {
  const secret = new URL(request.url).searchParams.get("secret")

  if (!process.env.HASHNODE_REVALIDATE_SECRET || secret !== process.env.HASHNODE_REVALIDATE_SECRET) {
    return NextResponse.json({ revalidated: false, message: "Invalid secret" }, { status: 401 })
  }

  // Purge both the listing and every post detail page so freshly published /
  // updated Hashnode content is served immediately.
  revalidatePath("/blog")
  revalidatePath("/blog/[slug]", "page")

  return NextResponse.json({ revalidated: true, now: Date.now() })
}
