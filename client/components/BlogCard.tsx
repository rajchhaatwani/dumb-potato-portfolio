import React from "react";
import { Link } from "react-router-dom";
import { PostRecord } from "@/lib/blog/types";

const BlogCard = ({ post }: { post: PostRecord }) => {
  return (
    <article className="group bg-white/5 border border-border rounded-xl overflow-hidden hover:bg-white/10 transition-colors">
      <Link to={`/blog/${post.slug}`} className="block">
        {post.featuredImage && (
          <div className="aspect-[16/9] bg-muted overflow-hidden">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform"
              loading="lazy"
            />
          </div>
        )}
        <div className="p-5">
          <div className="text-xs text-muted-foreground mb-2">
            <span className="p-1 rounded bg-white/5 border border-border">
              {post.category}
            </span>
            <div className="pt-4">
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString()}
              </time>
              {post.updatedAt && (
                <span className="ml-2 opacity-80">
                  (Updated {new Date(post.updatedAt).toLocaleDateString()})
                </span>
              )}
            </div>
          </div>
          <h3 className="font-bricolage text-xl text-foreground mb-2">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {post.description}
          </p>
          <div className="mt-3 text-xs text-muted-foreground">
            <span>{post.readingMinutes} min read</span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
