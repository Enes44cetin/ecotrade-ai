"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Download,
  ExternalLink,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Code,
  ShieldAlert,
} from "lucide-react";

export default function WhitepaperSection() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <section id="whitepaper" className="py-24 sm:py-32 relative bg-[#090b0e] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-2xl bg-gradient-to-br from-[#0c0f16] to-[#07080a] border border-zinc-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 mb-4">
                <FileText className="w-3.5 h-3.5" />
                <span>TECHNICAL SPECIFICATION // v0.9.4</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-sans">
                Decentralized Microgrid Power Auctions via Claude 3.5 Multi-Agent Swarms
              </h2>

              <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
                Our 28-page research paper details the mathematical formulation of continuous double auctions on radial distribution feeders, non-linear voltage sensitivity matrices, and why Claude 3.5 Sonnet outperforms traditional reinforcement learning in zero-shot grid anomaly mitigation.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-zinc-300">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-zinc-950/70 border border-zinc-850">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>IEEE 1547 & 2030.5 Protocol Formulations</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-zinc-950/70 border border-zinc-850">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Nash-Equilibrium Double Auction Proofs</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-zinc-950/70 border border-zinc-850">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Sub-400ms Claude Sonnet Inverter Loop</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-zinc-950/70 border border-zinc-850">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>ZK-SNARK State Channel Verification</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-semibold font-mono text-black bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-[0_0_20px_-3px_rgba(0,245,155,0.3)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Download className="w-4 h-4 text-zinc-950" />
                  <span>{downloaded ? "Whitepaper Pre-Loaded (PDF)" : "Download Whitepaper (PDF)"}</span>
                </button>

                <a
                  href="#claude-architecture"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-medium font-mono text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:text-white transition-colors"
                >
                  <span>Inspect Claude Prompt Schemas</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Card / Visual Document Preview */}
            <div className="lg:col-span-5">
              <div className="rounded-xl bg-[#07080a] border border-zinc-800 p-6 shadow-2xl relative font-mono">
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800 text-[11px] text-zinc-500">
                  <span>ecotrade-whitepaper-v0.9.4.pdf</span>
                  <span className="text-emerald-400">28 Pages • 2.4 MB</span>
                </div>

                <div className="py-4 space-y-3 text-[11px] text-zinc-400">
                  <div className="text-zinc-200 font-semibold uppercase tracking-wider text-[10px]">
                    Table of Contents (Selected Excerpts):
                  </div>
                  <div className="p-2 rounded bg-zinc-950 border border-zinc-850 flex items-center justify-between">
                    <span>§ 1.0 Microgrid Decentralization Bottlenecks</span>
                    <span className="text-zinc-600">p. 03</span>
                  </div>
                  <div className="p-2 rounded bg-zinc-950 border border-zinc-850 flex items-center justify-between">
                    <span>§ 2.4 Claude 3.5 Sonnet Auction Formulation</span>
                    <span className="text-emerald-400">p. 09</span>
                  </div>
                  <div className="p-2 rounded bg-zinc-950 border border-zinc-850 flex items-center justify-between">
                    <span>§ 3.1 Voltage Stability & Droop Inversion</span>
                    <span className="text-zinc-600">p. 15</span>
                  </div>
                  <div className="p-2 rounded bg-zinc-950 border border-zinc-850 flex items-center justify-between">
                    <span>§ 4.2 ZK-State Channel Settlement Benchmarks</span>
                    <span className="text-zinc-600">p. 22</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-850 flex items-center justify-between text-[10px] text-zinc-500">
                  <span>DOI: 10.48550/arXiv.2024.ecotrade</span>
                  <span className="text-amber-400/90">Peer-Review Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
