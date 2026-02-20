"use client";

import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Logo variant="footer" href="/" />
            </div>
            <p className="text-slate-400 text-sm">
              Premium eye care for your digital life.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/proof" className="hover:text-white transition-colors">
                  Science
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get Started</h4>
            <Link
              href="/pricing"
              className="inline-block px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-medium hover:from-amber-600 hover:to-orange-600 transition-all shadow-md hover:shadow-lg"
            >
              Try Free
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <p className="text-sm text-slate-400 text-center">
            © {new Date().getFullYear()} EyeRise. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 text-center mt-2">
            Not medical advice. Consult a healthcare professional for eye health concerns.
          </p>
        </div>
      </div>
    </footer>
  );
}
