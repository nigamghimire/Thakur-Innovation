import { motion } from "motion/react";

const clientList = [
  "Luxe Global", "Aura Tech", "Nova Brands", "Vanguard", "Elite Partners", 
  "Prime Solutions", "Infinity Group", "Stellar Co", "Zenith Agency", "Apex Corp"
];

// Duplicate for seamless loop
const clients = [...clientList, ...clientList];

export default function Clients() {
  return (
    <section id="clients" className="py-10 bg-white/2 border-y border-white/5 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tighter">
          Our <span className="text-brand-blue">Clients</span>
        </h2>
      </div>
      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap gap-16 md:gap-32 items-center"
        >
          {/* First set of clients */}
          {clients.map((client, i) => (
            <div
              key={`client-${i}`}
              className="text-2xl md:text-4xl font-display font-black text-white/10 hover:text-white/30 transition-colors cursor-default tracking-tighter"
            >
              {client}
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative gradients for edge fading */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030014] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030014] to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
