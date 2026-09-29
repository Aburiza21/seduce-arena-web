"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollY } = useScroll();

  // Parallax transforms based on window scroll
  const bgY = useTransform(scrollY, [0, 1000], ["0%", "40%"]);
  const contentY = useTransform(scrollY, [0, 800], ["0%", "60%"]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen w-full flex flex-col items-center justify-center text-white px-4 relative overflow-hidden"
    >
      {/* Background Video with Parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute top-0 left-0 w-full h-[120vh] -top-[10vh] z-0"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Dark Overlay for Readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-0"></div>
    </section>
  );
}
