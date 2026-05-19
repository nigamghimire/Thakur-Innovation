import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import InteractiveButton from "./InteractiveButton";

export default function CTA() {
  const navigate = useNavigate();
  return (
    <section id="consultation" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto relative rounded-[3rem] overflow-hidden bg-[#030014]/50 min-h-[500px] flex items-center justify-center p-8 text-center border border-white/20 luminous-border luminous-glow"
      >
        {/* Highlight Sweep Animation */}
        <motion.div
          animate={{
            left: ["-100%", "200%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 bottom-0 w-[30%] bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 z-10 pointer-events-none"
        />
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Animated Gradient Grids */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.2),transparent_70%)] animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-pink-600/10"></div>
          
          {/* Luminous Light Lines */}
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="light-line top-[30%] opacity-40"
          />
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="light-line bottom-[30%] opacity-30"
          />
          
          {/* Blend to bottom */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030014] to-transparent"></div>
          
          {/* City Image - further softened */}
          <img 
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1974&auto=format&fit=crop" 
            alt=""
            className="w-full h-full object-cover opacity-10 saturate-0 mix-blend-overlay"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-display text-white mb-6 leading-tight font-bold tracking-tight">
            Ready to lead your <span className="text-brand-blue">industry?</span>
          </h2>
          <p className="text-slate-200 text-lg mb-10 leading-relaxed font-medium">
            Step into the circle of digital authority. Your journey to unprecedented social growth begins with a single conversation.
          </p>
          <InteractiveButton
            onClick={() => navigate('/get-started')}
            className="btn-primary text-white px-10 py-5 rounded-full font-bold text-lg"
          >
            Book Your Consultation
          </InteractiveButton>
        </div>
        
        {/* Decorative corner glows */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-500/20 blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-pink-500/20 blur-[100px] rounded-full"></div>
      </motion.div>
    </section>
  );
}
