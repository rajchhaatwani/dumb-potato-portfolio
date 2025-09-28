import React, { useMemo, useState } from "react";
import { buildSearchIndex } from "@/lib/blog/registry";
import { useNavigate } from "react-router-dom";

const BlogSearch: React.FC = () => {
  const nav = useNavigate();
  const index = useMemo(() => buildSearchIndex(), []);
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return [];
    return index
      .filter(
        (i) =>
          i.title.toLowerCase().includes(query) ||
          i.tags.some((t) => t.toLowerCase().includes(query)) ||
          i.category.toLowerCase().includes(query),
      )
      .slice(0, 8);
  }, [index, q]);

  return (
    <div className="relative">
      <input
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        placeholder="Search articles"
        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        aria-label="Search blog posts"
      />
      {open && results.length > 0 && (
        <div className="absolute z-10 mt-2 w-full bg-background border border-border rounded-xl shadow-xl">
          <ul>
            {results.map((r) => (
              <li key={r.slug}>
                <button
                  onClick={() => nav(`/blog/${r.slug}`)}
                  className="w-full text-left px-4 py-3 hover:bg-white/5 transition-colors"
                >
                  <div className="text-sm">{r.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {r.category}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BlogSearch;
