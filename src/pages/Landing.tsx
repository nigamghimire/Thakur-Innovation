import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Solutions from "../components/Solutions";
import Clients from "../components/Clients";
import Portfolio from "../components/Portfolio";
import Strategy from "../components/Strategy";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
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
        <Clients key="clients-section" />
        <Portfolio key="portfolio-section" />
        <Strategy key="strategy-section" />
        <About key="about-section" />
        <Testimonials key="testimonials-section" />
        <CTA key="cta-section" />
      </main>
      <Footer />
    </>
  );
}
