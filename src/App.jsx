import React from 'react';
import './styles/global.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import ThemeToggle from './components/ThemeToggle';
import useDarkMode from './components/useDarkMode';

function App() {
   const [isDarkMode, toggleDarkMode] = useDarkMode();
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
        
      <main>
        <HeroSection />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
<ThemeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
       <ChatWidget />
    </div>
  );
}

export default App;