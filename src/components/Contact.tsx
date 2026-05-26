import { motion } from "motion/react";
import React from "react";
import { Mail, MapPin, MessageCircle, Facebook, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#030014]/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-wider mb-4"
          >
            Direct Channel
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight"
          >
            Connect with our <span className="text-brand-blue">experts</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg"
          >
            We align design, digital technology, and execution to grow your venture. Step into direct communication with us.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-white/10 transition-all flex items-start gap-5 text-left"
          >
            <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue flex-shrink-0">
              <Mail size={22} />
            </div>
            <div className="min-w-0">
              <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">Email us</p>
              <a href="mailto:thakurinnovation2058@gmail.com" className="text-lg md:text-xl font-display font-semibold text-white hover:text-brand-blue transition-colors block break-all">
                thakurinnovation2058@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-white/10 transition-all flex items-start gap-5 text-left"
          >
            <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue flex-shrink-0">
              <MessageCircle size={22} />
            </div>
            <div className="min-w-0">
              <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">WhatsApp Channel</p>
              <a href="https://wa.me/9779712065768" target="_blank" rel="noreferrer" className="text-lg md:text-xl font-display font-semibold text-white hover:text-brand-blue transition-colors block">
                +977 971-2065768
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-white/10 transition-all flex items-start gap-5 text-left"
          >
            <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue flex-shrink-0">
              <MapPin size={22} />
            </div>
            <div>
              <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">Global Hub</p>
              <p className="text-lg font-display font-semibold text-white">Kathmandu Maharajgunj</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-white/10 transition-all flex flex-col gap-4 text-left"
          >
            <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Connect on social channels</p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61589716889332"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all transform hover:scale-105"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://linkedin.com/company/thakur"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all transform hover:scale-105"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
