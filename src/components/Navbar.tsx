import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import InteractiveButton from "./InteractiveButton";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/#hero" },
    { name: "Our Services", href: "/#solutions" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Strategy", href: "/#strategy" },
    { name: "About", href: "/#about" }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname === '/' && href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-2xl border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <a href="/" aria-label="Thakur Innovation Home">
              <Logo className="h-32 w-auto md:h-44" />
            </a>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item, i) => (
              <motion.a
                key={`nav-item-${item.name.toLowerCase()}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-semibold text-white/70 hover:text-brand-blue transition-all relative group"
                aria-label={`Navigate to ${item.name}`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all group-hover:w-full"></span>
              </motion.a>
            ))}
            
            <div className="flex items-center gap-4">
              <InteractiveButton
                onClick={() => navigate('/get-started')}
                className="glass-brand px-6 py-2.5 rounded-full text-sm font-semibold"
              >
                Contact Us
              </InteractiveButton>
            </div>
          </div>
          
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white/70"
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
            className="md:hidden bg-slate-900/90 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-8 space-y-6 flex flex-col items-center">
              {navItems.map((item) => (
                <a
                  key={`mobile-nav-${item.name}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-lg font-semibold text-white/70 hover:text-brand-blue"
                >
                  {item.name}
                </a>
              ))}
              <InteractiveButton
                onClick={() => {
                  setIsOpen(false);
                  navigate('/get-started');
                }}
                className="glass-brand px-8 py-3 rounded-full text-base font-semibold w-full"
              >
                Contact Us
              </InteractiveButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
