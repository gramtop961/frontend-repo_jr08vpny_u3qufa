import React from 'react';
import Header from './components/Header';
import SocialCTA from './components/SocialCTA';
import LogoShowcase from './components/LogoShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-white text-slate-800">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <Header />
        <SocialCTA />
        <LogoShowcase />
      </div>
      <Footer />
    </div>
  );
}

export default App;
