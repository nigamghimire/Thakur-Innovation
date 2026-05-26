import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const footerLinks = [
  {
    title: "SERVICES",
    links: [
      { name: "Brand Architecture", href: "/#solutions" },
      { name: "SEO Strategy", href: "/#solutions" },
      { name: "Social Growth", href: "/#solutions" }
    ]
  },
  {
    title: "AGENCY",
    links: [
      { name: "Portfolio", href: "/#portfolio" },
      { name: "Strategy", href: "/#strategy" }
    ]
  },
  {
    title: "LEGAL",
    links: [
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Contact", href: "/#contact" }
    ]
  }
];

export default function Footer() {
  const location = useLocation();

  return (
    <footer className="pt-24 pb-12 bg-brand-dark border-t border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Logo 
              className="h-64 w-auto -mt-20 mb-2 grayscale hover:grayscale-0 transition-all opacity-80" 
            />
            <p className="text-white/40 max-w-sm leading-relaxed text-sm">
              Defining the future of digital identity through minimalist elegance and strategic power. We build more than brands; we build authorities.
            </p>
          </div>
          
          {footerLinks.map((group) => (
            <div key={`footer-group-${group.title.toLowerCase()}`}>
              <h4 className="text-[10px] tracking-[0.2em] font-bold text-white/40 mb-6 uppercase">
                {group.title}
              </h4>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={`footer-link-${link.name.replace(/\s+/g, '-').toLowerCase()}`}>
                    {link.href.startsWith('/') ? (
                      <Link 
                        to={link.href}
                        onClick={(e) => {
                          const hashIndex = link.href.indexOf('#');
                          if (hashIndex !== -1 && location.pathname === '/') {
                            e.preventDefault();
                            const id = link.href.substring(hashIndex + 1);
                            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="text-sm text-white/40 hover:text-brand-blue transition-colors"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a 
                        href={link.href} 
                        className="text-sm text-white/40 hover:text-brand-blue transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © 2024 Thakur Innovation. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="https://www.facebook.com/profile.php?id=61589716889332" target="_blank" rel="noopener noreferrer" className="text-xs text-white/30 hover:text-brand-blue transition-colors">Facebook</a>
            <a href="#" className="text-xs text-white/30 hover:text-brand-blue transition-colors">LinkedIn</a>
            <a href="#" className="text-xs text-white/30 hover:text-brand-blue transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
