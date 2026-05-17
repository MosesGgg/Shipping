import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Anchor, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-white/80 backdrop-blur-md border-b border-slate-100"
      id="navbar"
    >
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} id="logo-container">
        <div className="bg-primary p-1.5 rounded-lg text-white" id="logo-icon">
          <Anchor size={24} />
        </div>
        <span className="text-xl font-bold tracking-tight text-slate-900" id="brand-name">
          NAUTIC<span className="text-primary">PRIME</span>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600" id="nav-links">
        <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors cursor-pointer">Home</button>
        <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors cursor-pointer">Services</button>
        <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors cursor-pointer">About Us</button>
        <button onClick={() => scrollToSection('contact')} className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-primary/90 transition-all font-semibold">Contact</button>
      </div>

      <div className="md:hidden" id="mobile-menu-trigger">
        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2" id="menu-toggle">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-6 shadow-xl md:hidden"
            id="mobile-nav-panel"
          >
            <button onClick={() => scrollToSection('hero')} className="text-left font-bold text-lg text-slate-900">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-left font-bold text-lg text-slate-900">Services</button>
            <button onClick={() => scrollToSection('about')} className="text-left font-bold text-lg text-slate-900">About Us</button>
            <button onClick={() => scrollToSection('contact')} className="bg-primary text-white p-4 rounded-xl font-bold text-center">Get in Touch</button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
