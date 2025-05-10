import React from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { href: "#how", label: "  How It Works   ", style: { marginRight: '1cm' } },
  { href: "#why", label: "        Why Us    ", style: { marginRight: '1cm' } },
  { href: "#testimonials", label: "        Testimonials    ", style: { marginRight: '1cm' } },
  { href: "#contact", label: "        Contact", style: { marginRight: '1cm' } },
];

const Header = () => (
  <motion.header
    className="bg-white shadow sticky top-0 z-10"
    initial={{ y: -60, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    <div className="container mx-auto flex items-center justify-between py-4 px-4">
      <a href="/" className="flex items-center" style={{ minWidth: 180 }}>
        <img
          src="https://softsell.solutions/wp-content/uploads/2022/11/Soft-Sell-Dot-Solutions-Logo-Artboards_SS_Solutions_Secondary-Stacked-Gradient.png"
          alt="SoftSell Logo"
          className="h-10 w-auto"
          style={{ maxWidth: 180 }}
        />
      </a>
      <nav>
        <div className="flex flex-row items-center" style={{ columnGap: '5cm' }}>
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
              whileHover={{ scale: 1.12, color: "#2563eb" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * idx }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </nav>
    </div>
  </motion.header>
);

export default Header;