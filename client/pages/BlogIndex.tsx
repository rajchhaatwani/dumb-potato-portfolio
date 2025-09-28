import React, { useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import BlogCard from "@/components/BlogCard";
import BlogSearch from "@/components/BlogSearch";
import BlogSidebar from "@/components/BlogSidebar";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  getFeaturedPosts,
  filterByCategory,
  filterByQuery,
  CATEGORIES,
  DEFAULT_CITY,
} from "@/lib/blog/registry";
import { useSearchParams, Link } from "react-router-dom";
import Footer from "@/components/footer";

const PER_PAGE = 8;

const BlogIndex: React.FC = () => {
  const [params, setParams] = useSearchParams();
  const [activeCat, setActiveCat] = useState<string>(
    params.get("category") || "All",
  );
  const [query, setQuery] = useState<string>(params.get("q") || "");
  const currentCity = params.get("city") || DEFAULT_CITY;

  const featured = useMemo(() => getFeaturedPosts(4), []);
  const filtered = useMemo(
    () => filterByQuery(filterByCategory(activeCat), query),
    [activeCat, query],
  );

  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const applyParams = (newParams: Record<string, string | undefined>) => {
    const next = new URLSearchParams(params);
    Object.entries(newParams).forEach(([k, v]) => {
      if (v === undefined || v === null || v === "") next.delete(k);
      else next.set(k, v);
    });
    setParams(next, { replace: true });
  };

  return (
    <>
      <SEO
        title={`IT Consultancy Blog | Expert Insights | Dumb Potato`}
        description={`Expert IT consultancy, e-commerce, and AI insights. Read actionable guides, case studies, and technology trends.`}
        keywords={`IT consultancy, e-commerce, Shopify, web development, AI automation services`}
        type="blog"
        url={`https://dumbpotato.com/blog`}
      />

      <Navigation />

      <main className="bg-background min-h-screen">
        {/* Hero */}
        <section className="relative px-4 pt-24 pb-12">
          <div className="container mx-auto relative z-10">
            <Breadcrumbs
              items={[{ label: "Home", href: "/" }, { label: "Blog" }]}
            />
            <div className="grid lg:grid-cols-3 gap-10 items-center mt-6">
              <div className="lg:col-span-2">
                <h1 className="font-bricolage text-4xl md:text-6xl font-bold">
                  Insights for growing digitally
                </h1>
                <p className="mt-3 text-muted-foreground max-w-2xl">
                  Case studies and guides on IT solutions, brand identity, ERP/CRM,
                  web & app development, Shopify/woo-commerce/e-commerce, AI automation, DevOps and
                  more.
                </p>
                <div className="mt-6">
                  <BlogSearch />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured */}
        <section className="px-4 pb-8">
          <div className="container mx-auto">
            <h2 className="font-bricolage text-2xl mb-4">Featured</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featured.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="px-4 pb-8">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-2 items-center">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  className={`px-3 py-1.5 rounded-full text-sm border ${activeCat === c ? "bg-orange-500 text-white border-orange-500" : "bg-white/5 border-border hover:bg-white/10"}`}
                  onClick={() => {
                    setActiveCat(c);
                    setPage(1);
                    applyParams({ category: c === "All" ? undefined : c });
                  }}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid + Sidebar */}
        <section className="px-4">
          <div className="container mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                {paginated.map((p) => (
                  <BlogCard key={p.slug} post={p} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between mt-8">
                <button
                  className="px-4 py-2 rounded-lg border border-border bg-white/5 disabled:opacity-50"
                  onClick={() => setPage((x) => Math.max(1, x - 1))}
                  disabled={page === 1}
                >
                  Prev
                </button>
                <div className="text-sm text-muted-foreground">
                  Page {page} of {totalPages}
                </div>
                <button
                  className="px-4 py-2 rounded-lg border border-border bg-white/5 disabled:opacity-50"
                  onClick={() => setPage((x) => Math.min(totalPages, x + 1))}
                  disabled={page === totalPages}
                >
                  Next
                </button>
              </div>
            </div>

            <div>
              <BlogSidebar />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Listing Structured Data: Blog + LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Dumb Potato Blog",
          url: "https://dumbpotato.com/blog",
          description:
            "Expert insights on IT consultancy, web development, e-commerce, Shopify, and AI in India.",
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Dumb Potato",
          address: {
            "@type": "PostalAddress",
            addressLocality: currentCity,
            addressRegion: "Gujarat",
            addressCountry: "IN",
          },
          url: "https://dumbpotato.com",
          telephone: "+91-9904538757",
        })}
      </script>
    </>
  );
};

export default BlogIndex;
