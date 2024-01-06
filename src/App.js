import React, { useEffect, useState } from 'react';
import './styles/App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

function App() {
  const [navbarBg, setNavbarBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Apply dark background when not at the top
      setNavbarBg(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Navbar className={navbarBg ? 'navbar-bg' : ''} />
      <HeroSection />
    </div>
  );
}

export default App;
