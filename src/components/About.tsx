import { motion } from "motion/react";
import { Users, Globe, ShieldCheck, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" alt="" className="rounded-3xl h-64 w-full object-cover shadow-lg" />
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="" className="rounded-3xl h-48 w-full object-cover shadow-lg" />
              </div>
              <div className="space-y-4 pt-8">
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" alt="" className="rounded-3xl h-48 w-full object-cover shadow-lg" />
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" alt="" className="rounded-3xl h-64 w-full object-cover shadow-lg" />
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-blue/5 blur-[100px] rounded-full" />
          </motion.div>
          
          <div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-purple font-bold tracking-widest uppercase text-xs mb-4"
            >
              Our Vision
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-display mb-8"
            >
              The Science of <span className="text-brand-blue">Elegance</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-white/60 mb-10 leading-relaxed"
            >
              Thakur Innovation was founded on a simple premise: Digital authority is not accidental; it is engineered. We combine deep sociological intelligence with minimalist aesthetic design to create brands that don't just exist—they dominate.
            </motion.p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: Users, title: "Expert Collective", text: "Senior strategists from top-tier global networks." },
                { icon: Globe, title: "Global Reach", text: "Managing authority for brands across 4 continents." },
                { icon: ShieldCheck, title: "Trusted Partners", text: "Maintaining absolute discretion for elite clients." },
                { icon: Award, title: "#1 Ranked Agency", text: "Leader in strategic digital transformation 2024." }
              ].map((item, i) => (
                <motion.div 
                   key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-white/40 leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
