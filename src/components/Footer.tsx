"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="relative w-full py-16 overflow-hidden flex flex-col justify-end min-h-[50vh] border-t border-white/10">
      
      {/* Background with Dark Gradient Fallback */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center scale-105 transition-opacity duration-1000" 
        style={{ 
          backgroundImage: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.8)), url('/watch/image copy 4.png')",
          backgroundColor: "#0a0a0a" 
        }} 
      />
      
      {/* Backdrop overlay for blurring and darkening the background */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      
      {/* Main Footer Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 mt-auto">
        
        {/* Main Flex Container for Left, Center, Right align */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/10 w-full gap-8 md:gap-0">
          
          {/* Left Side: Logo */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <img src="/watch_logo_no_bg.png" alt="Logo" className="h-12 md:h-14 w-auto object-contain" />
          </div>

          {/* Center Side: Navigation Links */}
          <div className="w-full md:w-1/3 flex justify-center">
            <ul className="flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/70 font-medium">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#insights" className="hover:text-white transition-colors">Insights</a></li>
              <li><a href="#mechanics" className="hover:text-white transition-colors">Mechanics</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">Collection</a></li>
              <li><a href="#shop" className="hover:text-white transition-colors">Shop</a></li>
            </ul>
          </div>

          {/* Right Side: 4 Icons (Instagram, LinkedIn, WhatsApp, GitHub) */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end space-x-6 text-white/70">
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="hover:text-white hover:-translate-y-1 transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="hover:text-white hover:-translate-y-1 transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
            {/* WhatsApp */}
            <a href="#" aria-label="WhatsApp" className="hover:text-white hover:-translate-y-1 transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                 <path fillRule="evenodd" d="M12.031 0C5.383 0 0 5.385 0 12.031c0 2.12.553 4.195 1.6 6.012L.156 23.36l5.441-1.428A11.968 11.968 0 0012.031 24c6.647 0 12.032-5.384 12.032-12.031C24.063 5.385 18.678 0 12.031 0zm0 22.012a9.98 9.98 0 01-5.093-1.39l-.364-.216-3.784.992.998-3.69-.236-.376A9.956 9.956 0 012.019 12.03C2.019 6.505 6.505 2.02 12.031 2.02c5.524 0 10.01 4.485 10.01 10.01 0 5.525-4.486 10.012-10.01 10.012zm5.494-7.513c-.302-.15-1.782-.876-2.057-.978-.276-.1-.476-.15-.678.151-.2.301-.777.978-.952 1.178-.176.2-.352.226-.653.076-.301-.15-1.272-.468-2.42-1.492-.894-.797-1.498-1.782-1.674-2.083-.176-.301-.019-.465.132-.615.135-.135.301-.351.452-.527.15-.175.2-.301.302-.501.1-.2.05-.376-.026-.527-.075-.15-.678-1.63-.928-2.234-.242-.587-.49-.508-.678-.518-.175-.008-.376-.011-.577-.011-.201 0-.527.076-.803.376-.277.301-1.054 1.03-1.054 2.508 0 1.48 1.08 2.908 1.23 3.11.15.2 2.12 3.238 5.135 4.542 2.553 1.103 3.013.882 3.535.828.528-.05 1.782-.728 2.032-1.432.251-.703.251-1.306.176-1.432-.075-.125-.276-.2-.577-.35z" clipRule="evenodd" />
              </svg>
            </a>
            {/* GitHub */}
            <a href="#" aria-label="GitHub" className="hover:text-white hover:-translate-y-1 transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

        </div>

        {/* Optional small credit text */}
        <div className="w-full text-center mt-6 pb-2 text-[10px] tracking-widest text-white/30 uppercase">
          © 2026 DTAX. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
