import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./tailwind-gen.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EcoTrade AI | Autonomous Microgrid Energy Trading & Grid Optimization",
  description:
    "Autonomous AI agents powered by Claude 3.5 Sonnet optimizing decentralized peer-to-peer renewable energy trading, microgrid load balancing, and real-time power auctions.",
  keywords: [
    "AI Energy Trading",
    "Claude 3.5 Sonnet",
    "Microgrid Optimization",
    "Peer-to-Peer Energy",
    "Renewable Energy AI",
    "Decentralized Energy",
    "Autonomous Bidding Agents",
    "Anthropic Claude for Startups",
  ],
  authors: [{ name: "EcoTrade AI Core Engineering Team" }],
  openGraph: {
    title: "EcoTrade AI | Autonomous Microgrid Energy Trading Agents",
    description:
      "Decentralized peer-to-peer renewable energy trading powered by Claude 3.5 Sonnet. Real-time load forecasting, autonomous auction bidding, and instant cryptographic settlement.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoTrade AI | Autonomous Energy Agents",
    description: "Claude 3.5 Sonnet-driven autonomous microgrid energy trading protocol.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#07080a] text-zinc-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-400">
        {children}
      </body>
    </html>
  );
}
