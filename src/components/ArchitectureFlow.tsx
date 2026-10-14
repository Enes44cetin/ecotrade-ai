"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Cpu,
  Scale,
  Zap,
  ArrowRight,
  ShieldCheck,
  Server,
  Layers,
  ChevronRight,
  Coins,
} from "lucide-react";

export default function ArchitectureFlow() {
  const steps = [
    {
      step: "01",
      title: "Telemetry Ingestion & Edge Sensing",
      description:
        "High-frequency gRPC streams from smart inverters, BESS telemetry, and satellite solar pyranometers feed real-time generation and load vectors into the edge pipeline.",
      icon: Activity,
      tag: "50Hz Edge Stream",
      accent: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    },
    {
      step: "02",
      title: "Topology Assembly & Claude 3.5 Reasoning",
      description:
        "Microgrid power flow matrices and IEEE-33 bus impedances are assembled into Claude 3.5 Sonnet's 200k context window. Non-linear power flow constraints are evaluated.",
      icon: Cpu,
      tag: "200k Context Window",
      accent: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    },
    {
      step: "03",
      title: "Decentralized Swarm Auction Clearing",
      description:
        "Individual prosumer agents execute game-theoretic double auctions. Continuous bids and asks clear at dynamic locational marginal prices (DLMP) in sub-second cycles.",
      icon: Scale,
      tag: "Game-Theoretic CDA",
      accent: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
    },
    {
      step: "04",
      title: "Hardware Dispatch & ZK Settlement",
      description:
        "Smart inverters adjust droop curves within 100ms. State-channel cryptographic zero-knowledge proofs commit instantaneous settlements without revealing household telemetry.",
      icon: ShieldCheck,
      tag: "ZK-Rollup & IEEE 2030.5",
      accent: "text-violet-400 border-violet-500/30 bg-violet-500/10",
    },
  ];

  return (
    <section id="protocol-architecture" className="py-24 sm:py-32 relative bg-[#07080a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-cyan-400 mb-4">
            <Server className="w-3.5 h-3.5" />
            <span>END-TO-END AGENTIC PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans">
            How EcoTrade AI Orchestrates the Grid
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            From raw solar photon capture to on-chain cryptographic settlement: an automated four-stage continuous feedback loop operating every 1,000 milliseconds.
          </p>
        </div>

        {/* 4 Step Cards with Connecting Line */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.12 }}
                className="relative rounded-2xl bg-[#0b0e14] border border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-700 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-2xl font-bold text-zinc-700 group-hover:text-zinc-500 transition-colors">
                      {item.step}
                    </span>
                    <div className={`p-2 rounded-xl border ${item.accent}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800 mb-3">
                    {item.tag}
                  </span>

                  <h3 className="text-lg font-semibold text-white mb-2 font-sans group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>Latency Budget</span>
                  <span className="text-zinc-300 font-semibold">
                    {index === 0 ? "48ms" : index === 1 ? "280ms" : index === 2 ? "65ms" : "80ms"}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
