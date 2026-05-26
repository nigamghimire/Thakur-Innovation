import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Solutions from "../components/Solutions";
import Portfolio from "../components/Portfolio";
import Strategy from "../components/Strategy";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Landing() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Short delay to ensure elements have finished rendering and loading in DOM
      const timer = setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [hash]);

  return (
    <>
      <Navbar />
      <main>
        <Hero key="hero-section" />
        <Solutions key="solutions-section" />
        <Portfolio key="portfolio-section" />
        <Strategy key="strategy-section" />
        <CTA key="cta-section" />
        <Contact key="contact-section" />
      </main>
      <Footer />
    </>
  );
}
