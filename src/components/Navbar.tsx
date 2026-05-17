import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

import InteractiveButton from "./InteractiveButton";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Solutions", "Portfolio", "Strategy", "About"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-light/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <a href="/" aria-label="Thakur Innovation Home">
              <Logo className="h-28 w-auto md:h-40" />
            </a>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <motion.a
                key={`nav-item-${item.toLowerCase()}`}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-semibold text-slate-500 hover:text-brand-blue transition-all relative group"
                aria-label={`Navigate to ${item}`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all group-hover:w-full"></span>
              </motion.a>
            ))}
            <InteractiveButton
              onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: "smooth" })}
              className="glass-purple text-brand-dark px-6 py-2.5 rounded-full text-sm font-bold"
            >
              Get Started
            </InteractiveButton>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-8 space-y-6 flex flex-col items-center">
              {navItems.map((item) => (
                <a
                  key={`mobile-nav-${item}`}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-slate-600 hover:text-brand-blue"
                >
                  {item}
                </a>
              ))}
              <InteractiveButton
                onClick={() => {
                  setIsOpen(false);
                  document.getElementById('consultation')?.scrollIntoView({ behavior: "smooth" });
                }}
                className="glass-purple text-brand-dark px-8 py-3 rounded-full text-base font-bold w-full"
              >
                Get Started
              </InteractiveButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
