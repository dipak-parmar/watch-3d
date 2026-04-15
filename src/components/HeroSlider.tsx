"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const videos = [
  "/hero-video-1.mp4",
  "/hero-video-2.mp4",
  "/hero-video-3.mp4",
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const handleVideoEnd = () => {
    setIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <section className="h-[100vh] w-full relative overflow-hidden bg-black">
      <AnimatePresence initial={false}>
        <motion.video
          key={index}
          src={videos[index]}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Hero Content - Lower Left Overlay */}
      <div className="absolute bottom-12 left-8 md:bottom-24 md:left-24 flex flex-col items-start z-20 pointer-events-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-8xl font-serif text-white tracking-tight drop-shadow-2xl leading-none mb-6"
        >
          Timeless<br /><span className="font-light italic">Precision.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-xs md:text-sm tracking-[0.3em] font-medium text-white/80 uppercase drop-shadow-lg max-w-md mb-10 leading-relaxed"
        >
          A testament to absolute perfection. Engineered for those who master their own time.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="group relative overflow-hidden px-10 py-5 border border-white/40 bg-transparent text-white text-xs uppercase tracking-[0.2em] font-bold transition-colors hover:border-white hover:text-black"
        >
          <span className="relative z-10">Explore the Heritage</span>
          <div className="absolute inset-0 h-full w-full bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]" />
        </motion.button>
      </div>
    </section>
  );
}
