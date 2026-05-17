import { motion } from 'motion/react';
import { Ship, Package, Settings, Wind, Anchor, Globe } from 'lucide-react';

const services = [
  {
    title: "Ship Building",
    description: "Designing and constructing high-performance vessels with carbon-neutral propulsion systems.",
    icon: <Ship className="w-8 h-8" />,
    color: "bg-cyan-50 text-primary"
  },
  {
    title: "Global Logistics",
    description: "Advanced route optimization and real-time tracking for seamless global operation connectivity.",
    icon: <Globe className="w-8 h-8" />,
    color: "bg-orange-50 text-accent"
  },
  {
    title: "Marine Maintenance",
    description: "Specialized maintenance and underwater robotics for deep-sea structural infrastructure.",
    icon: <Settings className="w-8 h-8" />,
    color: "bg-slate-50 text-slate-900"
  },
];

export default function Services() {
  return (
    <section className="py-24 px-6 md:px-12 bg-slate-50/50" id="services">
      <div className="max-w-7xl mx-auto" id="services-container">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16" id="services-header">
          <div className="max-w-2xl" id="services-intro">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Pioneering Tomorrow's <br /> Maritime Solutions Today.
            </h3>
          </div>
          <p className="text-slate-600 max-w-sm mb-2" id="services-text">
            From heavy-lift transport to sustainable engineering, we provide full-lifecycle support for the global maritime industry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8" id="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 group hover:shadow-xl hover:border-primary/20 transition-all"
              id={`service-card-${index}`}
            >
              <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110`} id={`icon-bg-${index}`}>
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4" id={`service-title-${index}`}>{service.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-8" id={`service-desc-${index}`}>{service.description}</p>
              <button 
                onClick={() => alert('Detailed service specifications are coming soon!')}
                className="flex items-center gap-2 text-sm font-bold text-primary group/btn cursor-pointer" 
                id={`learn-more-${index}`}
              >
                LEARN MORE 
                <span className="w-0 group-hover/btn:w-4 h-0.5 bg-primary transition-all duration-300"></span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
