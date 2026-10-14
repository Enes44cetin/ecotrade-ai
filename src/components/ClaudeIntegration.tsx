"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Sparkles,
  Zap,
  Code2,
  Shield,
  Layers,
  Terminal,
  ExternalLink,
  CheckCircle2,
  Copy,
  Check,
} from "lucide-react";

export default function ClaudeIntegration() {
  const [activeSnippet, setActiveSnippet] = useState<"reasoning" | "system_prompt" | "tool_call">("reasoning");
  const [copied, setCopied] = useState(false);

  const snippets = {
    reasoning: `// Claude 3.5 Sonnet Reasoning Output (Token stream sample)
{
  "model": "claude-3-5-sonnet-20241022",
  "thinking": [
    "Analyzing topology bus voltages across Feeder 3 (Buses 18 to 22)...",
    "Bus 20 voltage index reached 1.042 p.u., approaching IEEE-1547 maximum threshold (1.05 p.u.).",
    "Prosumer-Solar-09 generating +42 kW reverse power flow into substation.",
    "Formulating double-auction: Pair Solar-09 surplus with EV-Hub Fast Charger at Bus 19.",
    "Bilateral price cleared at $0.118/kWh. Both prosumer utility functions satisfied.",
    "Invoking tool 'dispatch_power_auction' to adjust smart inverter active/reactive power droop."
  ],
  "tool_calls": [
    {
      "name": "dispatch_power_auction",
      "arguments": {
        "microgrid_id": "MICROGRID-SF-MISSION-33",
        "cleared_energy_kwh": 42.0,
        "clearing_price_usd_kwh": 0.118,
        "bess_dispatch_schedule": [{ "node_id": "BESS-02", "power_kw": -24.5 }],
        "zk_state_commitment": "0x8a4b6c3d9e2f1a0b5c7e9d4a2f8b1c3e5a7d9f2b4c6e8a0d2f4b6c8e0a2d4f6b"
      }
    }
  ],
  "usage": { "input_tokens": 1428, "output_tokens": 194, "latency_ms": 382 }
}`,
    system_prompt: `# EcoTrade AI Agent System Prompt (Claude 3.5 Sonnet Core)

You are the Autonomous Microgrid Clearing Agent for IEEE-33 Bus Topology.
Your mandate is dual-objective:
1. MAXIMIZE localized renewable energy utilization and consumer surplus through peer-to-peer double auctions.
2. ENFORCE absolute physical grid stability constraints (IEEE 1547 & IEEE 2030.5).

CONSTITUTIONAL SAFETY GUARDRAILS (Non-Negotiable):
- Frequency Operating Envelope: MUST remain within 59.95 Hz - 60.05 Hz.
- Voltage Profile: MUST NOT permit any bus node to exceed 0.95 p.u. < V_bus < 1.05 p.u.
- In the event of conflicting auction clearing vs electrical safety, REJECT bids and command BESS reactive power injection.`,
    tool_call: `// TypeScript Claude 3.5 SDK Tool Call Execution
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function runMicrogridAgentEpoch(telemetry: MicrogridTelemetry) {
  const response = await anthropic.messages.create({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 2048,
    temperature: 0.1, // Deterministic auction clearing
    system: ECOTRADE_SYSTEM_PROMPT,
    tools: [DISPATCH_AUCTION_TOOL_SCHEMA, ADJUST_INVERTER_DROOP_TOOL_SCHEMA],
    tool_choice: { type: "auto" },
    messages: [
      {
        role: "user",
        content: \`Microgrid telemetry at epoch \${telemetry.timestamp}: \${JSON.stringify(telemetry.nodes)}\`
      }
    ]
  });

  return handleAgentToolCalls(response);
}`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeSnippet]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="claude-architecture" className="py-24 sm:py-32 relative bg-[#090b0e] border-y border-zinc-800/80 overflow-hidden">
      {/* Background warm Anthropic-style amber/terracotta glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/8 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-emerald-500/8 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 mb-4">
            <Cpu className="w-3.5 h-3.5 text-amber-400" />
            <span>ANTHROPIC STARTUP GRANT INTEGRATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans">
            Engineered Specifically for{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-emerald-400 bg-clip-text text-transparent">
              Claude 3.5 Sonnet
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Autonomous power grids cannot rely on simple heuristics or basic classification models. EcoTrade AI leverages Claude 3.5 Sonnet’s high-precision multi-step reasoning to evaluate non-linear Nash equilibria and preserve electrical grid safety.
          </p>
        </div>

        {/* 2-Column Layout: Architecture Highlights + Live Code/Trace Viewer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 4 Technical Pillars of Claude Integration */}
          <div className="lg:col-span-5 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-5 rounded-xl bg-zinc-950/70 border border-zinc-800 hover:border-amber-500/30 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-zinc-100 font-sans text-sm">
                  Complex Game-Theoretic Auction Reasoning
                </h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Claude 3.5 Sonnet analyzes continuous double-sided auctions across dozens of distributed prosumers, dynamically calculating fair market clearing prices while balancing battery cycle depreciation costs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="p-5 rounded-xl bg-zinc-950/70 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-zinc-100 font-sans text-sm">
                  200,000 Token Topological Graph Ingestion
                </h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Microgrid networks comprise hundreds of interconnected bus nodes and impedance matrices. Claude’s extensive context window permits feeding complete power flow matrices in a single deterministic pass.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="p-5 rounded-xl bg-zinc-950/70 border border-zinc-800 hover:border-cyan-500/30 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-zinc-100 font-sans text-sm">
                  Low-Latency Function Calling (&lt; 400ms)
                </h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Power dispatch cannot wait. Claude 3.5 Sonnet generates structured JSON tool arguments at industry-leading speed, commanding inverter droop settings and microgrid relays before voltage spikes propagate.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="p-5 rounded-xl bg-zinc-950/70 border border-zinc-800 hover:border-violet-500/30 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400">
                  <Shield className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-zinc-100 font-sans text-sm">
                  Constitutional Safety & IEEE 1547 Guardrails
                </h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Anthropic’s steerability ensures strict adherence to electrical physics. Even during high market volatility, agents adhere to constitutional constraints preventing blackout conditions or transformer over-temperatures.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Interactive Claude 3.5 Code & Trace Inspector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-2xl bg-[#07080a] border border-zinc-800 shadow-2xl overflow-hidden"
          >
            {/* Header / Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-zinc-900/90 border-b border-zinc-800 gap-2">
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto max-w-full pb-1 sm:pb-0">
                <button
                  onClick={() => setActiveSnippet("reasoning")}
                  className={`text-[11px] sm:text-xs font-mono px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md transition-colors whitespace-nowrap ${
                    activeSnippet === "reasoning"
                      ? "bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  Sonnet Reasoning Trace
                </button>
                <button
                  onClick={() => setActiveSnippet("system_prompt")}
                  className={`text-[11px] sm:text-xs font-mono px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md transition-colors whitespace-nowrap ${
                    activeSnippet === "system_prompt"
                      ? "bg-zinc-800 text-emerald-400 font-semibold border border-emerald-500/30"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  Constitutional Guardrails
                </button>
                <button
                  onClick={() => setActiveSnippet("tool_call")}
                  className={`text-[11px] sm:text-xs font-mono px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md transition-colors whitespace-nowrap ${
                    activeSnippet === "tool_call"
                      ? "bg-zinc-800 text-cyan-400 font-semibold border border-cyan-500/30"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  API Tool Execution
                </button>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-zinc-400 hover:text-white px-2.5 py-1 rounded bg-zinc-800/60 transition-colors flex-shrink-0"
                  title="Copy snippet"
                >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

            {/* Code Content */}
            <div className="p-4 sm:p-5 font-mono text-xs overflow-x-auto max-h-[460px] leading-relaxed text-zinc-300 bg-[#07080a]">
              <pre className="whitespace-pre">
                {snippets[activeSnippet]}
              </pre>
            </div>

            {/* Footer with Performance Telemetry */}
            <div className="px-4 py-3 bg-zinc-950/80 border-t border-zinc-850 flex flex-wrap items-center justify-between text-[11px] font-mono text-zinc-400">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Evaluation Passed: IEEE-33 Bus</span>
                </span>
                <span className="text-zinc-600">|</span>
                <span>Latency: 382ms</span>
              </div>
              <div className="flex items-center gap-1.5 text-amber-400">
                <span>Claude 3.5 Sonnet (claude-3-5-sonnet-20241022)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
