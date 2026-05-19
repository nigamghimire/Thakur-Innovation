import { motion } from "motion/react";
import { Mail, MapPin, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import InteractiveButton from "../components/InteractiveButton";

export default function Booking() {
  return (
    <div className="min-h-screen bg-dreamy-gradient selection:bg-brand-purple/30 pt-20 pb-12 px-4 shadow-2xl">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-12 transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-brand-blue text-xs font-bold tracking-wider uppercase mb-6">
              Direct Connection
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
              Let's build your <span className="text-brand-blue">digital authority</span>
            </h1>
            <p className="text-white/60 text-xl font-medium mb-12 leading-relaxed max-w-lg">
              Our team specializes in high-velocity growth and sophisticated digital identity management for elite brands. Reach out to start your transformation.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-brand-blue flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-1">Email us</p>
                  <a href="mailto:hello@thakur.com" className="text-2xl font-display font-bold text-white hover:text-brand-blue transition-colors">
                    hello@thakur.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-brand-blue flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-1">Global Hub</p>
                  <p className="text-2xl font-display font-bold text-white leading-relaxed">
                    New York • Singapore • London
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden"
          >
            <div className="relative z-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#030014]/40 text-xs font-bold uppercase tracking-widest mb-2 px-4">First Name</label>
                  <input 
                    type="text" 
                    placeholder="John"
                    className="w-full bg-[#f8f9fa] border-none rounded-2xl px-6 py-4 text-[#030014] font-medium focus:ring-2 focus:ring-brand-purple/20 transition-all placeholder:text-[#030014]/20"
                  />
                </div>
                <div>
                  <label className="block text-[#030014]/40 text-xs font-bold uppercase tracking-widest mb-2 px-4">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Doe"
                    className="w-full bg-[#f8f9fa] border-none rounded-2xl px-6 py-4 text-[#030014] font-medium focus:ring-2 focus:ring-brand-purple/20 transition-all placeholder:text-[#030014]/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#030014]/40 text-xs font-bold uppercase tracking-widest mb-2 px-4">Work Email</label>
                <input 
                  type="email" 
                  placeholder="john@company.com"
                  className="w-full bg-[#f8f9fa] border-none rounded-2xl px-6 py-4 text-[#030014] font-medium focus:ring-2 focus:ring-brand-purple/20 transition-all placeholder:text-[#030014]/20"
                />
              </div>

              <div>
                <label className="block text-[#030014]/40 text-xs font-bold uppercase tracking-widest mb-2 px-4">Project Details</label>
                <textarea 
                  rows={4}
                  placeholder="Briefly describe your vision..."
                  className="w-full bg-[#f8f9fa] border-none rounded-2xl px-6 py-4 text-[#030014] font-medium focus:ring-2 focus:ring-brand-purple/20 transition-all placeholder:text-[#030014]/20 resize-none"
                ></textarea>
              </div>

              <InteractiveButton className="w-full bg-gradient-to-r from-[#b388ff] to-[#8c9eff] text-white py-6 rounded-2xl font-bold tracking-widest uppercase text-sm shadow-xl shadow-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/30 transition-all">
                Send Brief
              </InteractiveButton>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
