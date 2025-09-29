import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORIES } from "@/lib/blogs/registry";
import { CITIES } from "@/lib/blogs/cities";
import { getAllPosts } from "@/lib/blogs/registry";

const subscribe = async (email: string) => {
  const res = await fetch("/api/newsletter", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.message || "Subscription failed");
  return data;
};

const BlogSidebar: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const recent = useMemo(() => getAllPosts().slice(0, 5), []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg(null);
    setLoading(true);
    try {
      await subscribe(email);
      setMsg("Subscribed! Please check your inbox.");
      setEmail("");
    } catch (err: any) {
      setMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <aside className="space-y-8">
      <section className="p-5 bg-white/5 border border-border rounded-xl">
        <h3 className="font-bricolage text-lg mb-4">Recent Posts</h3>
        <ul className="space-y-3">
          {recent.map((p) => (
            <li key={p.slug}>
              <Link className="hover:text-orange-500" to={`/blogs/${p.slug}`}>
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="p-5 bg-white/5 border border-border rounded-xl">
        <h3 className="font-bricolage text-lg mb-4">Popular Categories</h3>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.filter((c) => c !== "All")
            .slice(0, 8)
            .map((c) => (
              <span
                key={c}
                className="px-2 py-1 text-xs rounded bg-white/10 border border-border"
              >
                {c}
              </span>
            ))}
        </div>
      </section>

      {/* <section className="p-5 bg-white/5 border border-border rounded-xl">
        <h3 className="font-bricolage text-lg mb-4">Newsletter</h3>
        <form onSubmit={onSubmit} className="space-y-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-3 py-2 rounded-lg bg-white/10 border border-border text-sm"
            aria-label="Email address"
          />
          <button
            disabled={loading}
            className="w-full px-3 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-60"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
        {msg && <p className="mt-2 text-sm text-muted-foreground">{msg}</p>}
      </section> */}

      {/* <section className="p-5 bg-white/5 border border-border rounded-xl">
        <h3 className="font-bricolage text-lg mb-4">Location-based Guides</h3>
        <ul className="space-y-2">
          {CITIES.map((city) => (
            <li key={city}>
              <Link
                className="hover:text-orange-500"
                to={`/blogs?city=${encodeURIComponent(city)}`}
              >
                IT Consultancy in {city}
              </Link>
            </li>
          ))}
        </ul>
      </section> */}

      <section className="p-5 bg-white/5 border border-border rounded-xl">
        <h3 className="font-bricolage text-lg mb-2">Need a consultation?</h3>
        <p className="text-sm text-muted-foreground mb-3">
          Talk to our experts for tailored web, e-commerce, and AI solutions.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-secondary-foreground bg-orange-500 hover:bg-orange-600"
        >
          Contact Us
        </Link>
      </section>
    </aside>
  );
};

export default BlogSidebar;
