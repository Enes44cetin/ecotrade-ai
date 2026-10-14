"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Scale,
  ShieldCheck,
  Cpu,
  BarChart3,
  Layers,
  ArrowRight,
  Database,
  CloudSun,
  Coins,
  Lock,
  GitBranch,
} from "lucide-react";

export default function FeatureGrid() {
  const [forecastView, setForecastView] = useState<"graph" | "metrics">("graph");
  const [biddingTab, setBiddingTab] = useState<"game_theory" | "matching">("game_theory");

  return (
    <section id="capabilities" className="py-24 sm:py-32 relative bg-[#07080a]">
      {/* Decorative background grid and gradient */}
      <div className="absolute inset-0 bg-grid-cyber opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>CORE ARCHITECTURAL PILLARS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans">
            Engineered for High-Frequency{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
              Microgrid Autonomous Dispatch
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Decentralizing the electrical grid requires solving complex non-linear power flows and multi-agent game theory in real time. EcoTrade AI operates across three foundational primitives.
          </p>
        </div>

        {/* 3 Core Capability Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: AI Load Forecasting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group rounded-2xl bg-[#0c0e13] border border-zinc-800 hover:border-emerald-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_32px_rgba(16,185,129,0.12)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors" />

            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)]">
                  <CloudSun className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                  MODULE // 01
                </span>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight mb-2 font-sans group-hover:text-emerald-300 transition-colors">
                AI Load & Generation Forecasting
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Deep multi-modal fusion combining geostationary cloud irradiance, local pyranometer sensors, and historical consumption profiles to forecast 15-minute dispatch intervals with 99.4% precision.
              </p>

              {/* Technical Interactive Visual Inside Card */}
              <div className="rounded-xl bg-zinc-950/90 border border-zinc-850 p-4 font-mono text-xs mb-6">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800/80 mb-3 text-[11px]">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>PV Generation Curve (kW)</span>
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setForecastView("graph")}
                      className={`text-[10px] px-1.5 py-0.5 rounded ${
                        forecastView === "graph" ? "bg-zinc-800 text-emerald-400" : "text-zinc-500"
                      }`}
                    >
                      Graph
                    </button>
                    <button
                      onClick={() => setForecastView("metrics")}
                      className={`text-[10px] px-1.5 py-0.5 rounded ${
                        forecastView === "metrics" ? "bg-zinc-800 text-emerald-400" : "text-zinc-500"
                      }`}
                    >
                      Loss
                    </button>
                  </div>
                </div>

                {forecastView === "graph" ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-zinc-400">
                      <span>12:00 PM (Solar Peak)</span>
                      <span className="text-emerald-400 font-semibold">248 kW</span>
                    </div>
                    {/* Simulated visual bar */}
                    <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden flex">
                      <div className="bg-emerald-400 h-full w-[88%]" />
                      <div className="bg-emerald-500/30 h-full w-[12%]" />
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-1">
                      <span>16:00 PM (Duck Curve Ramp)</span>
                      <span className="text-amber-400 font-semibold">142 kW</span>
                    </div>
                    <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden flex">
                      <div className="bg-amber-400 h-full w-[54%]" />
                      <div className="bg-amber-500/30 h-full w-[46%]" />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex justify-between text-zinc-400">
                      <span>RMSE Loss:</span>
                      <span className="text-emerald-400 font-mono">0.0142 kWh</span>
                    </div>
                    <div className="flex justify-between text-zinc-400">
                      <span>Inverter Ingestion Lag:</span>
                      <span className="text-emerald-400 font-mono">48ms (gRPC)</span>
                    </div>
                    <div className="flex justify-between text-zinc-400">
                      <span>Duck Curve Mitigation:</span>
                      <span className="text-cyan-400 font-mono">Automated</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Card Features List */}
            <div className="pt-4 border-t border-zinc-800/80">
              <ul className="space-y-2 text-xs text-zinc-400 font-mono">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Sub-second pyranometer & weather sync</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Confidence interval risk assessment</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Automated BESS pre-charge triggers</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 2: Real-time Autonomous Bidding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="group rounded-2xl bg-[#0c0e13] border border-zinc-800 hover:border-cyan-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_32px_rgba(0,229,255,0.12)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors" />

            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_-3px_rgba(0,229,255,0.3)]">
                  <Scale className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                  MODULE // 02
                </span>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight mb-2 font-sans group-hover:text-cyan-300 transition-colors">
                Real-Time Autonomous Bidding
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Continuous double-auction (CDA) game-theoretic matching powered by Claude 3.5 Sonnet. Prosumer agents autonomously bid and ask, maximizing revenue while preventing local transformer over-voltages.
              </p>

              {/* Technical Interactive Visual Inside Card */}
              <div className="rounded-xl bg-zinc-950/90 border border-zinc-850 p-4 font-mono text-xs mb-6">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800/80 mb-3 text-[11px]">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Agent Swarm Auction State</span>
                  </span>
                  <span className="text-[10px] text-cyan-400 font-semibold">Sonnet Loop</span>
                </div>

                <div className="space-y-2 text-[11px]">
                  <div className="flex justify-between items-center py-1 px-2 rounded bg-zinc-900">
                    <span className="text-zinc-400">Auction Engine:</span>
                    <span className="text-zinc-200 font-semibold">Continuous Double-Auction</span>
                  </div>
                  <div className="flex justify-between items-center py-1 px-2 rounded bg-zinc-900">
                    <span className="text-zinc-400">Clearing Interval:</span>
                    <span className="text-cyan-400 font-semibold">1,000 ms (Epoch)</span>
                  </div>
                  <div className="flex justify-between items-center py-1 px-2 rounded bg-zinc-900">
                    <span className="text-zinc-400">Nash Spread Margin:</span>
                    <span className="text-emerald-400 font-semibold">$0.0032 / kWh</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Features List */}
            <div className="pt-4 border-t border-zinc-800/80">
              <ul className="space-y-2 text-xs text-zinc-400 font-mono">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Claude 3.5 multi-agent game-theory optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Battery degradation wear-cost modeling</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Dynamic locational marginal pricing (DLMP)</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 3: Smart Contract Settlement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group rounded-2xl bg-[#0c0e13] border border-zinc-800 hover:border-violet-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_32px_rgba(139,92,246,0.12)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 rounded-full blur-2xl group-hover:bg-violet-500/10 transition-colors" />

            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-violet-500/30 flex items-center justify-center text-violet-400 shadow-[0_0_15px_-3px_rgba(139,92,246,0.3)]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                  MODULE // 03
                </span>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight mb-2 font-sans group-hover:text-violet-300 transition-colors">
                Smart Contract Settlement
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Sub-second micro-settlement via zero-knowledge state channels. Meters cryptographically attest kWh consumption and generation, committing verified batch states on-chain without exposing private consumption telemetry.
              </p>

              {/* Technical Interactive Visual Inside Card */}
              <div className="rounded-xl bg-zinc-950/90 border border-zinc-850 p-4 font-mono text-xs mb-6">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800/80 mb-3 text-[11px]">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-violet-400" />
                    <span>ZK-Rollup State Channel Proof</span>
                  </span>
                  <span className="text-[10px] text-emerald-400">Verified</span>
                </div>

                <div className="space-y-1.5 text-[11px] text-zinc-400">
                  <div className="flex justify-between">
                    <span>Protocol:</span>
                    <span className="text-zinc-200">IEEE 2030.5 / ZK-SNARK</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Settlement Time:</span>
                    <span className="text-emerald-400 font-mono">180 ms (Finalized)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gas / Fee per Swap:</span>
                    <span className="text-violet-400 font-mono">&lt; $0.0001 (Micro-tx)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Features List */}
            <div className="pt-4 border-t border-zinc-800/80">
              <ul className="space-y-2 text-xs text-zinc-400 font-mono">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  <span>Zero-knowledge privacy-preserving metering</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  <span>Bilateral state channels for zero counterparty risk</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  <span>Compliant with IEEE 2030.5 DER standards</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
