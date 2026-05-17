import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";

import InteractiveButton from "./InteractiveButton";
import heroImage from "../assets/AI hero image.png.png";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" aria-labelledby="hero-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-card mb-6 border-white/80">
              <CheckCircle2 size={14} className="text-brand-blue" />
              <span className="text-[10px] uppercase tracking-wider font-bold text-brand-blue">Premium Digital Strategy</span>
            </div>
            
            <h1 id="hero-heading" className="text-4xl lg:text-6xl font-display font-medium leading-[1.1] mb-6">
              Elevate Your Brand's <span className="text-brand-blue font-bold">Digital Footprint</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
              We sculpt high-authority digital identities through strategic intelligence and aesthetic precision. Join the elite network of brands dominating the social landscape.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <InteractiveButton
                onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
                className="glass-purple text-brand-dark px-8 py-4 rounded-full font-bold"
              >
                Scale Your Brand
              </InteractiveButton>
              <InteractiveButton
                onClick={() => document.getElementById('strategy')?.scrollIntoView({ behavior: 'smooth' })}
                className="glass text-slate-700 px-8 py-4 rounded-full font-bold"
              >
                Our Strategy
              </InteractiveButton>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl z-10">
              <div className="relative overflow-hidden rounded-3xl z-20">
                <img 
                  src={heroImage} 
                  alt="AI Hub Technology"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/40 to-transparent"></div>
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
                className="absolute -bottom-8 -left-8 glass p-6 rounded-2xl cursor-default z-20 backdrop-blur-xl border-white/30 bg-white/10"
              >
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-200 mb-1">Growth Index</p>
                <h3 className="text-3xl font-display font-bold text-slate-50">+240%</h3>
                <p className="text-xs text-slate-300">Avg. Network Authority</p>
              </motion.div>
            </div>
            
            {/* Enhanced background glow shadow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-500/20 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-blue-400/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] bg-pink-400/20 rounded-full blur-[120px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
