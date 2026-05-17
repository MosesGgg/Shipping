import { motion } from 'motion/react';
import aboutImage from '../assets/images/maritime_about_port_1778991583756.png';

export default function About() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white" id="about">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16" id="about-container">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full"
          id="about-image-wrapper"
        >
          <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl border-8 border-slate-50" id="about-image-inner">
            <img 
              src={aboutImage} 
              alt="Coastal Port Operations" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              id="about-image"
            />
            <div className="absolute bottom-8 left-8 bg-primary p-6 rounded-3xl text-white shadow-xl max-w-[240px]" id="about-experience-card">
              <p className="text-4xl font-bold mb-1 tracking-tighter">45+</p>
              <p className="text-sm font-medium opacity-90 leading-tight">Years of Maritime Legacy & Innovation</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 space-y-8"
          id="about-content"
        >
          <div id="about-intro">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-4">The Nautic Heritage</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Navigating with Purpose, <br /> Built for the Future.
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-primary pl-6" id="quote">
              "We don't just ship cargo; we transport the vital resources that power the modern world, with an unwavering commitment to the sea."
            </p>
          </div>
          
          <div className="space-y-6 text-slate-600 leading-relaxed" id="about-text">
            <p>
              Founded in 1981, NauticPrime began with a single tugboat. Today, we manage one of the world's most advanced sustainable fleets. Our mission is to transform the maritime sector into a beacon of efficiency and environmental responsibility.
            </p>
            <p>
              By integrating AI-driven navigation and hydrogen-power shipbuilding, we're not just crossing oceans—we're redefining what's possible for the next generation of global commerce.
            </p>
          </div>

          <div className="flex pt-4" id="about-cta-container">
            <button 
              onClick={() => alert('Team directory and recruitment portal coming soon!')}
              className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary transition-all shadow-lg cursor-pointer" 
              id="about-cta"
            >
              Meet Our Visionary Team
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
