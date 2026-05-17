import { motion } from "motion/react";
import { Zap, Palette, Share2, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Strategic Intelligence",
    description: "Data-driven frameworks that anticipate market shifts and position your brand as the definitive industry voice.",
    icon: Zap,
    className: "lg:col-span-2",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  },
  {
    title: "Aesthetic Mastery",
    description: "Visually arresting designs that command attention and communicate luxury at first glance.",
    icon: Palette,
    className: "",
  },
  {
    title: "Network Authority",
    description: "Leveraging high-tier connections to amplify your reach across established ecosystems.",
    icon: Share2,
    className: "",
  },
  {
    title: "Global Leadership",
    description: "Trusted by 500+ Global Leaders",
    className: "lg:col-span-2",
    isTrusted: true
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display mb-4">Our Social Edge</h2>
          <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={`feature-card-${feature.title.replace(/\s+/g, '-').toLowerCase()}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`p-10 rounded-[3.5rem] ${feature.className} bg-gradient-to-br from-blue-400/10 via-indigo-400/10 to-purple-400/10 backdrop-blur-3xl border border-white/10 shadow-lg shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-3 transition-all duration-500 group relative cursor-default overflow-hidden`}
            >
              <div className="absolute top-8 right-8 w-12 h-6 border-2 border-white/40 rounded-full bg-white/10" />

              {feature.img && (
                <div className="absolute inset-0 opacity-20 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                  <img src={feature.img} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
                </div>
              )}
              
              <div className="relative z-10 h-full flex flex-col">
                {!feature.isTrusted ? (
                  <>
                    <div className="w-14 h-14 rounded-2xl bg-white/30 border border-white/50 flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform">
                      <feature.icon className="text-brand-dark" size={28} />
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-2 text-white tracking-tight">{feature.title}</h3>
                    <p className="text-white/40 font-medium text-sm mb-4">Strategic Framework</p>
                    <p className="text-white/60 text-sm leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  </>
                ) : (
                  <div className="flex flex-col sm:flex-row items-center justify-between w-full h-full gap-8">
                    <div className="flex flex-col gap-6">
                      <div className="flex -space-x-3">
                        {[1, 2, 3].map(n => (
                          <div key={n} className="w-14 h-14 rounded-full border-4 border-white/60 bg-slate-200 overflow-hidden shadow-sm">
                            <img src={`https://i.pravatar.cc/100?img=${n + 10}`} alt="" className="w-full h-full object-cover" />
                          </div>
                        ))}
                        <div className="w-14 h-14 rounded-full border-4 border-white/60 bg-brand-purple flex items-center justify-center text-white text-xs font-semibold shadow-sm">
                          +500
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-display font-bold mb-1 text-white tracking-tight whitespace-nowrap">{feature.title}</h3>
                        <span className="text-white/60 font-medium text-sm">{feature.description}</span>
                      </div>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-white/30 border border-white/50 flex items-center justify-center group-hover:translate-x-3 transition-transform">
                      <ArrowRight className="text-brand-dark" size={32} />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
