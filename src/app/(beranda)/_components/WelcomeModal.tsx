"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Menampilkan modal dengan sedikit delay setelah halaman diload
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-gradient-to-br from-pink-500 via-purple-500 to-white p-1 shadow-2xl"
          >
            <div className="bg-white rounded-[23px] p-8 text-center relative overflow-hidden">
              {/* Dekorasi efek blur di latar belakang modal */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-4">
                  Selamat Datang di Seduce Arena!
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed font-medium">
                  Persiapkan dirimu untuk petualangan romansa yang mendebarkan. Apakah kamu siap untuk bertahan hidup dan memenangkan hati mereka?
                </p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 px-6 rounded-xl text-white font-bold text-lg bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transform transition-all active:scale-95 shadow-lg shadow-pink-500/30"
                >
                  Mulai Petualangan
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
