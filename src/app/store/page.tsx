"use client";

import Image from "next/image";
import { useState } from "react";

const topUpPackages = [
  {
    id: 1,
    name: "100 Diamonds",
    bonus: "",
    price: "Rp 15.000",
    numericPrice: 15000,
    imagePlaceholder: "bg-blue-500/20",
    glow: "shadow-blue-500/30",
    iconColor: "text-blue-400"
  },
  {
    id: 2,
    name: "300 Diamonds",
    bonus: "+ 15 Bonus",
    price: "Rp 45.000",
    numericPrice: 45000,
    imagePlaceholder: "bg-purple-500/20",
    glow: "shadow-purple-500/30",
    iconColor: "text-purple-400"
  },
  {
    id: 3,
    name: "1,000 Diamonds",
    bonus: "+ 100 Bonus",
    price: "Rp 149.000",
    numericPrice: 149000,
    imagePlaceholder: "bg-pink-500/20",
    glow: "shadow-pink-500/40",
    iconColor: "text-pink-400",
    popular: true
  },
  {
    id: 4,
    name: "5,000 Diamonds",
    bonus: "+ 750 Bonus",
    price: "Rp 699.000",
    numericPrice: 699000,
    imagePlaceholder: "bg-yellow-500/20",
    glow: "shadow-yellow-500/40",
    iconColor: "text-yellow-400"
  },
];

export default function StorePage() {
  const [loadingId, setLoadingId] = useState<number | null>(null);
  const [email, setEmail] = useState<string>("");

  const handleTopUp = async (id: number, amount: number) => {
    setLoadingId(id);
    try {
      if (!email) {
        alert("Please enter your email first.");
        setLoadingId(null);
        return;
      }
      
      const response = await fetch("http://localhost:8000/api/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          amount: amount,
          payment_method: "Qris"
        })
      });

      const data = await response.json();
      
      if (response.ok && data.data && data.data.checkout_url) {
        window.location.href = data.data.checkout_url;
      } else {
        alert("Failed to create transaction: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Top-up error:", error);
      alert("An error occurred while creating transaction.");
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <section className="min-h-screen w-full bg-black text-white px-6 md:px-12 py-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
            Top Up <span className="text-red-600">Diamonds</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Isi ulang Diamond Anda untuk membeli item eksklusif, skin, dan keuntungan lainnya di Seduce Arena.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-12">
          <label className="block text-sm font-medium text-gray-300 mb-2">Email Akun Anda</label>
          <input 
            type="email" 
            placeholder="Masukkan email terdaftar..." 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all text-white placeholder:text-gray-500"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topUpPackages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`group relative flex flex-col bg-white/5 border ${pkg.popular ? 'border-red-500/50' : 'border-white/10'} rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl ${pkg.glow}`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-red-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-20">
                  MOST POPULAR
                </div>
              )}
              
              <div className={`w-full h-48 ${pkg.imagePlaceholder} flex flex-col items-center justify-center relative overflow-hidden`}>
                {/* Diamond Icon SVG */}
                <svg className={`w-20 h-20 ${pkg.iconColor} drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] group-hover:scale-110 transition-transform duration-500`} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 9l10 13 10-13L12 2zm0 2.84L18.04 9 12 18.25 5.96 9 12 4.84z" />
                </svg>
              </div>
              
              <div className="p-6 flex flex-col flex-1 items-center text-center">
                <h3 className="text-2xl font-extrabold mb-1 text-white">
                  {pkg.name}
                </h3>
                {pkg.bonus ? (
                  <span className="text-sm text-green-400 font-semibold tracking-wide mb-4">
                    {pkg.bonus}
                  </span>
                ) : (
                  <span className="text-sm text-transparent mb-4 block">
                    No bonus
                  </span>
                )}
                
                <div className="mt-auto pt-6 w-full flex items-center justify-center">
                  <button 
                    onClick={() => handleTopUp(pkg.id, pkg.numericPrice)}
                    disabled={loadingId === pkg.id}
                    className="w-full py-3 bg-white/10 hover:bg-white text-white hover:text-black font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{loadingId === pkg.id ? "Processing..." : pkg.price}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Payment Methods Info */}
        <div className="mt-20 pt-10 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm mb-6">Metode pembayaran yang didukung</p>
          <div className="flex flex-wrap justify-center gap-6 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Mock Payment Method Logos text */}
             <span className="font-bold text-xl tracking-widest">Qris</span>
             <span className="font-bold text-xl tracking-widest">GoPay</span>
             <span className="font-bold text-xl tracking-widest">OVO</span>
             <span className="font-bold text-xl tracking-widest">Dana</span>
             <span className="font-bold text-xl tracking-widest">Bank Transfer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
