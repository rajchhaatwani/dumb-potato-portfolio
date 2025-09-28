import { CITIES, PRIMARY_CITY } from "./cities";
import { PostRecord, SearchIndexItem } from "./types";
import ModernWebDev2025Content from "@/content/blog/modern-web-dev-2025";

// const author = {
//   name: "Dumb Potato Editorial Team",
//   title: "IT Consultancy & Web Engineering",
//   bio: "Expert team specializing in IT consultancy, brand identity, e-commerce, and AI-powered development across India.",
//   avatarUrl: "/images/logo.png",
// };

const posts: PostRecord[] = [
  {
    slug: "modern-web-dev-ecommerce-shopify-ai-2025",
    title:
      "The Complete Guide to Modern Web Development, E-commerce Solutions, and AI-Powered Shopify Development in 2025",
    description:
      "A comprehensive 2025 guide covering modern web development, e-commerce fundamentals, Shopify mastery, and AI integrations.",
    category: "Web & App Development",
    tags: [
      "web development",
      "e-commerce",
      "Shopify",
      "AI",
      "performance",
      "DevOps",
    ],
    cityTargets: CITIES,
    publishedAt: "2025-01-02T00:00:00.000Z",
    updatedAt: "2025-01-10T00:00:00.000Z",
    readingMinutes: 18,
    featuredImage: "/images/blog_1.png",
    author: {
      name: "Raj Chhatwani",
      title: "CEO | Co-founder",
      bio: "dumb potato",
      avatarUrl: "/images/logo.png",
    },
    Component: ModernWebDev2025Content,
  },
];

export const getAllPosts = (): PostRecord[] =>
  [...posts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

export const getFeaturedPosts = (count = 4): PostRecord[] =>
  getAllPosts().slice(0, count);

export const getPostBySlug = (slug: string): PostRecord | undefined =>
  posts.find((p) => p.slug === slug);

export const getRelatedPosts = (slug: string, count = 3): PostRecord[] => {
  const current = getPostBySlug(slug);
  if (!current) return getFeaturedPosts(count);
  const others = getAllPosts().filter((p) => p.slug !== slug);
  const byCategory = others.filter((p) => p.category === current.category);
  const byTag = others.filter((p) =>
    p.tags.some((t) => current.tags.includes(t)),
  );
  const merged = [...new Set([...byCategory, ...byTag, ...others])];
  return merged.slice(0, count);
};

export const buildSearchIndex = (): SearchIndexItem[] =>
  getAllPosts().map((p) => ({
    slug: p.slug,
    title: p.title,
    category: p.category,
    tags: p.tags,
  }));

export const filterByCategory = (category?: string): PostRecord[] => {
  const all = getAllPosts();
  if (!category || category === "All") return all;
  return all.filter((p) => p.category === category);
};

export const filterByQuery = (
  items: PostRecord[],
  query: string,
): PostRecord[] => {
  if (!query.trim()) return items;
  const q = query.toLowerCase();
  return items.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)),
  );
};

export const CATEGORIES = [
  "All",
  "IT Consultancy",
  "Brand Identity",
  "ERP/CRM",
  "Web & App Development",
  "AI & Automation",
  "DevOps",
  "Industry Insights",
  "E-commerce",
  "Shopify",
];

export const DEFAULT_CITY = PRIMARY_CITY;
