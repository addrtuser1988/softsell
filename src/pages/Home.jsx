import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <Features />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default Home;