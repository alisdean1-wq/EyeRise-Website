"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "@/components/Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/proof", label: "Science" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      className="sticky top-0 z-50 backdrop-blur-md bg-black/95 border-b border-zinc-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 sm:h-28">
          <Logo variant="navbar" href="/" />
          <div className="flex items-center gap-4 sm:gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-gray-300 hover:text-white text-lg sm:text-xl font-semibold transition-colors hidden sm:block"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/pricing"
              className="px-10 py-4 text-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-medium hover:from-amber-600 hover:to-orange-600 transition-all shadow-md hover:shadow-lg"
            >
              Try Free
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
