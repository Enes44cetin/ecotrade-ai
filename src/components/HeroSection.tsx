"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  FileText,
  Sparkles,
  Terminal,
  Activity,
  CheckCircle,
  Copy,
  Check,
  ChevronRight,
  Cpu,
} from "lucide-react";
import MicrogridTerminal from "./MicrogridTerminal";

interface HeroSectionProps {
  onOpenAccessModal: () => void;
}

export default function HeroSection({ onOpenAccessModal }: HeroSectionProps) {
  const [copiedCurl, setCopiedCurl] = useState(false);
  const curlCommand = "curl -X POST https://api.tryecotrade.xyz/v1/agents/auction/clear -H 'X-Claude-Model: claude-3-5-sonnet'";

  const handleCopy = () => {
    navigator.clipboard.writeText(curlCommand);
    setCopiedCurl(true);
    setTimeout(() => setCopiedCurl(false), 2000);
  };

  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-cyber">
      {/* Background radial glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[300px] sm:h-[400px] bg-emerald-500/10 blur-[100px] sm:blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-4 sm:right-10 w-[250px] sm:w-[450px] h-[250px] sm:h-[350px] bg-amber-500/8 blur-[90px] sm:blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 left-4 sm:left-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[300px] bg-cyan-500/8 blur-[90px] sm:blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          {/* Grant Badge / Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 px-3 py-1.5 sm:px-3.5 rounded-full bg-zinc-900/90 border border-zinc-700/60 shadow-[0_0_20px_rgba(16,185,129,0.15)] mb-6 sm:mb-7 hover:border-zinc-600 transition-colors max-w-full"
          >
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono tracking-wide text-zinc-300 uppercase">
                Claude for Startups Applicant
              </span>
            </div>
            <span className="text-zinc-600 text-xs hidden sm:inline">|</span>
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-emerald-400">
              <Cpu className="w-3 h-3 text-amber-400" />
              <span>Claude 3.5 Sonnet Agent Core</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.12] sm:leading-[1.08] font-sans px-2 sm:px-0"
          >
            Autonomous Energy Agents for{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Decentralized Grid Optimization
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 sm:mt-6 text-sm sm:text-lg md:text-xl text-zinc-400 font-normal leading-relaxed max-w-3xl mx-auto px-2 sm:px-0"
          >
            EcoTrade AI deploys autonomous agent swarms powered by <span className="text-zinc-200 font-medium">Claude 3.5 Sonnet</span> to orchestrate peer-to-peer renewable power auctions in local microgrids. Resolving multi-bus power flow constraints, predicting localized generation, and executing cryptographic settlements in sub-second cycles.
          </motion.p>

          {/* CTA Buttons & Action Row */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
          >
            <button
              onClick={onOpenAccessModal}
              id="hero-join-sandbox-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-black bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 hover:from-emerald-300 hover:to-teal-200 rounded-lg shadow-[0_0_30px_-5px_rgba(0,245,155,0.5)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] group"
            >
              <Terminal className="w-4 h-4 text-zinc-950 transition-transform group-hover:rotate-6" />
              <span>Join Sandbox</span>
              <ArrowRight className="w-4 h-4 text-zinc-950 transition-transform group-hover:translate-x-0.5" />
            </button>

            <a
              href="#whitepaper"
              id="hero-read-whitepaper-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800/80 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-all duration-200 backdrop-blur-sm"
            >
              <FileText className="w-4 h-4 text-zinc-400" />
              <span>Read the Whitepaper</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 font-mono">v0.9</span>
            </a>
          </motion.div>

          {/* Developer Quick-Curl Terminal Pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 sm:mt-7 inline-flex items-center gap-2 px-3 py-2 sm:px-3.5 rounded-lg bg-zinc-950/80 border border-zinc-800/90 text-[11px] sm:text-xs font-mono text-zinc-400 max-w-full overflow-hidden shadow-inner mx-4 sm:mx-0"
          >
            <span className="text-emerald-400 select-none">$</span>
            <span className="truncate text-zinc-300">{curlCommand}</span>
            <button
              onClick={handleCopy}
              className="ml-1 sm:ml-2 p-1 hover:text-zinc-200 text-zinc-500 rounded transition-colors flex-shrink-0"
              title="Copy cURL command"
            >
              {copiedCurl ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </motion.div>
        </div>

        {/* Live Interactive Microgrid Terminal */}
        <motion.div
          id="sandbox"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Subtle glowing halo border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-amber-500/20 rounded-2xl blur-lg opacity-40 group-hover:opacity-100 transition duration-1000 -z-10" />
          
          <MicrogridTerminal />
        </motion.div>
      </div>
    </section>
  );
}
