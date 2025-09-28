import React, { useEffect, useMemo, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link, useParams } from "react-router-dom";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog/registry";
import Footer from "@/components/footer";

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  const contentRef = useRef<HTMLDivElement>(null);
  const [toc, setToc] = useState<{ id: string; text: string; level: number }[]>(
    [],
  );

  useEffect(() => {
    if (!contentRef.current) return;
    const headings = Array.from(
      contentRef.current.querySelectorAll("h2, h3"),
    ) as HTMLHeadingElement[];
    const items = headings.map((h) => ({
      id:
        h.id || h.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "",
      text: h.textContent || "",
      level: h.tagName === "H2" ? 2 : 3,
    }));
    // Ensure IDs on DOM
    headings.forEach((h, i) => {
      if (!h.id) h.id = items[i].id;
    });
    setToc(items);
  }, [slug]);

  const related = useMemo(() => (slug ? getRelatedPosts(slug, 3) : []), [slug]);

  if (!post) {
    return (
      <main className="px-4 pt-32 pb-20">
        <div className="container mx-auto">
          <p>Post not found.</p>
          <Link to="/blog" className="text-orange-500">
            Back to blog
          </Link>
        </div>
      </main>
    );
  }

  const url = `https://dumbpotato.com/blog/${post.slug}`;

  const blogPostingLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.featuredImage || "/blog_1.jpg",
    author: {
      "@type": "Person",
      name: post.author.name,
      description: post.author.bio,
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: url,
    publisher: {
      "@type": "Organization",
      name: "Dumb Potato",
      logo: {
        "@type": "ImageObject",
        url: "https://dumbpotato.com/logo.png",
      },
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://dumbpotato.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://dumbpotato.com/blog",
      },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <SEO
        title={`${post.title} | Dumb Potato`}
        description={post.description}
        keywords={[post.category, ...post.tags].join(", ")}
        type="article"
        url={url}
        image={post.featuredImage}
      />

      <Navigation />

      <main className="bg-background min-h-screen">
        <section className="relative pt-24 pb-10 overflow-hidden">
          <div className="container mx-auto relative z-10">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: post.title },
              ]}
            />
            <h1 className="mt-4 font-bricolage text-3xl md:text-6xl font-bold max-w-4xl">
              {post.title}
            </h1>
            <div className="mt-3 text-sm text-muted-foreground">
              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              {post.updatedAt && (
                <span className="ml-2">
                  • Updated {new Date(post.updatedAt).toLocaleDateString()}
                </span>
              )}
              <span className="ml-2">• {post.readingMinutes} min read</span>
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto grid lg:grid-cols-[1fr_280px] gap-10">
            <article ref={contentRef} className="prose prose-invert max-w-none">
              <post.Component />
              <hr className="my-10 border-border" />
              <div className="flex items-center gap-4 p-5 bg-white/5 border border-border rounded-xl">
                {post.author.avatarUrl && (
                  <img
                    src={post.author.avatarUrl}
                    alt={post.author.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                )}
                <div>
                  <div className="font-semibold">{post.author.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {post.author.title}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {post.author.bio}
                  </p>
                </div>
              </div>

              {/* Related posts */}
              {related.length > 0 && (
                <div className="mt-10">
                  <h3 className="font-bricolage text-2xl mb-4">
                    Related posts
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link
                          className="hover:text-orange-500"
                          to={`/blog/${r.slug}`}
                        >
                          {r.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Social sharing */}
              <div className="mt-8 flex gap-3 text-sm">
                <a
                  className="px-3 py-2 rounded bg-white/5 border border-border"
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(post.title)}`}
                >
                  Share on X
                </a>
                <a
                  className="px-3 py-2 rounded bg-white/5 border border-border"
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
                >
                  Share on LinkedIn
                </a>
              </div>
            </article>

            {/* TOC Sidebar */}
            <aside className="lg:block hidden sticky top-24 h-max">
              <div className="p-4 bg-white/5 border border-border rounded-xl">
                <h3 className="font-bricolage text-lg mb-3">
                  Table of Contents
                </h3>
                <ul className="space-y-2 text-sm">
                  {toc.map((i) => (
                    <li key={i.id} className={i.level === 3 ? "ml-3" : ""}>
                      <a className="hover:text-orange-500" href={`#${i.id}`}>
                        {i.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />

      <script type="application/ld+json">
        {JSON.stringify(blogPostingLd)}
      </script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
    </>
  );
};

export default BlogPost;
