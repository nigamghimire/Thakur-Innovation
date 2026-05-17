import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Deep Intel",
    description: "We audit your brand ecosystem using cross-platform analysis to identify authority gaps and growth vectors.",
    align: "left"
  },
  {
    number: "02",
    title: "Strategic Blueprint",
    description: "Our architects map the trajectory from your current state to definitive industry leadership.",
    align: "right"
  },
  {
    number: "03",
    title: "Precision Execution",
    description: "We deploy lean, aesthetic, and algorithmically optimized content that commands immediate attention.",
    align: "left"
  },
  {
    number: "04",
    title: "Domination Lifecycle",
    description: "Continuous iteration and network expansion to ensure your brand remains the apex predator in its niche.",
    align: "right"
  }
];

export default function Strategy() {
  return (
    <section id="strategy" className="py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-display mb-6">Execution <span className="text-brand-blue">Strategy</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto font-medium">A systematic approach to brand elevation that prioritizes speed, precision, and longevity.</p>
        </div>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden lg:block" />
          
          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, i) => (
              <div key={step.number} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-0 ${step.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`lg:w-1/2 flex ${step.align === 'left' ? 'lg:justify-end lg:pr-16' : 'lg:justify-start lg:pl-16'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: step.align === 'left' ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`p-10 rounded-[3.5rem] bg-gradient-to-br from-purple-400/10 via-violet-400/10 to-blue-400/10 backdrop-blur-3xl border border-white/10 shadow-lg shadow-purple-500/10 hover:shadow-xl hover:-translate-y-3 transition-all duration-500 group relative max-w-md ${step.align === 'left' ? 'text-right' : 'text-left'}`}
                  >
                    {/* Top Pill Decoration */}
                    <div className={`absolute top-8 ${step.align === 'left' ? 'left-8' : 'right-8'} w-12 h-6 border-2 border-white/10 rounded-full bg-white/5`} />

                    <div className={`absolute -top-14 ${step.align === 'left' ? 'right-6' : 'left-6'} z-20 select-none drop-shadow-[0_20px_20px_rgba(37,99,235,0.25)]`}>
                      <svg width="120" height="80" viewBox="0 0 120 80" className="overflow-visible">
                        <defs>
                          <linearGradient id={`grad-${step.number}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#EC4899" />
                            <stop offset="100%" stopColor="#A78BFA" />
                          </linearGradient>
                        </defs>
                        <text
                          x="50%"
                          y="50%"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="font-display font-bold text-7xl fill-white/10"
                          style={{ 
                            stroke: `url(#grad-${step.number})`,
                            strokeWidth: '1.5px'
                          }}
                        >
                          {step.number}
                        </text>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-1 text-white tracking-tight">{step.title}</h3>
                    <p className="text-white/40 font-medium text-sm mb-6">Strategic Phase {step.number}</p>
                    <p className="text-white/60 text-sm leading-relaxed font-medium">{step.description}</p>
                  </motion.div>
                </div>
                
                <div className="lg:w-0 relative flex items-center justify-center z-20">
                  <div className="w-12 h-12 rounded-full bg-brand-blue dark:bg-brand-pink border-4 border-white dark:border-[#050505] shadow-lg flex items-center justify-center text-white text-xs font-semibold ring-4 ring-blue-500/10 dark:ring-brand-pink/20">
                    {step.number}
                  </div>
                </div>
                
                <div className="lg:w-1/2 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
