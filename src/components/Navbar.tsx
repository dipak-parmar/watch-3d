"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Insights", href: "#insights" },
  { name: "Mechanics", href: "#mechanics" },
  { name: "Collection", href: "#collection" },
  { name: "Shop", href: "#shop" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? "py-2 bg-black/60 backdrop-blur-xl" : "py-4 md:py-2 bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="relative z-[110]">
          <img src="/watch_logo_no_bg.png" alt="Logo" className="h-6 md:h-12 w-auto object-contain" />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-[10px] tracking-[0.3em] uppercase text-white/70 hover:text-white transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-[110] md:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1"
          aria-label="Toggle Menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            className="w-6 h-[1px] bg-white block transition-transform"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-[1px] bg-white block transition-opacity"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            className="w-6 h-[1px] bg-white block transition-transform"
          />
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 bg-black/98 backdrop-blur-3xl z-[100] flex flex-col items-center justify-center p-8 overflow-y-auto md:hidden"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl tracking-[0.4em] uppercase text-white font-light hover:text-white/50 transition-colors py-4 w-full text-center border-b border-white/5"
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
}
