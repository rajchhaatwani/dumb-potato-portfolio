import React from "react";
import { Link } from "react-router-dom";

interface Crumb {
  label: string;
  href?: string;
}

const Breadcrumbs = ({ items }: { items: Crumb[] }) => {
  return (
    <nav className="text-sm text-muted-foreground" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 flex-wrap">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            {item.href ? (
              <Link className="hover:text-foreground" to={item.href}>
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground">{item.label}</span>
            )}
            {idx < items.length - 1 && <span>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;