import { motion } from "motion/react";
import InteractiveButton from "./InteractiveButton";

export default function CTA() {
  return (
    <section id="consultation" className="py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto relative rounded-[3rem] overflow-hidden bg-brand-dark min-h-[500px] flex items-center justify-center p-8 text-center border"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1974&auto=format&fit=crop" 
            alt="City Skyline"
            className="w-full h-full object-cover opacity-30 saturate-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/95 via-brand-dark/40 to-brand-dark/95"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-display text-white mb-6 leading-tight">
            Ready to lead your industry?
          </h2>
          <p className="text-slate-200 text-lg mb-10 leading-relaxed">
            Step into the circle of digital authority. Your journey to unprecedented social growth begins with a single conversation. Our experts are ready to catalyze your success.
          </p>
          <InteractiveButton
            onClick={() => window.location.href = 'mailto:contact@thakurinnovation.com'}
            className="glass-purple text-white px-10 py-5 rounded-full font-bold text-lg"
          >
            Book Your Consultation
          </InteractiveButton>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-brand-blue/10 blur-3xl rounded-full"></div>
        <div className="absolute top-1/4 right-0 w-48 h-48 bg-brand-purple/5 blur-3xl rounded-full"></div>
      </motion.div>
    </section>
  );
}
