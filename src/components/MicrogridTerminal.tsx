"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Cpu,
  Activity,
  Zap,
  BatteryCharging,
  Sun,
  ShieldCheck,
  RefreshCw,
  Play,
  Pause,
  Sliders,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Code2,
} from "lucide-react";

interface LogMessage {
  id: string;
  time: string;
  category: "INGEST" | "CLAUDE" | "AUCTION" | "SETTLE" | "SAFETY";
  message: string;
  badgeColor: string;
}

export default function MicrogridTerminal() {
  const [activeTab, setActiveTab] = useState<"terminal" | "orderbook" | "claude_schema">("terminal");
  const [isRunning, setIsRunning] = useState(true);
  const [solarOutput, setSolarOutput] = useState(182.4);
  const [bessSoc, setBessSoc] = useState(74.6);
  const [loadDemand, setLoadDemand] = useState(138.2);
  const [clearingPrice, setClearingPrice] = useState(0.118);
  const [eventTriggered, setEventTriggered] = useState<string | null>(null);

  const initialLogs: LogMessage[] = [
    {
      id: "1",
      time: "14:52:01.104",
      category: "INGEST",
      message: "Node-07 Inverter telemetry: PV generation at 182.4 kW. Cloud boundary 2.4km NW.",
      badgeColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
    },
    {
      id: "2",
      time: "14:52:01.320",
      category: "CLAUDE",
      message: "Claude 3.5 Sonnet: Evaluated Nash-equilibrium for 14 prosumer agents across 33-bus topology.",
      badgeColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    },
    {
      id: "3",
      time: "14:52:01.540",
      category: "AUCTION",
      message: "Auction cleared: 64.2 kWh matched @ $0.118/kWh. Spread narrowed to $0.004.",
      badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    },
    {
      id: "4",
      time: "14:52:01.712",
      category: "SETTLE",
      message: "ZK-State Channel proof #88492 validated. Tx: 0x8a4b...3f9e committed to microgrid ledger.",
      badgeColor: "text-violet-400 border-violet-500/30 bg-violet-500/10",
    },
    {
      id: "5",
      time: "14:52:01.890",
      category: "SAFETY",
      message: "Grid Frequency 59.998 Hz. Feeder #2 voltage stability index: 1.02 p.u. Safe operating envelope.",
      badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    },
  ];

  const [logs, setLogs] = useState<LogMessage[]>(initialLogs);

  // Periodic simulated live ticks
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}.${String(Math.floor(Math.random() * 900) + 100)}`;
      
      // small organic telemetry drifts
      setSolarOutput((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
      setLoadDemand((prev) => +(prev + (Math.random() * 1.6 - 0.8)).toFixed(1));
      setClearingPrice((prev) => +(prev + (Math.random() * 0.002 - 0.001)).toFixed(3));

      const logTemplates: Array<{ category: LogMessage["category"]; text: string; color: string }> = [
        {
          category: "CLAUDE",
          text: `Claude 3.5 Sonnet: Dispatched tool 'adjust_inverter_droop(node="B-04", target_pf=0.98)' [Latency: 284ms]`,
          color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
        },
        {
          category: "AUCTION",
          text: `Micro-auction epoch #${Math.floor(Math.random() * 1000 + 4000)} executed. 18 ask orders matched against 22 bids.`,
          color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
        },
        {
          category: "INGEST",
          text: `BESS Pack-02 State of Charge: ${bessSoc}% | Temp: 24.2°C | Inverter Efficiency: 98.7%`,
          color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
        },
        {
          category: "SETTLE",
          text: `Batch micro-settlement: 142 kWh zero-slippage swap verified with zk-SNARK rollup proof.`,
          color: "text-violet-400 border-violet-500/30 bg-violet-500/10",
        },
      ];

      const chosen = logTemplates[Math.floor(Math.random() * logTemplates.length)];
      const newEntry: LogMessage = {
        id: Math.random().toString(36).substring(2, 9),
        time: timeStr,
        category: chosen.category,
        message: chosen.text,
        badgeColor: chosen.color,
      };

      setLogs((prev) => [newEntry, ...prev.slice(0, 7)]);
    }, 3200);

    return () => clearInterval(interval);
  }, [isRunning, bessSoc]);

  // Handle evaluator test buttons
  const triggerCloudEvent = () => {
    setEventTriggered("Cloud Event (-45% Solar Inflow)");
    setSolarOutput(98.2);
    setBessSoc((prev) => +(prev - 1.2).toFixed(1));
    setClearingPrice(0.142);
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}.120`;
    
    setLogs((prev) => [
      {
        id: Math.random().toString(),
        time: timeStr,
        category: "SAFETY",
        message: "CRITICAL: Cloud occlusion event detected on PV Feeder A. Solar dropped 84.2 kW.",
        badgeColor: "text-rose-400 border-rose-500/30 bg-rose-500/10",
      },
      {
        id: Math.random().toString(),
        time: timeStr,
        category: "CLAUDE",
        message: "Claude 3.5 Sonnet: Initiated emergency ramp-up on BESS units 1 & 2 (+60 kW discharge). Grid frequency maintained @ 59.997 Hz.",
        badgeColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      },
      ...prev.slice(0, 6),
    ]);

    setTimeout(() => setEventTriggered(null), 4000);
  };

  const triggerEvSpike = () => {
    setEventTriggered("EV Fleet Fast-Charging Surge (+85 kW)");
    setLoadDemand(224.6);
    setClearingPrice(0.165);
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}.430`;

    setLogs((prev) => [
      {
        id: Math.random().toString(),
        time: timeStr,
        category: "INGEST",
        message: "EV Charging Hub Gamma: 6x 150kW fast-chargers connected simultaneously. Aggregate demand surged.",
        badgeColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
      },
      {
        id: Math.random().toString(),
        time: timeStr,
        category: "CLAUDE",
        message: "Claude 3.5 Sonnet: Dynamically orchestrated virtual power plant (VPP) aggregated bids. Avoided utility demand tariff spike by $420/hr.",
        badgeColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      },
      ...prev.slice(0, 6),
    ]);

    setTimeout(() => setEventTriggered(null), 4000);
  };

  return (
    <div className="relative rounded-2xl bg-[#090b0e] border border-zinc-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden">
      {/* Subtle top accent highlight */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      {/* Terminal Title Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 border-b border-zinc-800/80 bg-[#0d1015]/90 gap-2">
        <div className="flex items-center justify-between sm:justify-start gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-zinc-600">|</span>
          <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-300 truncate">
            <Terminal className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
            <span className="hidden sm:inline">ecotrade-orchestrator@microgrid-alpha:~$</span>
            <span className="sm:hidden text-[11px]">microgrid-alpha:~$</span>
            <span className="px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex-shrink-0">
              LIVE
            </span>
          </div>

          {/* Mobile Play/Pause */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="p-1 rounded bg-zinc-800/70 border border-zinc-700/60 text-zinc-300"
              title={isRunning ? "Pause" : "Play"}
            >
              {isRunning ? (
                <Pause className="w-3 h-3 text-amber-400" />
              ) : (
                <Play className="w-3 h-3 text-emerald-400" />
              )}
            </button>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 bg-zinc-900/90 p-0.5 rounded-lg border border-zinc-800 text-[11px] sm:text-xs font-mono overflow-x-auto max-w-full">
          <button
            onClick={() => setActiveTab("terminal")}
            className={`px-2.5 sm:px-3 py-1 rounded-md transition-all whitespace-nowrap ${
              activeTab === "terminal"
                ? "bg-zinc-800 text-emerald-400 font-semibold shadow-sm"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Agent Logs
          </button>
          <button
            onClick={() => setActiveTab("orderbook")}
            className={`px-2.5 sm:px-3 py-1 rounded-md transition-all whitespace-nowrap ${
              activeTab === "orderbook"
                ? "bg-zinc-800 text-emerald-400 font-semibold shadow-sm"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            P2P Orderbook
          </button>
          <button
            onClick={() => setActiveTab("claude_schema")}
            className={`px-2.5 sm:px-3 py-1 rounded-md transition-all whitespace-nowrap ${
              activeTab === "claude_schema"
                ? "bg-zinc-800 text-amber-400 font-semibold shadow-sm flex items-center gap-1"
                : "text-zinc-400 hover:text-zinc-200 flex items-center gap-1"
            }`}
          >
            <Cpu className="w-3 h-3 text-amber-400 flex-shrink-0" />
            <span>Claude API Tool</span>
          </button>
        </div>

        {/* Control Button (Desktop) */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="flex items-center gap-1 text-[11px] font-mono px-2 py-1 rounded bg-zinc-800/70 border border-zinc-700/60 text-zinc-300 hover:text-white transition-colors"
          >
            {isRunning ? (
              <>
                <Pause className="w-3 h-3 text-amber-400" /> Pause Stream
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-emerald-400" /> Resume Stream
              </>
            )}
          </button>
        </div>
      </div>

      {/* Real-time Microgrid Quick Telemetry Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-800/60 border-b border-zinc-800/80">
        <div className="bg-[#0b0e13] p-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Sun className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">PV Generation</div>
              <div className="text-sm font-semibold text-zinc-100 font-mono">{solarOutput} kW</div>
            </div>
          </div>
          <span className="text-[10px] text-emerald-400 font-mono">+12.4% vs avg</span>
        </div>

        <div className="bg-[#0b0e13] p-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <BatteryCharging className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">BESS Storage</div>
              <div className="text-sm font-semibold text-zinc-100 font-mono">{bessSoc}% SoC</div>
            </div>
          </div>
          <span className="text-[10px] text-zinc-400 font-mono">1.2 MWh reserve</span>
        </div>

        <div className="bg-[#0b0e13] p-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">P2P Clearing Price</div>
              <div className="text-sm font-semibold text-emerald-400 font-mono">${clearingPrice}/kWh</div>
            </div>
          </div>
          <span className="text-[10px] text-emerald-400/90 font-mono line-through text-zinc-600 ml-1">
            <span className="text-zinc-500 mr-1">$0.34</span>
            <span className="text-emerald-400 font-bold">-65%</span>
          </span>
        </div>

        <div className="bg-[#0b0e13] p-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-md bg-violet-500/10 border border-violet-500/20 text-violet-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">Grid Stability</div>
              <div className="text-sm font-semibold text-zinc-100 font-mono">59.998 Hz</div>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Nominal
          </span>
        </div>
      </div>

      {/* Main Terminal Body */}
      <div className="p-4 sm:p-5 min-h-[320px] max-h-[400px] overflow-y-auto font-mono text-xs">
        {activeTab === "terminal" && (
          <div className="space-y-2.5">
            {eventTriggered && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-2.5 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400 animate-bounce" />
                  <span className="font-semibold">TEST INJECTION ACTIVE: {eventTriggered}</span>
                </div>
                <span className="text-[10px] text-amber-400/80">Claude 3.5 Sonnet auto-compensating...</span>
              </motion.div>
            )}

            <AnimatePresence initial={false}>
              {logs.map((log) => (
                <motion.div
                  key={log.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-2.5 py-1 border-b border-zinc-900/80 hover:bg-zinc-900/40 px-1.5 rounded transition-colors"
                >
                  <span className="text-zinc-500 select-none text-[11px] whitespace-nowrap">
                    [{log.time}]
                  </span>
                  <span
                    className={`px-1.5 py-0.5 rounded text-[10px] font-semibold border ${log.badgeColor} whitespace-nowrap`}
                  >
                    {log.category}
                  </span>
                  <span className="text-zinc-300 leading-relaxed break-all">
                    {log.message}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {activeTab === "orderbook" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Bid Side */}
            <div className="rounded-lg bg-zinc-950/70 border border-zinc-800 p-3">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-800 text-[11px] text-zinc-400">
                <span className="text-emerald-400 font-semibold">BUY BIDS (Consumers & Storage)</span>
                <span>Vol (kWh) | Price ($)</span>
              </div>
              <div className="mt-2 space-y-1.5">
                {[
                  { agent: "EV-Hub-Alpha", vol: "45.0", price: "0.121", fill: "85%" },
                  { agent: "Commercial-HVAC-3", vol: "32.5", price: "0.119", fill: "60%" },
                  { agent: "BESS-Buffer-02", vol: "50.0", price: "0.118", fill: "95%" },
                  { agent: "DataCenter-Micro", vol: "18.2", price: "0.116", fill: "35%" },
                  { agent: "Residential-Pod-A", vol: "12.0", price: "0.114", fill: "20%" },
                ].map((bid, i) => (
                  <div key={i} className="flex items-center justify-between text-[11px] py-1 px-1.5 rounded bg-emerald-950/20 text-zinc-300">
                    <span className="text-zinc-400">{bid.agent}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-zinc-300">{bid.vol} kWh</span>
                      <span className="text-emerald-400 font-semibold">${bid.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ask Side */}
            <div className="rounded-lg bg-zinc-950/70 border border-zinc-800 p-3">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-800 text-[11px] text-zinc-400">
                <span className="text-cyan-400 font-semibold">SELL ASKS (Solar Prosumers & Wind)</span>
                <span>Vol (kWh) | Price ($)</span>
              </div>
              <div className="mt-2 space-y-1.5">
                {[
                  { agent: "Rooftop-Solar-401", vol: "42.0", price: "0.117", fill: "90%" },
                  { agent: "Carport-PV-East", vol: "38.0", price: "0.118", fill: "75%" },
                  { agent: "Community-BESS-01", vol: "60.0", price: "0.120", fill: "50%" },
                  { agent: "MicroWind-Turbine-2", vol: "15.5", price: "0.122", fill: "30%" },
                  { agent: "Rooftop-Solar-109", vol: "24.0", price: "0.124", fill: "15%" },
                ].map((ask, i) => (
                  <div key={i} className="flex items-center justify-between text-[11px] py-1 px-1.5 rounded bg-cyan-950/20 text-zinc-300">
                    <span className="text-zinc-400">{ask.agent}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-zinc-300">{ask.vol} kWh</span>
                      <span className="text-cyan-400 font-semibold">${ask.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "claude_schema" && (
          <div className="rounded-lg bg-zinc-950 border border-zinc-800 p-3 text-zinc-300">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800/80 mb-2">
              <span className="text-amber-400 font-semibold flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5" /> Claude 3.5 Sonnet Tool Call Definition (dispatch_power_auction)
              </span>
              <span className="text-[10px] text-zinc-500">model: claude-3-5-sonnet-20241022</span>
            </div>
            <pre className="text-[11px] text-zinc-300 overflow-x-auto leading-relaxed">
{`{
  "name": "dispatch_power_auction",
  "description": "Executes optimal microgrid double-auction clearing based on IEEE-33 power flow constraints",
  "parameters": {
    "type": "object",
    "properties": {
      "microgrid_id": { "type": "string", "enum": ["MICROGRID-SF-MISSION-33"] },
      "auction_epoch_sec": { "type": "integer", "example": 1728921120 },
      "target_clearing_price_usd_kwh": { "type": "number", "minimum": 0.05, "maximum": 0.40 },
      "cleared_energy_kwh": { "type": "number" },
      "bess_dispatch_schedule": {
        "type": "array",
        "items": {
          "node_id": { "type": "string" },
          "power_kw": { "type": "number", "description": "+ for discharge, - for charge" }
        }
      },
      "zk_state_commitment": { "type": "string", "pattern": "^0x[a-fA-F0-9]{64}$" }
    },
    "required": ["microgrid_id", "target_clearing_price_usd_kwh", "bess_dispatch_schedule"]
  }
}`}
            </pre>
          </div>
        )}
      </div>

      {/* Evaluator Interactive Sandbox Triggers */}
      <div className="px-3 sm:px-4 py-3 bg-[#0a0c10] border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 text-xs">
        <div className="flex items-center gap-2 text-zinc-400 font-mono text-[10px] sm:text-[11px]">
          <Sliders className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
          <span>Interactive Grid Stress Tests (Evaluator Controls):</span>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
          <button
            onClick={triggerCloudEvent}
            id="btn-trigger-cloud"
            className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-800/80 hover:bg-zinc-700/80 text-amber-300 border border-amber-500/30 text-[11px] sm:text-xs font-mono transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            <Sun className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
            <span>Simulate Cloud Drop (-45% PV)</span>
          </button>

          <button
            onClick={triggerEvSpike}
            id="btn-trigger-ev"
            className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-800/80 hover:bg-zinc-700/80 text-cyan-300 border border-cyan-500/30 text-[11px] sm:text-xs font-mono transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            <Zap className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
            <span>Simulate EV Load Surge (+85 kW)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
