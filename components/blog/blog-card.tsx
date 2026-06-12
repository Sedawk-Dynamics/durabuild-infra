import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { formatPostDate, type PostPreview } from "@/lib/hashnode"

interface BlogCardProps {
  post: PostPreview
  /** Render the first card larger as a featured story. */
  priority?: boolean
}

export function BlogCard({ post, priority = false }: BlogCardProps) {
  return (
    <Card className="group overflow-hidden border-2 border-[#c9a961]/20 hover:border-[#c9a961]/60 transition-colors h-full flex flex-col p-0">
      <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
        {/* Featured image */}
        <div className="relative aspect-[16/9] overflow-hidden bg-[#f5f1e8]">
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            priority={priority}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <CardContent className="flex flex-col flex-1 p-6">
          {/* Meta */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#c9a961]" />
              {formatPostDate(post.publishedAt)}
            </span>
            {post.readTimeInMinutes > 0 && (
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#c9a961]" />
                {post.readTimeInMinutes} min read
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-[#0a3d3d] mb-3 text-balance group-hover:text-[#c9a961] transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Brief */}
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6">{post.brief}</p>

          {/* Read more */}
          <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#c9a961] group-hover:gap-3 transition-all">
            Read More
            <ArrowRight className="w-4 h-4" />
          </span>
        </CardContent>
      </Link>
    </Card>
  )
}
