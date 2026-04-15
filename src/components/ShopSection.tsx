"use client";

import React from "react";
import { motion } from "framer-motion";

const watches = [
  { id: 1, name: "Chronos Elite", price: "$12,400", fakePrice: "$15,000", img: "/watch/image.png" },
  { id: 2, name: "Nebula Ghost", price: "$8,900", fakePrice: "$11,200", img: "/watch/image copy.png" },
  { id: 3, name: "Titanium Pure", price: "$18,200", fakePrice: "$22,000", img: "/watch/image copy 2.png" },
  { id: 4, name: "Sapphire Deep", price: "$14,500", fakePrice: "$16,800", img: "/watch/image copy 3.png" },
  { id: 5, name: "Midnight Onyx", price: "$21,000", fakePrice: "$25,500", img: "/image.png" },
  { id: 6, name: "Carbon Vector", price: "$11,100", fakePrice: "$13,000", img: "/image copy.png" },
  { id: 7, name: "Golden Horizon", price: "$32,400", fakePrice: "$40,000", img: "/image copy 2.png" },
  { id: 8, name: "Aero Stealth", price: "$9,500", fakePrice: "$12,500", img: "/watch/image copy 3.png" },
];

export default function ShopSection() {
  return (
    <section id="shop" className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light tracking-tighter mb-4"
          >
            The Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 tracking-[0.2em] uppercase text-xs md:text-sm max-w-2xl mx-auto"
          >
            Exquisite craftsmanship meets timeless design. Discover the pinnacle of horological engineering.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {watches.map((watch, i) => (
            <motion.div
              key={watch.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-gradient-to-b from-[#111] to-black border border-white/5 p-5 rounded-[2rem] flex flex-col items-center text-center overflow-hidden hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-700 hover:-translate-y-2"
            >

              {/* Sine/Shine Light Effect */}
              <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
                <div className="absolute top-[-100%] left-[-100%] h-[300%] w-[300%] bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1500ms] ease-in-out" />
              </div>

              {/* Watch Image with Ambient Glow */}
              <div className="relative w-full h-[350px] mb-4 flex items-center justify-center">
                <div className="absolute inset-0 bg-white/5 blur-[80px] rounded-full scale-50 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <img
                  src={watch.img}
                  alt={watch.name}
                  className="h-[300px] w-auto object-contain relative z-10 group-hover:rotate-6 transition-all duration-1000 ease-[0.22,1,0.36,1]"
                />
              </div>

              {/* Title & Info */}
              <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-1">Automatique</p>
              <h5 className="text-lg font-light tracking-tight mb-2 text-white/90 group-hover:text-white transition-colors">{watch.name}</h5>

              <div className="flex flex-col items-center gap-0.5 mb-6">
                <span className="text-xs text-white/30 line-through decoration-white/20 font-light">{watch.fakePrice}</span>
                <span className="text-xl font-bold text-white tracking-widest">{watch.price}</span>
              </div>

              {/* Shop Button */}
              <button className="w-full py-4 mt-auto border border-white/10 text-[10px] tracking-[0.4em] uppercase font-bold rounded-full overflow-hidden relative transition-all duration-500 hover:border-white group/btn">
                <span className="relative z-10 group-hover/btn:text-black transition-colors duration-300">Reserve Now</span>
                <div className="absolute inset-x-0 bottom-0 h-0 bg-white group-hover/btn:h-full transition-all duration-300 ease-out" />
              </button>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
