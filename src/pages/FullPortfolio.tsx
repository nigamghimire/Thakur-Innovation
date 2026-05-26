import { motion } from "motion/react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import InteractiveButton from "../components/InteractiveButton";
import Navbar from "../components/Navbar";

const allProjects = [
  {
    title: "Lumina Global",
    category: "Rebranding • Strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    metric: "+400% Engagement",
    description: "A complete visual and strategic overhaul for a multi-national logistics leader, resulting in a cleaner, more authoritative market presence and record-breaking digital engagement metrics."
  },
  {
    title: "Thorne Ventures",
    category: "Digital Authority",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    metric: "3.2M Reach",
    description: "Built a sophisticated content ecosystem for an elite investment firm, establishing them as the go-to experts in venture capital through high-authority link building and thought leadership."
  },
  {
    title: "EcoSphere",
    category: "Market Expansion",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    metric: "$2.4M Growth",
    description: "Navigated complex international markets to help an environmental tech firm expand their footprint, focusing on localized SEO and strategic partnership development."
  },
  {
    title: "Vanguard Tech",
    category: "SEO Ecosystem",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    metric: "#1 Domain Authority",
    description: "Implemented a custom SEO architecture for a SaaS leader, consistently ranking them at position #1 for high-intent keywords across major search engines."
  },
  {
    title: "Apex Logistics",
    category: "Supply Chain Strategy",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
    metric: "45% Efficiency Gain",
    description: "Revolutionized supply chain communication through a centralized digital hub, streamlining operations and significantly reducing overhead costs."
  },
  {
    title: "Zenith Retail",
    category: "E-commerce Transformation",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
    metric: "210% ROI",
    description: "Transformed a legacy brick-and-mortar retailer into a digital powerhouse, optimizing their online store for maximum conversion and lightning-fast user experience."
  },
  {
    title: "Nova Health",
    category: "Digital Privacy • Branding",
    image: "https://images.unsplash.com/photo-1505751172107-160de97136ec?q=80&w=2070&auto=format&fit=crop",
    metric: "Zero Security Incidents",
    description: "Redefined trust in the healthcare space by combining a compassionate brand identity with military-grade digital privacy safeguards."
  }
];

export default function FullPortfolio() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-brand-dark">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-white/40 hover:text-brand-blue transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold text-sm uppercase tracking-widest">Back to Hub</span>
        </Link>
        
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Complete <span className="text-brand-blue">Work</span>
            </h1>
            <p className="text-white/60 text-xl font-medium max-w-2xl leading-relaxed">
              Explore the full history of our strategic partnerships. Each project represents a unique challenge solved through precision engineering and creative authority.
            </p>
          </motion.div>
        </div>
        
        <div className="space-y-32">
          {allProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute top-6 right-6">
                    <div className="px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-white font-bold text-sm">
                      {project.metric}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-brand-blue font-bold text-sm uppercase tracking-[0.2em] mb-3">
                      {project.category}
                    </p>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                      {project.title}
                    </h2>
                  </div>
                  
                  <p className="text-white/60 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  
                  <button className="flex items-center gap-3 text-white font-bold hover:text-brand-blue transition-colors group/btn">
                    <span>View Case Study</span>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:border-brand-blue group-hover/btn:bg-brand-blue/10 transition-all">
                      <ExternalLink size={16} />
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Footer link for continuity */}
      <div className="py-20 border-t border-white/5 bg-white/2">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-8">Ready to be our next success story?</h2>
          <InteractiveButton
            onClick={() => navigate('/#contact')}
            className="btn-primary flex h-14 items-center px-10 rounded-full font-bold shadow-xl shadow-blue-500/20"
          >
            Start Your Project
          </InteractiveButton>
        </div>
      </div>
    </div>
  );
}
