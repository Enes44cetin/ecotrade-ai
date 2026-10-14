"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MetricsBar from "@/components/MetricsBar";
import FeatureGrid from "@/components/FeatureGrid";
import ClaudeIntegration from "@/components/ClaudeIntegration";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import WhitepaperSection from "@/components/WhitepaperSection";
import Footer from "@/components/Footer";
import ApiAccessModal from "@/components/ApiAccessModal";

export default function Home() {
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);

  return (
    <main className="min-h-screen w-full bg-[#07080a] text-zinc-100 flex flex-col selection:bg-emerald-500/20 selection:text-emerald-400 overflow-x-hidden">
      {/* Navigation */}
      <Navbar onOpenAccessModal={() => setIsAccessModalOpen(true)} />

      {/* Hero Section with Live Microgrid Simulation Terminal */}
      <HeroSection onOpenAccessModal={() => setIsAccessModalOpen(true)} />

      {/* Technical Performance & Proof Metrics */}
      <MetricsBar />

      {/* 3 Core Technical Capabilities Grid */}
      <FeatureGrid />

      {/* "Powered by Claude" Deep Architectural Integration */}
      <ClaudeIntegration />

      {/* End-to-End Autonomous Pipeline & Protocol Flow */}
      <ArchitectureFlow />

      {/* Research Whitepaper Preview */}
      <WhitepaperSection />

      {/* Technical Footer */}
      <Footer />

      {/* Interactive Sandbox API Access Modal */}
      <ApiAccessModal
        isOpen={isAccessModalOpen}
        onClose={() => setIsAccessModalOpen(false)}
      />
    </main>
  );
}
