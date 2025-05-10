import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => (
  <section className="hero bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
    <div className="container mx-auto text-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        Unlock Value from Unused Software Licenses
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-lg md:text-xl mb-8"
      >
        SoftSell helps you turn your unused software licenses into cash—fast, secure, and hassle-free.
      </motion.p>
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.98 }}
        className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        Get a Quote
      </motion.a>
    </div>
  </section>
);

export default HeroSection;