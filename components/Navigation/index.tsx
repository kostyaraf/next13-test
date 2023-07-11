"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { url: "/todo-list", label: "Todo List" },
  { url: "/products", label: "Products" },
  { url: "/posts", label: "Posts" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div
      style={{ display: "flex", alignItems: "", textTransform: "uppercase" }}
    >
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.url;
        return (
          <div key={item.url} style={{ margin: "0 10px", textDecoration: isActive ? 'underline' : 'unset' }}>
            <Link href={item.url} className="text-1xl">
              {item.label}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
