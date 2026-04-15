"use client";

import { motion } from "framer-motion";

export default function FeatureSection() {
  return (
    <section className="min-h-screen w-full flex flex-col md:flex-row bg-[#ECECEC] overflow-hidden">
      {/* Left side Video */}
      <motion.div
        className="w-full md:w-1/2 h-[50vh] md:h-screen relative"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="/sec-video.mp4"
        />
      </motion.div>

      {/* Right side Text */}
      <motion.div
        className="w-full md:w-1/2 h-auto md:h-screen flex flex-col justify-center px-10 md:px-24 py-20 bg-white"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      >
        <motion.p
          className="text-sm tracking-[0.3em] uppercase text-black/50 font-medium mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Precision Redefined
        </motion.p>

        <motion.h2
          className="text-4xl md:text-6xl font-light text-black/90 tracking-tighter mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Craftsmanship in Focus.
        </motion.h2>

        <motion.p
          className="text-lg text-black/60 tracking-wide font-light leading-relaxed mb-10 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Every intricate detail engineered to perfection. The intersection of modern innovation and timeless tradition, built to withstand generations.
        </motion.p>

        {/* Button with Unique Hover Effect */}
        <motion.button
          className="group relative self-start px-10 py-5 border border-black bg-black text-white text-xs uppercase tracking-[0.2em] font-medium overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <span className="relative z-10 group-hover:text-black transition-colors duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]">
            Explore Details
          </span>
          <div className="absolute inset-0 h-full w-full bg-white scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]" />
        </motion.button>

      </motion.div>
    </section>
  );
}
