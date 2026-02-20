"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { CHROME_STORE_URL } from "@/lib/constants";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white/30 backdrop-blur-md border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-slate-900">EyeRise</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/pricing"
              className="text-slate-700 hover:text-amber-600 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-slate-700 hover:text-amber-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-slate-700 hover:text-amber-600 transition-colors"
            >
              Contact
            </Link>
            <Button href={CHROME_STORE_URL} variant="primary" size="sm">
              Add to Chrome
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-700"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4 space-y-4"
            >
              <Link
                href="/pricing"
                className="block text-slate-700 hover:text-amber-600"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="block text-slate-700 hover:text-amber-600"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-slate-700 hover:text-amber-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button
                href={CHROME_STORE_URL}
                variant="primary"
                size="md"
                className="w-full"
              >
                Add to Chrome
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
