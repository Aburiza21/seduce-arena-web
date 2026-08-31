"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="min-h-screen w-full bg-black text-white px-6 py-24 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-900/20 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 max-w-lg mx-auto text-center space-y-8 bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-md shadow-2xl shadow-green-500/10">
        
        <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto text-green-400 mb-6 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-3">
            Top Up Berhasil!
          </h1>
          <p className="text-gray-400 text-lg">
            Terima kasih telah melakukan top up. Diamond Anda akan segera diproses ke dalam akun Anda setelah konfirmasi pembayaran selesai.
          </p>
        </div>

        <div className="pt-6 border-t border-white/10">
          <Link href="/store">
            <button className="w-full py-3 px-6 bg-white hover:bg-gray-200 text-black font-bold rounded-full transition-all duration-300 transform hover:scale-105">
              Kembali ke Toko
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
