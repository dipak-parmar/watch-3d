"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const FRAME_COUNT = 249;

export default function WatchScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // To avoid hydration mismatch errors with useScroll
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const springScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const currentIndex = useTransform(springScroll, [0, 1], [1, FRAME_COUNT]);

  useEffect(() => {
    if (!isMounted) return;

    const loadImages = async () => {
      let loadedCount = 0;
      const loadPromises = [];

      for (let i = 1; i <= FRAME_COUNT; i++) {
        const promise = new Promise<HTMLImageElement>((resolve) => {
          const img = new Image();
          const paddedIndex = String(i).padStart(3, "0");
          img.src = `/watch/ezgif-frame-${paddedIndex}.png`;

          img.onload = () => {
            loadedCount++;
            resolve(img);
          };
          img.onerror = () => {
            loadedCount++;
            resolve(img);
          };
        });
        loadPromises.push(promise);
      }

      const results = await Promise.all(loadPromises);
      setImages(results);
      setIsLoaded(true);
    };

    loadImages();
  }, [isMounted]);

  useEffect(() => {
    if (!isLoaded || images.length === 0 || !canvasRef.current || !isMounted) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      renderFrame(currentIndex.get());
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    return () => window.removeEventListener("resize", resizeCanvas);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, images, isMounted]);

  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas || images.length === 0) return;

    const frameIndex = Math.min(Math.max(1, Math.round(index)), FRAME_COUNT) - 1;
    const img = images[frameIndex];
    if (!img) return;

    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    // "cover/contain" handling tuned for luxury scale (making it larger on screen)
    const scale = Math.max(
      canvas.clientWidth / img.width,
      canvas.clientHeight / img.height
    ) * 0.95; // scaling slightly down from cover for premium framing

    const w = img.width * scale;
    const h = img.height * scale;
    const x = canvas.clientWidth / 2 - w / 2;
    const y = canvas.clientHeight / 2 - h / 2;

    ctx.drawImage(img, x, y, w, h);
  };

  useEffect(() => {
    if (!isMounted || !isLoaded) return;
    const unsubscribe = currentIndex.on("change", (latestVal) => {
      requestAnimationFrame(() => renderFrame(latestVal));
    });
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, isLoaded, isMounted]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-black">

      {/* Main Content Payload - Cinematic Canvas Only */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 z-10 w-full h-full object-cover" />
      </div>
    </div>
  );
}
