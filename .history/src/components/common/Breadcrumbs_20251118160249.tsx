import { Crumbs } from "@/types/crumb.type";
import Link from "next/link";

export default function Breadcrumbs({ crumbs }: { crumbs: Crumbs }) {
  return (
    <nav
      className="text-sm text-gray-500 mb-4 items-center"
      aria-label="breadcrumb"
    >
      <ol className="flex flex-wrap gap-1 ">
        {crumbs.map((crumb, idx) => {
          const isLast = idx === crumbs.length - 1;
          return (
            <li key={idx} className="flex items-center">
              {!isLast && crumb.href ? (
                <Link href={crumb.href} className="hover:text-[#8B1E3F]">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-gray-700 font-medium">{crumb.label}</span>
              )}
              {!isLast && <span className="mx-1">{">"}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
