"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Activity, Clock, ShieldCheck, Database } from "lucide-react";

export default function MetricsBar() {
  const metrics = [
    {
      label: "PEAK LOAD REDUCTION",
      value: "34.8%",
      delta: "via VPP Orchestration",
      description: "Localized microgrid stress shaved during critical summer peak hours",
      icon: Zap,
      accent: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
    },
    {
      label: "AGENT AUCTION LATENCY",
      value: "< 420ms",
      delta: "Claude 3.5 Sonnet",
      description: "Sub-second multi-agent double-auction clearance and tool execution",
      icon: Clock,
      accent: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10",
    },
    {
      label: "SOLAR FORECAST ACCURACY",
      value: "99.4%",
      delta: "Multi-Modal Ingestion",
      description: "Satellite irradiance fused with real-time inverter telemetry",
      icon: Activity,
      accent: "text-amber-400 border-amber-500/20 bg-amber-500/10",
    },
    {
      label: "GRID TOPOLOGY CONTEXT",
      value: "200k",
      delta: "Tokens per Pass",
      description: "Complete 500+ bus node graph ingested in a single reasoning loop",
      icon: Database,
      accent: "text-violet-400 border-violet-500/20 bg-violet-500/10",
    },
  ];

  return (
    <div className="border-y border-zinc-800/80 bg-[#090b0e]/90 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col justify-between p-4 rounded-xl bg-zinc-950/40 border border-zinc-850 hover:border-zinc-700/60 transition-all duration-200 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase">
                      {item.label}
                    </span>
                    <div className={`p-1.5 rounded-lg border ${item.accent}`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl lg:text-4xl font-bold font-mono tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                      {item.value}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400">
                      {item.delta}
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-xs text-zinc-500 leading-relaxed font-sans">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
