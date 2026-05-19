import { motion } from "motion/react";
import { Mail, MapPin, ArrowLeft, MessageCircle, Facebook, Linkedin } from "lucide-react";
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
            <div className="flex flex-col gap-2 mb-6">
              <div className="inline-flex w-fit px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-brand-blue text-xs font-bold tracking-wider uppercase">
                Contact
              </div>
              <div className="inline-flex w-fit px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-brand-purple text-xs font-bold tracking-wider uppercase">
                Direct Connection
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
              Get in touch with our <span className="text-brand-blue">expert team</span>
            </h1>
            <p className="text-white/60 text-lg font-medium mb-12 leading-relaxed max-w-lg">
              We bring designs to life, capture your audience’s attention and leave an impression, telling your story through creative concepts.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-5 p-4 rounded-3xl hover:bg-white/5 transition-colors group">
                <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-brand-blue flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Email us</p>
                  <a href="mailto:hello@thakur.com" className="text-xl md:text-2xl font-display font-bold text-white hover:text-brand-blue transition-colors">
                    hello@thakur.com
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-5 p-4 rounded-3xl hover:bg-white/5 transition-colors group">
                <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-brand-blue flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">WhatsApp</p>
                  <a href="https://wa.me/9779800000000" target="_blank" rel="noreferrer" className="text-xl md:text-2xl font-display font-bold text-white hover:text-brand-blue transition-colors">
                    +977 980 000 0000
                  </a>
                </div>
              </div>

              {/* Socials */}
              <div className="flex items-start gap-5 p-4">
                <div className="flex gap-4">
                  <a 
                    href="https://facebook.com/thakur" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all transform hover:scale-110"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com/company/thakur" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all transform hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Connect with us</p>
                  <p className="text-white font-bold opacity-80">Social Platforms</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-5 p-4 border-t border-white/10 pt-8 mt-4">
                <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-brand-blue flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Global Hub</p>
                  <p className="text-xl font-display font-bold text-white leading-relaxed">
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
