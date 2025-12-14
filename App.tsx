import React from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solutions from './components/Solutions';
import Testimonials from './components/Testimonials';
import GoogleReviews from './components/GoogleReviews';
import Location from './components/Location';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

const App: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <Hero />
      <PainPoints />
      <Solutions />
      <Testimonials />
      <GoogleReviews />
      <Location />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default App;