/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import Portfolio from "./components/Portfolio";
import Strategy from "./components/Strategy";
import About from "./components/About";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-dreamy-gradient selection:bg-brand-purple/30 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero key="hero-section" />
        <Solutions key="solutions-section" />
        <Portfolio key="portfolio-section" />
        <Strategy key="strategy-section" />
        <Features key="features-section" />
        <About key="about-section" />
        <Testimonials key="testimonials-section" />
        <CTA key="cta-section" />
      </main>
      <Footer />
    </div>
  );
}

