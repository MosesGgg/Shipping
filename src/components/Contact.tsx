import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setIsSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
        } else {
          const errorData = await response.json();
          alert(errorData.error || 'Failed to send message. Please try again.');
        }
      } catch (err) {
        console.error('Error submitting form:', err);
        alert('An error occurred. Please check your connection and try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-slate-50" id="contact">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16" id="contact-container">
        <div className="flex-1 space-y-8" id="contact-info">
          <div>
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-4">Connect With Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Ready to Sail? <br /> Get a Specialized Quote.
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed max-w-md">
              Whether you're looking for global logistics or custom shipbuilding, our team is standing by to assist with your maritime needs.
            </p>
          </div>

          <div className="space-y-4" id="contact-details">
            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100" id="detail-1">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Send size={20} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Response Time</p>
                <p className="text-slate-900 font-semibold">Under 24 Hours</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1" id="contact-form-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-slate-100 relative overflow-hidden"
            id="form-card"
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12 space-y-6"
                id="success-message"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h4 className="text-3xl font-bold text-slate-900">Message Sent!</h4>
                <p className="text-slate-600">Thank you for your interest. Our shipping team will contact you shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all"
                  id="reset-form"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
                <div id="field-name">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className={`w-full px-6 py-4 rounded-xl bg-slate-50 border ${errors.name ? 'border-red-500' : 'border-slate-200'} outline-none focus:border-primary transition-all text-slate-900 font-medium`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
                </div>

                <div id="field-email">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Business Email</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className={`w-full px-6 py-4 rounded-xl bg-slate-50 border ${errors.email ? 'border-red-500' : 'border-slate-200'} outline-none focus:border-primary transition-all text-slate-900 font-medium`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
                </div>

                <div id="field-message">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Your Inquiry</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your maritime project or logistics requirements..."
                    className={`w-full px-6 py-4 rounded-xl bg-slate-50 border ${errors.message ? 'border-red-500' : 'border-slate-200'} outline-none focus:border-primary transition-all text-slate-900 font-medium resize-none`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1 font-medium">{errors.message}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full bg-accent text-black px-8 py-5 rounded-2xl font-bold text-lg shadow-lg hover:shadow-accent/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  id="submit-button"
                >
                  {isSubmitting ? 'Sending Request...' : 'Send Message'}
                  <Send size={20} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
