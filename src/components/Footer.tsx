import { motion } from "motion/react";
import Logo from "./Logo";

const footerLinks = [
  {
    title: "SERVICES",
    links: [
      { name: "Brand Architecture", href: "#solutions" },
      { name: "SEO Strategy", href: "#solutions" },
      { name: "Social Growth", href: "#solutions" }
    ]
  },
  {
    title: "AGENCY",
    links: [
      { name: "Our Story", href: "#about" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Strategy", href: "#strategy" }
    ]
  },
  {
    title: "LEGAL",
    links: [
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Contact", href: "mailto:thakurinnovation2058@gmail.com" }
    ]
  }
];

export default function Footer() {
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
                    <a 
                      href={link.href} 
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-sm text-white/40 hover:text-brand-blue transition-colors"
                    >
                      {link.name}
                    </a>
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
