import React from "react";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import LogosStrip from "@/components/site/LogosStrip";
import ProblemSolution from "@/components/site/ProblemSolution";
import Features from "@/components/site/Features";
import ProductTour from "@/components/site/ProductTour";
import HowItWorks from "@/components/site/HowItWorks";
import Automation from "@/components/site/Automation";
import Metrics from "@/components/site/Metrics";
import Testimonials from "@/components/site/Testimonials";
import Pricing from "@/components/site/Pricing";
import FAQ from "@/components/site/FAQ";
import FinalCTA from "@/components/site/FinalCTA";
import Footer from "@/components/site/Footer";

export default function Landing() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <LogosStrip />
      <ProblemSolution />
      <Features />
      <ProductTour />
      <HowItWorks />
      <Automation />
      <Metrics />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
