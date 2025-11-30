"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full border-b border-gray-800 py-4 px-6 flex justify-between items-center">
      <Link href="/" className="font-bold text-xl">shashidhar</Link>

      <nav className="flex gap-6">
        {links.map(({ name, path }) => (
          <Link
            key={path}
            href={path}
            className={`text-sm transition ${
              pathname === path
                ? "text-blue-400 font-semibold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
