import { motion } from "motion/react";
import { Lightbulb, Rocket, BarChart3, Target, Search, Share2, Plus } from "lucide-react";

const solutions = [
  {
    title: "Brand Architecture",
    description: "We build the structural foundation of your brand identity, ensuring consistency and authority across all touchpoints.",
    icon: Lightbulb,
    color: "bg-blue-500"
  },
  {
    title: "Performance Marketing",
    description: "Data-driven campaigns that convert attention into measurable growth through precision targeting.",
    icon: BarChart3,
    color: "bg-purple-500"
  },
  {
    title: "SEO Ecosystems",
    description: "Dominating search landscapes with high-authority backlink profiles and semantic content optimization.",
    icon: Search,
    color: "bg-indigo-500"
  },
  {
    title: "Social Resonance",
    description: "Creating biological-tier engagement through psychological-trigger content and community engineering.",
    icon: Share2,
    color: "bg-blue-600"
  },
  {
    title: "Executive Strategy",
    description: "High-level consulting for CEOs and founders looking to become the definitive voice in their industry.",
    icon: Target,
    color: "bg-purple-600"
  },
  {
    title: "Rapid Scaling",
    description: "Aggressive growth frameworks designed to compress years of brand building into months of dominance.",
    icon: Rocket,
    color: "bg-indigo-600"
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-purple-300/60 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-blue-300/50 rounded-full blur-[140px] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-pink-300/45 rounded-full blur-[160px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-brand-blue font-semibold tracking-widest uppercase text-xs mb-4"
          >
            Capabilities
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display mb-6"
          >
            Precision <span className="text-brand-blue">Solutions</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            className="h-1 bg-brand-blue mx-auto rounded-full"
          />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="p-10 rounded-[3.5rem] bg-gradient-to-br from-purple-400/10 via-violet-400/10 to-blue-400/10 backdrop-blur-3xl border border-white/10 shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-3 transition-all duration-500 group relative flex flex-col items-start min-h-[320px]"
            >
              {/* Top Right Mini Pill */}
              <div className="absolute top-8 right-8 w-12 h-6 border-2 border-white/40 rounded-full bg-white/10" />

              <div className="mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/20 border border-white/40 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                  <solution.icon size={24} className="text-brand-dark" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-1 text-white tracking-tight">{solution.title}</h3>
                <p className="text-white/40 font-medium text-sm">Strategic Precision</p>
              </div>

              <p className="text-white/60 text-sm leading-relaxed mb-auto pb-8 font-medium">
                {solution.description}
              </p>

              <div className="w-full">
                <button 
                  onClick={() => document.getElementById('strategy')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600/60 to-purple-600/60 hover:from-blue-600/80 hover:to-purple-600/80 backdrop-blur-xl rounded-full border border-white/30 shadow-lg shadow-purple-500/20 transition-all text-white font-semibold text-sm transform hover:translate-y-[-2px] active:scale-95 group/btn overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                  <Plus size={18} strokeWidth={3} className="relative z-10" />
                  <span className="relative z-10">Explore plan</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
