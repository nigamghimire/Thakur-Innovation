import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import InteractiveButton from "./InteractiveButton";
import growthImg from "../assets/growth.png";
import socialMediaImg from "../assets/social media.png";
import strategyImg from "../assets/strategy.png";
import websiteImg from "../assets/website.png";

const images = [growthImg, socialMediaImg, strategyImg, websiteImg];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-20 overflow-hidden" aria-labelledby="hero-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 shadow-sm mb-8 transition-all hover:shadow-md">
              <CheckCircle2 size={16} className="text-brand-blue" />
              <span className="text-[11px] uppercase tracking-widest font-semibold text-brand-blue">Premium Digital Strategy</span>
            </div>
            
            <h1 id="hero-heading" className="text-5xl lg:text-6xl font-display font-semibold leading-[1.1] mb-8 text-white">
              Creative Marketing <br />
              <span className="text-brand-blue">Solutions That Grow Brands</span>
            </h1>
            
            <p className="text-lg text-white/70 mb-4 leading-relaxed max-w-xl font-medium">
              From branding and social media to websites and digital campaigns — we help businesses stand out and scale online.
            </p>

            <p className="text-base text-brand-blue font-semibold mb-12 italic opacity-90">
              Helping modern businesses grow through creativity and strategy.
            </p>
            
            <div className="flex flex-wrap gap-5">
              <InteractiveButton
                onClick={() => navigate('/get-started')}
                className="glass-brand px-10 py-5 rounded-full font-semibold shadow-indigo-500/10 text-lg"
              >
                Get Started
              </InteractiveButton>
              <InteractiveButton
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 text-white border border-white/10 px-10 py-5 rounded-full font-semibold shadow-xl shadow-slate-900/50 hover:shadow-2xl transition-all text-lg"
              >
                View Our Work
              </InteractiveButton>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl z-10 group">
              {/* Soft Border Glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-brand-blue/20 via-brand-purple/30 to-brand-blue/20 rounded-[2rem] blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              <div className="relative overflow-hidden rounded-3xl z-20 aspect-[4/3] border border-white/10 shadow-2xl">
                <AnimatePresence initial={false}>
                  <motion.img 
                    key={currentImageIndex}
                    src={images[currentImageIndex]} 
                    alt={`Thakur Innovation - ${['Growth', 'Social Media', 'Strategy', 'Web Design'][currentImageIndex]}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
                
                {/* Pagination Indicators */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                  {images.map((_, i) => (
                    <div 
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-500 ${i === currentImageIndex ? 'w-10 bg-white' : 'w-2 bg-white/40'}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Image Glow Effects - Bottom, Left, Right */}
              <div className="absolute -bottom-8 left-4 right-4 h-24 bg-purple-500/50 blur-[60px] -z-10 rounded-full" />
              <div className="absolute top-10 bottom-10 -left-10 w-24 bg-blue-500/40 blur-[60px] -z-10 rounded-full" />
              <div className="absolute top-10 bottom-10 -right-10 w-24 bg-pink-500/40 blur-[60px] -z-10 rounded-full" />
              
              {/* Floating Stat Card - Repositioned to be half-outside */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl cursor-default z-20 backdrop-blur-2xl border-white/20 bg-white/5 shadow-2xl shadow-indigo-500/10 min-w-[220px]"
              >
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-white/40 mb-2">Growth Index</p>
                <h3 className="text-5xl font-display font-semibold text-white mb-1">+240%</h3>
                <p className="text-sm text-white/60 font-medium tracking-tight">Avg. Network Authority</p>
              </motion.div>
            </div>
            
            {/* Enhanced background glow shadow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-purple-300/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-indigo-300/15 rounded-full blur-[150px] -z-10" />
            <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-pink-300/15 rounded-full blur-[150px] -z-10" />
            <div className="absolute top-10 right-1/4 w-[300px] h-[300px] bg-blue-200/10 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
