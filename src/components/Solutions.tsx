import { motion } from "motion/react";
import { 
  Megaphone, 
  Palette, 
  Headset, 
  PhoneCall, 
  Code2, 
  Cpu, 
  Server, 
  Briefcase 
} from "lucide-react";

const solutions = [
  {
    title: "Digital Marketing",
    description: "Data-driven strategies to amplify your brand presence and drive measurable growth across all digital channels.",
    icon: Megaphone,
    color: "bg-blue-500"
  },
  {
    title: "Graphic Design",
    description: "Compelling visual identities and creative assets that capture your brand's essence and engage your audience.",
    icon: Palette,
    color: "bg-purple-500"
  },
  {
    title: "Virtual Assistant",
    description: "Professional administrative support to streamline your operations and help you focus on core business growth.",
    icon: Headset,
    color: "bg-indigo-500"
  },
  {
    title: "Call Centre",
    description: "Scalable customer support and outreach solutions that maintain high-quality communication with your clients.",
    icon: PhoneCall,
    color: "bg-blue-600"
  },
  {
    title: "Website and App Development",
    description: "Custom, responsive web and mobile applications built with the latest technologies for optimal performance.",
    icon: Code2,
    color: "bg-purple-600"
  },
  {
    title: "Software Development",
    description: "Tailored software solutions designed to solve complex business challenges and automate your workflows.",
    icon: Cpu,
    color: "bg-indigo-600"
  },
  {
    title: "IT Services",
    description: "Comprehensive infrastructure management and technical support to keep your business running smoothly.",
    icon: Server,
    color: "bg-blue-700"
  },
  {
    title: "Technology Consulting & Contract Work",
    description: "Expert guidance and specialized contract talent for your most ambitious technical projects.",
    icon: Briefcase,
    color: "bg-purple-700"
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
            Our <span className="text-brand-blue">Service</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium"
          >
            From strategy to execution, we create digital experiences that help brands stand out, connect, and grow in a competitive world.
          </motion.p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            className="h-1 bg-brand-blue mx-auto rounded-full"
          />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="p-8 rounded-[2.5rem] bg-gradient-to-br from-purple-400/10 via-violet-400/10 to-blue-400/10 backdrop-blur-3xl border border-white/10 shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-3 transition-all duration-500 group relative flex flex-col items-start min-h-[300px]"
            >
              {/* Top Right Mini Pill */}
              <div className="absolute top-6 right-6 w-10 h-5 border-2 border-white/40 rounded-full bg-white/10" />

              <div className="mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/20 border border-white/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <solution.icon size={24} className="text-brand-dark" />
                </div>
                <h3 className="text-xl font-display font-bold mb-1 text-white tracking-tight leading-tight">{solution.title}</h3>
                <p className="text-white/40 font-medium text-xs">Strategic Excellence</p>
              </div>

              <p className="text-white/60 text-xs leading-relaxed font-medium">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
