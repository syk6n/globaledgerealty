import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '1M-2M AED',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send data to a backend
    alert('Thank you! Mohd. Shaukat Ali or his team from Global Edge Realty will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', budget: '1M-2M AED', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-luxury-charcoal relative scroll-mt-28">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="bg-black border border-gold-500/30 p-8 md:p-12 shadow-[0_0_50px_rgba(212,175,55,0.1)]">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-3">Begin Your Investment Journey</h2>
            <p className="text-gray-400">Schedule a private consultation tailored to your goals.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-gold-400 text-xs uppercase tracking-wider">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-luxury-slate border-b border-gray-700 text-white p-3 focus:outline-none focus:border-gold-500 transition-colors"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-gold-400 text-xs uppercase tracking-wider">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  className="w-full bg-luxury-slate border-b border-gray-700 text-white p-3 focus:outline-none focus:border-gold-500 transition-colors"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-gold-400 text-xs uppercase tracking-wider">Email Address</label>
              <input 
                type="email" 
                required
                className="w-full bg-luxury-slate border-b border-gray-700 text-white p-3 focus:outline-none focus:border-gold-500 transition-colors"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="text-gold-400 text-xs uppercase tracking-wider">Investment Budget (AED)</label>
              <select 
                className="w-full bg-luxury-slate border-b border-gray-700 text-white p-3 focus:outline-none focus:border-gold-500 transition-colors appearance-none"
                value={formData.budget}
                onChange={e => setFormData({...formData, budget: e.target.value})}
              >
                <option>500k - 1M AED</option>
                <option>1M - 2M AED</option>
                <option>2M - 5M AED</option>
                <option>5M+ AED (Luxury Collection)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-gold-400 text-xs uppercase tracking-wider">Message (Optional)</label>
              <textarea 
                rows={4}
                className="w-full bg-luxury-slate border-b border-gray-700 text-white p-3 focus:outline-none focus:border-gold-500 transition-colors"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-gold-500 text-black font-sans font-bold uppercase tracking-widest py-4 mt-8 hover:bg-gold-400 transition-all duration-300"
            >
              Request Consultation
            </button>
          </form>

          <div className="mt-8 text-center border-t border-white/10 pt-6">
            <p className="text-gray-500 text-sm mb-4">Or contact us directly</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
              <a href="tel:+971505954098" className="text-white hover:text-gold-400 transition-colors flex items-center gap-2 group">
                 <Phone size={18} className="text-gold-500 group-hover:scale-110 transition-transform"/> 
                 <span>🇦🇪 +971 50 595 4098</span>
              </a>
              <a href="tel:+919811669862" className="text-white hover:text-gold-400 transition-colors flex items-center gap-2 group">
                 <Phone size={18} className="text-gold-500 group-hover:scale-110 transition-transform"/>
                 <span>🇮🇳 +91 9811669862</span>
              </a>
              <a href="mailto:info.globaledgerealty@gmail.com" className="text-white hover:text-gold-400 transition-colors flex items-center gap-2 group">
                 <Mail size={18} className="text-gold-500 group-hover:scale-110 transition-transform"/>
                 <span>info.globaledgerealty@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;