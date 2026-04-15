"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ImageParallax() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100, damping: 30, restDelta: 0.001
  });

  // Moves from bottom upwards to the center as user scrolls
  const imgY = useTransform(smoothProgress, [0, 1], ["30vh", "0vh"]);

  // Scales up dynamically (approx 300px to 500px assuming base 500px)
  const imgScale = useTransform(smoothProgress, [0, 1], [0.6, 1.0]);

  return (
    <section ref={containerRef} className="relative h-[200vh] bg-black text-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30 mix-blend-luminosity"
          style={{ backgroundImage: "url('/image-copy.png')" }}
        />

        {/* Foreground Floating Animated Image */}
        <motion.div
          style={{ y: imgY, scale: imgScale, transformOrigin: "center" }}
          className="relative z-10 w-[250px] md:w-[500px] aspect-[4/5]"
        >
          <img
            src="/image.png"
            alt="Exclusive Detail"
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Text Area - Bottom Left Overlay */}
        <div className="absolute bottom-10 left-6 md:bottom-24 md:left-24 flex flex-col items-start z-20 pointer-events-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-serif text-white tracking-tight drop-shadow-2xl leading-none mb-4"
          >
            Absolute<br /><span className="font-light italic">Allure.</span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xs md:text-sm tracking-[0.3em] font-medium text-white/80 uppercase drop-shadow-lg max-w-sm mb-8 leading-relaxed"
          >
            The signature look that defines a legacy. Rare materials seamlessly intertwined.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="group relative overflow-hidden px-8 py-4 border border-white/40 bg-black/40 backdrop-blur-md text-white text-xs uppercase tracking-[0.2em] font-bold transition-colors hover:border-white hover:text-black"
          >
            <span className="relative z-10">Discover Gallery</span>
            <div className="absolute inset-0 h-full w-full bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]" />
          </motion.button>
        </div>

      </div>
    </section>
  );
}
