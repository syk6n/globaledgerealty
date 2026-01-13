import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyInvest from './components/WhyInvest';
import Founder from './components/Founder';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import Partners from './components/Partners';

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-gold-500 selection:text-black">
      <Header />
      <main>
        <Hero />
        <Partners />
        <WhyInvest />
        <Founder />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;