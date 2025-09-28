export type BlogCategory =
  | "IT Consultancy"
  | "Brand Identity"
  | "ERP/CRM"
  | "Web & App Development"
  | "AI & Automation"
  | "Industry Insights"
  | "E-commerce"
  | "Shopify";

export interface AuthorMeta {
  name: string;
  title: string;
  bio: string;
  avatarUrl?: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  tags: string[];
  cityTargets: string[]; // GEO targeting cities
  publishedAt: string; // ISO date
  updatedAt?: string; // ISO date
  readingMinutes: number;
  featuredImage?: string;
  author: AuthorMeta;
}

export interface PostRecord extends PostMeta {
  Component: () => JSX.Element;
}

export interface SearchIndexItem {
  slug: string;
  title: string;
  category: BlogCategory;
  tags: string[];
}
