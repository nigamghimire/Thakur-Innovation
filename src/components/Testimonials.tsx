import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Thakur Innovation didn't just manage our social; they redefined our entire visual vocabulary. Our engagement rose by 400% in a single quarter.",
    author: "Elena Vance",
    role: "CEO, Lumina Global",
    img: "https://i.pravatar.cc/100?img=32"
  },
  {
    quote: "The level of strategic foresight they provide is unparalleled. They are truly the architects of the modern social era. Our brand authority skyrocketed.",
    author: "Marcus Thorne",
    role: "Founder, Thorne Ventures",
    img: "https://i.pravatar.cc/100?img=44"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-display mb-4">Echoes of <span className="text-brand-blue">Innovation</span></h2>
            <p className="text-white/60 leading-relaxed">
              How we've transformed emerging brands into digital titans. Our commitment to excellence drives every partnership.
            </p>
          </div>
          
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={`testimonial-${t.author.replace(/\s+/g, '-').toLowerCase()}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass-gradient-border p-8 rounded-3xl relative"
              >
                <Quote className="text-brand-blue/20 mb-6" size={40} />
                <p className="text-white/80 italic mb-8 leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.author} className="w-12 h-12 rounded-full border-2 border-white/20 shadow-sm" />
                  <div>
                    <h4 className="font-bold text-white text-sm">{t.author}</h4>
                    <p className="text-xs text-white/40">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
