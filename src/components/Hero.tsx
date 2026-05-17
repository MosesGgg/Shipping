import { motion } from 'motion/react';
import { Ship, ArrowRight } from 'lucide-react';
import heroImage from '../assets/images/maritime_hero_abstract_1778991537667.png';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 overflow-hidden" id="hero">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 opacity-10" id="bg-decoration">
        <Ship size={800} strokeWidth={0.5} className="text-primary translate-x-1/4 -translate-y-1/4" />
      </div>

      <div className="flex-1 max-w-2xl" id="hero-content">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          id="hero-animation-wrapper"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6" id="badge">
            Charting the Future of Shipping
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter text-slate-900 mb-8" id="hero-title">
            EXCELLENCE IN <br />
            <span className="text-primary">MARITIME</span> <br />
            ENGINEERING.
          </h1>
          <p className="text-lg text-slate-600 mb-10 text-balance leading-relaxed" id="hero-description">
            NauticPrime bridges the gap between traditional maritime values and future technology. 
            Delivering precision logistics and state-of-the-art shipbuilding across the globe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4" id="hero-ctas">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 group cursor-pointer shadow-lg shadow-accent/20" 
              id="primary-cta"
            >
              Start Your Project
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-slate-200 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors cursor-pointer" 
              id="secondary-cta"
            >
              View Solutions
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-16 grid grid-cols-3 gap-8 border-t border-slate-100 pt-8"
          id="stats"
        >
          <div id="stat-1">
            <p className="text-3xl font-bold text-primary">240+</p>
            <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Ships Built</p>
          </div>
          <div id="stat-2">
            <p className="text-3xl font-bold text-primary">15k</p>
            <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Global Routes</p>
          </div>
          <div id="stat-3">
            <p className="text-3xl font-bold text-primary">0%</p>
            <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Carbon Goal</p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-1 relative w-full aspect-video lg:aspect-square"
        id="hero-image-container"
      >
        <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-3" id="image-bg-skew"></div>
        <img 
          src={heroImage} 
          alt="Modern Maritime Ship" 
          className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl"
          referrerPolicy="no-referrer"
          id="hero-image"
        />
      </motion.div>
    </section>
  );
}
