"use client";

import React, { useState, useEffect } from "react";
import { Zap, Terminal, Shield, ArrowUpRight, Cpu, Layers, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenAccessModal: () => void;
}

export default function Navbar({ onOpenAccessModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const handleOpenModal = () => {
    setMobileMenuOpen(false);
    onOpenAccessModal();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-[#07080a]/95 backdrop-blur-md border-b border-white/[0.08] py-3 shadow-2xl"
          : "bg-transparent border-b border-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-zinc-900 border border-emerald-500/30 group-hover:border-emerald-400 transition-colors shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)] flex-shrink-0">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 fill-emerald-400/20 transition-transform group-hover:scale-110 duration-200" />
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-75" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-white flex items-center gap-1.5 font-sans">
                EcoTrade <span className="text-emerald-400 font-mono text-xs sm:text-sm px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">AI</span>
              </span>
              <span className="text-[9px] sm:text-[10px] text-zinc-400 font-mono tracking-wider uppercase -mt-0.5">
                Microgrid Autonomous Swarm
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-sm font-medium text-zinc-400">
            <a
              href="#capabilities"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <span>Capabilities</span>
            </a>
            <a
              href="#claude-architecture"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <Cpu className="w-3.5 h-3.5 text-amber-500/90" />
              <span className="text-zinc-300 hover:text-white">Powered by Claude</span>
            </a>
            <a
              href="#protocol-architecture"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Protocol Flow</span>
            </a>
            <a
              href="#sandbox"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Live Terminal</span>
            </a>
            <a
              href="#whitepaper"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <span>Whitepaper</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
          </nav>

          {/* Actions (Desktop & Mobile) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Testbed: IEEE-33 Node</span>
            </div>

            <button
              onClick={onOpenAccessModal}
              id="nav-request-access-btn"
              className="hidden sm:inline-flex relative items-center justify-center gap-2 px-3.5 sm:px-4 py-2 text-xs font-semibold text-black bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 hover:from-emerald-300 hover:to-teal-200 rounded-md shadow-[0_0_20px_-3px_rgba(0,245,155,0.4)] transition-all duration-200 hover:shadow-[0_0_25px_0_rgba(0,245,155,0.6)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <Shield className="w-3.5 h-3.5 text-zinc-950" />
              <span>Request API Access</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white transition-colors"
              aria-label="Toggle mobile navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-emerald-400" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-4 pb-5 border-t border-zinc-800/80 space-y-3">
            <div className="flex flex-col space-y-2 text-sm font-medium text-zinc-300 font-sans">
              <a
                href="#capabilities"
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-lg hover:bg-zinc-900 hover:text-emerald-400 transition-colors"
              >
                Capabilities
              </a>
              <a
                href="#claude-architecture"
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-lg hover:bg-zinc-900 hover:text-amber-400 transition-colors flex items-center justify-between"
              >
                <span>Powered by Claude</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-400 border border-amber-500/20">Sonnet 3.5</span>
              </a>
              <a
                href="#protocol-architecture"
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-lg hover:bg-zinc-900 hover:text-cyan-400 transition-colors"
              >
                Protocol Flow
              </a>
              <a
                href="#sandbox"
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-lg hover:bg-zinc-900 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
              >
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>Live Terminal</span>
              </a>
              <a
                href="#whitepaper"
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-lg hover:bg-zinc-900 hover:text-zinc-100 transition-colors flex items-center justify-between"
              >
                <span>Whitepaper</span>
                <span className="text-[10px] font-mono text-zinc-500">v0.9</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={handleOpenModal}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-black bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 rounded-lg shadow-[0_0_20px_-3px_rgba(0,245,155,0.4)] transition-all font-mono"
              >
                <Shield className="w-3.5 h-3.5 text-zinc-950" />
                <span>Request API Access</span>
              </button>
            </div>

            <div className="pt-1 flex items-center justify-center gap-2 text-[11px] font-mono text-zinc-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Testbed: IEEE-33 Node Live</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
