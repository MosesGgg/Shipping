import { Anchor, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-6 md:px-12" id="footer">
      <div className="max-w-7xl mx-auto" id="footer-container">
        <div className="grid md:grid-cols-4 gap-12 mb-16" id="footer-top">
          <div className="col-span-2 space-y-6" id="footer-brand">
            <div className="flex items-center gap-2" id="footer-logo">
              <div className="bg-primary p-1.5 rounded-lg text-white" id="footer-logo-icon">
                <Anchor size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight" id="footer-brand-name">
                NAUTIC<span className="text-primary">PRIME</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed" id="footer-mission">
              Global headquarters in Singapore. Branch offices in London, Rotterdam, and Busan. 
              The world's leader in sustainable maritime engineering and logistics.
            </p>
            <div className="flex gap-4" id="social-links">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"><Facebook size={18} /></a>
            </div>
          </div>

          <div id="footer-links-1">
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-primary">Company</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career Opportunities</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investor Relations</a></li>
            </ul>
          </div>

          <div id="footer-links-2">
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-primary">Contact Us</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-3"><Mail size={16} className="text-primary" /> contact@nauticprime.com</li>
              <li className="flex items-center gap-3"><Phone size={16} className="text-primary" /> +65 6788 9000</li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" /> 
                12 Marina View, Asia Square <br /> Tower 2, Singapore 018961
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium" id="footer-bottom">
          <p id="copyright">© 2026 NauticPrime International Ltd. All rights reserved.</p>
          <div className="flex gap-6" id="legal-links">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
