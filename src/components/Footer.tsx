"use client";

import React from "react";
import { Zap, Cpu, Terminal, Shield, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 bg-[#060709] text-zinc-400 font-sans relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-zinc-900">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900 border border-emerald-500/30 text-emerald-400">
                <Zap className="w-4 h-4 fill-emerald-400/20" />
              </div>
              <span className="font-bold text-lg text-white font-sans tracking-tight">
                EcoTrade <span className="text-emerald-400 font-mono text-sm px-1 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">AI</span>
              </span>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Autonomous multi-agent microgrid energy auction infrastructure. Powered by Anthropic Claude 3.5 Sonnet for decentralized renewable load balancing and zero-knowledge micro-settlement.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Testbed: IEEE-33 Bus Live (59.998 Hz)</span>
              </div>
            </div>
          </div>

          {/* Links Column 1: Architecture */}
          <div className="space-y-3 text-xs">
            <div className="font-mono text-zinc-200 uppercase tracking-wider text-[11px] font-semibold">
              Architecture
            </div>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <a href="#capabilities" className="hover:text-emerald-400 transition-colors">
                  Load & Solar Forecasting
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-emerald-400 transition-colors">
                  Autonomous Double Auctions
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-emerald-400 transition-colors">
                  ZK-State Channels
                </a>
              </li>
              <li>
                <a href="#protocol-architecture" className="hover:text-emerald-400 transition-colors">
                  IEEE 2030.5 Protocol
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Claude Core */}
          <div className="space-y-3 text-xs">
            <div className="font-mono text-zinc-200 uppercase tracking-wider text-[11px] font-semibold">
              Claude 3.5 Sonnet
            </div>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <a href="#claude-architecture" className="hover:text-amber-400 transition-colors">
                  Agent Tool Definitions
                </a>
              </li>
              <li>
                <a href="#claude-architecture" className="hover:text-amber-400 transition-colors">
                  Constitutional Safety Guardrails
                </a>
              </li>
              <li>
                <a href="#claude-architecture" className="hover:text-amber-400 transition-colors">
                  200k Context Topology
                </a>
              </li>
              <li>
                <a href="#whitepaper" className="hover:text-amber-400 transition-colors">
                  Research Whitepaper
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Anthropic Grant Note */}
          <div className="space-y-3 text-xs">
            <div className="font-mono text-zinc-200 uppercase tracking-wider text-[11px] font-semibold">
              Grant Application
            </div>
            <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-850 space-y-2">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block">
                Claude for Startups
              </span>
              <p className="text-[11px] text-zinc-400 leading-normal">
                Applying for Anthropic API credits to scale 1,000+ simultaneous microgrid agent testbeds.
              </p>
              <span className="text-[10px] font-mono text-zinc-500 block">
                Cohort Q4 2024 / 2025
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            &copy; 2025 EcoTrade AI Systems Inc. Built for Anthropic Claude for Startups.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-zinc-400 cursor-pointer transition-colors">IEEE 1547-2018 Compliant</span>
            <span className="hover:text-zinc-400 cursor-pointer transition-colors">SOC2 Type II in Progress</span>
            <span className="text-emerald-400">Oracles: 100% Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
