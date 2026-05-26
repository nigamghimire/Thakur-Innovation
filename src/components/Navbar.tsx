import { motion, AnimatePresence, useScroll, useSpring, useMotionValue } from "motion/react";
import { Menu, X } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import InteractiveButton from "./InteractiveButton";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", id: "hero", href: "/#hero" },
    { name: "Our Services", id: "solutions", href: "/#solutions" },
    { name: "Portfolio", id: "portfolio", href: "/#portfolio" },
    { name: "Strategy", id: "strategy", href: "/#strategy" },
    { name: "Contact", id: "contact", href: "/#contact" }
  ];

  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const lineX = useSpring(0, { stiffness: 300, damping: 30 });
  const lineWidth = useSpring(0, { stiffness: 300, damping: 30 });
  const lineOpacity = useSpring(0);

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection("");
      lineOpacity.set(0);
      return;
    }

    const updateIndicator = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollBottom = scrollY + windowHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Get section offsets
      const sections = navItems.map(item => {
        const el = document.getElementById(item.id);
        const rect = el?.getBoundingClientRect();
        const offset = (el?.offsetTop || 0);
        return { 
          id: item.id, 
          offsetTop: offset,
          height: el?.offsetHeight || 0,
          center: offset + (el?.offsetHeight || 0) / 2
        };
      });

      // Find current progress index
      let progressIndex = 0;
      
      // If at bottom of page, highlight last item
      if (Math.abs(scrollBottom - docHeight) < 50) {
        progressIndex = sections.length - 1;
      } else {
        // Find which sections we are between
        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          const nextSection = sections[i + 1];
          
          if (scrollY >= section.offsetTop && (!nextSection || scrollY < nextSection.offsetTop)) {
            if (!nextSection) {
              progressIndex = i;
            } else {
              const range = nextSection.offsetTop - section.offsetTop;
              const current = scrollY - section.offsetTop;
              progressIndex = i + (current / range);
            }
            break;
          }
        }
      }

      // Safeguard index
      progressIndex = Math.max(0, Math.min(progressIndex, sections.length - 1));

      // Calculate indicator position
      const lowIndex = Math.floor(progressIndex);
      const highIndex = Math.ceil(progressIndex);
      const diff = progressIndex - lowIndex;

      const lowRef = itemRefs.current[lowIndex];
      const highRef = itemRefs.current[highIndex];

      if (lowRef && highRef) {
        const lowRect = lowRef.getBoundingClientRect();
        const highRect = highRef.getBoundingClientRect();
        
        const parent = lowRef.parentElement;
        if (parent) {
          const parentRect = parent.getBoundingClientRect();
          
          const lowXPos = lowRect.left - parentRect.left;
          const highXPos = highRect.left - parentRect.left;
          
          const targetX = lowXPos + (highXPos - lowXPos) * diff;
          const targetWidth = lowRect.width + (highRect.width - lowRect.width) * diff;

          lineX.set(targetX);
          lineWidth.set(targetWidth);
          lineOpacity.set(1);
          
          // Update active section state for text colors (using threshold)
          setActiveSection(navItems[Math.round(progressIndex)].id);
        }
      }
    };

    window.addEventListener('scroll', updateIndicator);
    window.addEventListener('resize', updateIndicator);
    // Initial call after a brief delay to ensure layout
    const timer = setTimeout(updateIndicator, 100);

    return () => {
      window.removeEventListener('scroll', updateIndicator);
      window.removeEventListener('resize', updateIndicator);
      clearTimeout(timer);
    };
  }, [location.pathname]);

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
          
          <div className="hidden md:flex items-center space-x-10 relative">
            {navItems.map((item, i) => {
              const isActive = activeSection === item.id;
              
              return (
                <motion.a
                  key={`nav-item-${item.name.toLowerCase()}`}
                  ref={el => itemRefs.current[i] = el}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`text-sm font-semibold transition-all relative h-24 flex items-center ${
                    isActive ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </motion.a>
              );
            })}
            
            {/* Smooth Indicator Line */}
            <motion.div
              style={{
                x: lineX,
                width: lineWidth,
                opacity: lineOpacity,
              }}
              className="absolute bottom-0 h-0.5 bg-brand-blue"
            />
            
            <div className="flex items-center gap-4 pl-10">
              <InteractiveButton
                onClick={() => {
                  if (location.pathname === '/') {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    navigate('/#contact');
                  }
                }}
                className="btn-primary px-6 py-2.5 rounded-full text-sm font-bold"
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
                  if (location.pathname === '/') {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    navigate('/#contact');
                  }
                }}
                className="btn-primary px-8 py-3 rounded-full text-base font-bold w-full"
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
