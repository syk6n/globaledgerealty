import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, ShieldCheck, Coins, Sparkles, Send } from 'lucide-react';
import { askInvestmentAdvisor } from '../services/geminiService';

const data = [
  { year: '2019', price: 100 },
  { year: '2020', price: 108 },
  { year: '2021', price: 125 },
  { year: '2022', price: 145 },
  { year: '2023', price: 168 },
  { year: '2024', price: 190 },
  { year: '2025', price: 215 },
];

const WhyInvest: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAskAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    setLoading(true);
    setAnswer(null);
    const response = await askInvestmentAdvisor(question);
    setAnswer(response);
    setLoading(false);
  };

  return (
    <section id="why-invest" className="py-20 bg-luxury-charcoal relative scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gold-500 font-sans text-sm tracking-[0.3em] uppercase mb-4">Market Insights</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Why Invest in Dubai?</h3>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            A safe haven for global capital with tax-free yields and a vision for the future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Chart Section */}
          <div className="bg-luxury-slate p-8 rounded-sm border border-white/5 shadow-2xl w-full">
            <h4 className="text-white font-serif text-2xl mb-2">Property Value Appreciation Index</h4>
            <p className="text-gray-400 text-sm mb-6">Consistent growth in luxury sector (2019-2025 Projection)</p>
            <div className="h-[300px] w-full min-h-[300px]" style={{ minWidth: 0 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                  <XAxis dataKey="year" stroke="#666" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} dy={10} />
                  <YAxis stroke="#666" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} dx={-10} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0a0a0a', borderColor: '#D4AF37', color: '#fff' }}
                    itemStyle={{ color: '#D4AF37' }}
                  />
                  <Area type="monotone" dataKey="price" stroke="#D4AF37" strokeWidth={2} fillOpacity={1} fill="url(#colorPrice)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Key Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: TrendingUp, title: "High ROI", desc: "Average rental yields of 6-10%, outperforming London and NY." },
              { icon: Coins, title: "Tax-Free", desc: "0% Property tax, 0% Income tax, 0% Capital gains tax." },
              { icon: ShieldCheck, title: "Golden Visa", desc: "10-year residency eligibility for property investors." },
              { icon: Sparkles, title: "Luxury Lifestyle", desc: "World-class infrastructure, safety, and amenities." },
            ].map((item, idx) => (
              <div key={idx} className="p-6 border border-gold-500/20 bg-luxury-black hover:border-gold-500/60 transition-colors group">
                <item.icon className="text-gold-500 mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />
                <h5 className="text-white font-serif text-xl mb-2">{item.title}</h5>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Advisor Section */}
        <div className="bg-gradient-to-r from-luxury-black to-luxury-slate border border-gold-500/30 rounded-lg p-8 md:p-12 text-center">
          <h4 className="text-2xl font-serif text-white mb-4">Have questions about the market?</h4>
          <p className="text-gray-400 mb-8">Ask our AI Advisor powered by Global Edge Realty insights.</p>
          
          <form onSubmit={handleAskAI} className="max-w-2xl mx-auto relative mb-6">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ex: Is it a good time to buy in Downtown Dubai?"
              className="w-full bg-black/50 border border-gray-700 text-white p-4 pr-14 rounded-md focus:outline-none focus:border-gold-500 transition-colors"
            />
            <button 
              type="submit" 
              disabled={loading}
              className="absolute right-2 top-2 bottom-2 bg-gold-600 text-white p-2 rounded-md hover:bg-gold-500 disabled:opacity-50 transition-colors"
            >
              <Send size={20} />
            </button>
          </form>

          {loading && <p className="text-gold-400 animate-pulse">Analyzing market trends...</p>}
          
          {answer && (
            <div className="max-w-3xl mx-auto bg-black/40 p-6 rounded border-l-4 border-gold-500 text-left animate-fade-in">
               <p className="text-gray-200 leading-relaxed whitespace-pre-line">{answer}</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default WhyInvest;