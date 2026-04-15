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

  // ✅ Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Body scroll lock (YAHI DALNA HAI)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${scrolled ? "py-2 bg-black/60 backdrop-blur-xl" : "py-4 md:py-2 bg-transparent"}`}>
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed top-0 left-0 w-screen h-screen bg-black z-[9999] flex flex-col"
            >

              {/* TOP BAR */}
              <div className="absolute top-0 left-0 w-full flex items-center justify-between px-6 md:px-10 py-5 z-10">

                {/* Logo */}
                <img
                  src="/watch_logo_no_bg.png"
                  alt="logo"
                  className="h-8 md:h-10"
                />

                {/* Close */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white text-3xl hover:text-white/70 transition-colors"
                >
                  &times;
                </button>
              </div>

              {/* MENU CONTENT CONTAINER */}
              <div className="flex flex-col items-center justify-center w-full h-full overflow-y-auto px-4 pt-24 pb-12">



                {/* NAV LINKS */}
                <div className="flex flex-col items-center space-y-6 md:space-y-8 w-full">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-xs md:text-sm tracking-[0.35em] md:tracking-[0.4em] uppercase text-white/60 hover:text-white transition duration-300 w-full text-center py-2"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
}
