import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

import { Link } from "react-router-dom";

const projects = [
  {
    title: "Lumina Global",
    category: "Rebranding • Strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    metric: "+400% Engagement"
  },
  {
    title: "Thorne Ventures",
    category: "Digital Authority",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    metric: "3.2M Reach"
  },
  {
    title: "EcoSphere",
    category: "Market Expansion",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    metric: "$2.4M Growth"
  },
  {
    title: "Vanguard Tech",
    category: "SEO Ecosystem",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    metric: "#1 Domain Authority"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background Decorative Elements - Blending from Solutions */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-300/40 rounded-full blur-[130px] -z-10" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-purple-300/50 rounded-full blur-[110px] -z-10 animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display mb-4">Strategic <span className="text-brand-purple">Portfolio</span></h2>
            <p className="text-white/60 max-w-md">Selecting our most impactful partnerships where we transformed vision into market dominance.</p>
          </div>
          <Link 
            to="/portfolio"
            className="text-brand-blue font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
          >
            View All Work <ExternalLink size={16} />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-6 shadow-xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div className="px-8 py-4 bg-gradient-to-r from-blue-600/60 to-purple-600/60 backdrop-blur-xl rounded-full border border-white/10 shadow-lg shadow-purple-500/20 text-white font-bold text-sm overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    <span className="relative z-10 tracking-tight">{project.metric}</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center px-2">
                <div>
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-brand-blue transition-colors">{project.title}</h3>
                  <p className="text-sm text-white/40 font-medium uppercase tracking-widest">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
