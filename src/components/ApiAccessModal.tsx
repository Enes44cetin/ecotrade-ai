"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Shield,
  Key,
  Copy,
  Check,
  CheckCircle2,
  Terminal,
  Zap,
  Cpu,
  ArrowRight,
} from "lucide-react";

interface ApiAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApiAccessModal({ isOpen, onClose }: ApiAccessModalProps) {
  const [role, setRole] = useState<"anthropic" | "operator" | "researcher">("anthropic");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [generatedKey, setGeneratedKey] = useState("");
  const [copiedKey, setCopiedKey] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mockKey = `eco_test_${Math.random().toString(36).substring(2, 10)}_${Date.now().toString(36)}`;
    setGeneratedKey(mockKey);
    setSubmitted(true);
  };

  const handleCopyKey = () => {
    navigator.clipboard.writeText(generatedKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail("");
    setOrg("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl rounded-2xl bg-[#0b0e14] border border-zinc-800 p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] z-10 overflow-hidden"
        >
          {/* Subtle top edge glow */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Shield className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  Developer Sandbox & Grant Access
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white font-sans">
                Request EcoTrade API Access
              </h3>
              <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                Connect your microgrid simulators or testbeds directly to our Claude 3.5 Sonnet autonomous auction clearing engine.
              </p>

              {/* Persona / Role Selector */}
              <div className="mt-5 grid grid-cols-3 gap-2 p-1 bg-zinc-950 rounded-xl border border-zinc-800 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setRole("anthropic")}
                  className={`py-2 px-2 rounded-lg text-center transition-all ${
                    role === "anthropic"
                      ? "bg-amber-500/15 border border-amber-500/30 text-amber-300 font-semibold shadow-sm"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  Grant Evaluator
                </button>
                <button
                  type="button"
                  onClick={() => setRole("operator")}
                  className={`py-2 px-2 rounded-lg text-center transition-all ${
                    role === "operator"
                      ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-semibold shadow-sm"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  Grid Operator
                </button>
                <button
                  type="button"
                  onClick={() => setRole("researcher")}
                  className={`py-2 px-2 rounded-lg text-center transition-all ${
                    role === "researcher"
                      ? "bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-semibold shadow-sm"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  AI Researcher
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-5 space-y-4 font-sans">
                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                    Organization / Entity
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={
                      role === "anthropic"
                        ? "Anthropic / Claude for Startups Team"
                        : "e.g. Clean Energy Microgrids Lab"
                    }
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/60 transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                    Reviewer / Engineer Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="evaluator@anthropic.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/60 transition-colors font-mono"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold font-mono text-black bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 rounded-lg shadow-[0_0_20px_-3px_rgba(0,245,155,0.4)] transition-all hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Key className="w-4 h-4 text-zinc-950" />
                    <span>Generate Instant Sandbox Test Key</span>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white font-sans">
                Sandbox Credentials Provisioned
              </h3>
              <p className="mt-1 text-xs text-zinc-400 leading-relaxed max-w-md mx-auto">
                Welcome <span className="text-zinc-200 font-semibold">{org || "Reviewer"}</span>. Your test access token for the Claude 3.5 Sonnet microgrid clearing pipeline is active.
              </p>

              {/* API Key Box */}
              <div className="mt-5 p-3 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between font-mono text-xs text-zinc-300">
                <span className="truncate mr-2 text-emerald-400">{generatedKey}</span>
                <button
                  onClick={handleCopyKey}
                  className="flex items-center gap-1 px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 hover:text-white transition-colors text-[11px]"
                >
                  {copiedKey ? (
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

              {/* Quick Start snippet */}
              <div className="mt-4 p-3 rounded-xl bg-zinc-950/80 border border-zinc-850 text-left font-mono text-[11px] text-zinc-400 overflow-x-auto">
                <div className="text-[10px] text-zinc-500 mb-1">// Quick-dispatch endpoint:</div>
                <code className="text-zinc-300 break-all">
                  curl -H &quot;Authorization: Bearer {generatedKey}&quot; https://api.tryecotrade.xyz/v1/grid/ieee33/status
                </code>
              </div>

              <div className="mt-6 flex justify-center">
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-200 transition-colors"
                >
                  Close & Return to Landing Page
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
