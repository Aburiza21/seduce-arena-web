"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Sinopsis from "../_components/Sinopsis";
import Alur from "../_components/Alur";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms for decorative elements
  const y1 = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={sectionRef}
      id="tentang"
      className="w-full pt-16 pb-24 bg-white text-gray-900 px-6 relative"
    >
      {/* Wave Transition overlaying the previous section */}
      <div className="absolute top-0 left-0 w-full -translate-y-[99%] z-20 pointer-events-none leading-none">
        <svg
          viewBox="0 0 1440 200"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,144C1248,128,1344,96,1392,80L1440,64L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
          ></path>
        </svg>
      </div>

      {/* Background Decorators */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Decorative background elements - sensual glow with parallax */}
        {/* <motion.div
          style={{ y: y1 }}
          className="absolute top-0 right-0 -mt-20 -mr-20 w-[500px] h-[500px] bg-pink-100 rounded-full blur-[120px] opacity-70 animate-pulse"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[400px] h-[400px] bg-fuchsia-100 rounded-full blur-[120px] opacity-70 animate-pulse"
        />
        <motion.div
          style={{ y: y3 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-50 rounded-full blur-[150px] opacity-50"
        /> */}

        {/* Subtle heart pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ec4899 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 mt-8">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold tracking-[0.3em] uppercase text-pink-600 border border-pink-200 rounded-full bg-pink-50 backdrop-blur-sm shadow-sm">
            ♥ 18+ Romance Survival ♥
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-600 bg-clip-text text-transparent drop-shadow-sm">
              Tentang Seduce Arena
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sebuah permainan bertahan hidup yang memikat, di mana setiap detak
            jantung dan setiap rayuan menentukan nasib Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Sinopsis />
          <Alur />
        </div>

        {/* CTA tambahan bernuansa menggoda */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm tracking-widest uppercase mb-4 font-semibold">
            Apakah Anda siap mempertaruhkan segalanya?
          </p>
          <button className="px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white font-bold text-lg shadow-[0_0_30px_rgba(236,72,153,0.3)] hover:shadow-[0_0_40px_rgba(236,72,153,0.5)] hover:scale-105 transition-all duration-300">
            Mulai Rayuan Anda
          </button>
        </div>
      </div>
    </section>
  );
}
