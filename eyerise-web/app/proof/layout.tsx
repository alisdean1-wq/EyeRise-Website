import type { Metadata } from "next";
import { proofMetadata } from "@/lib/seo";

export const metadata: Metadata = proofMetadata;

export default function ProofLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
