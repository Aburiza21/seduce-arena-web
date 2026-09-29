"use client";

import { useState } from "react";
import Image from "next/image";

// Tipe untuk percakapan
type Node = {
  id: number;
  text: string;
  speaker?: string;
  choices?: { text: string; nextId: number; hpChange: number; affectionChange: number }[];
  isEnd?: boolean;
};

const story: Record<number, Node> = {
  1: {
    id: 1,
    text: "Penyakitmu makin parah. Di sudut ruangan, kamu melihat Elara, seorang pewaris kaya yang tampak bosan. Waktumu tidak banyak.",
    choices: [
      { text: "Dekati dan tawarkan segelas wine dengan sopan.", nextId: 2, hpChange: -10, affectionChange: 15 },
      { text: "Goda dia dengan tatapan tajam dan percaya diri.", nextId: 3, hpChange: -15, affectionChange: -10 },
    ],
  },
  2: {
    id: 2,
    speaker: "Elara",
    text: "Hmm, terima kasih. Kebetulan aku butuh teman bicara. Siapa namamu?",
    choices: [
      { text: "Tersenyum penuh arti. 'Anggap saja takdirmu malam ini.'", nextId: 4, hpChange: -10, affectionChange: 20 },
      { text: "Menjawab biasa. 'Aku hanya kebetulan lewat.'", nextId: 5, hpChange: -10, affectionChange: 5 },
    ],
  },
  3: {
    id: 3,
    speaker: "Elara",
    text: "Maaf, aku tidak tertarik berurusan dengan orang aneh sepertimu. Pergilah.",
    isEnd: true,
  },
  4: {
    id: 4,
    speaker: "Elara",
    text: "(Wajahnya sedikit memerah) Kau sangat percaya diri, ya? Baiklah, aku ingin mengenalmu lebih jauh...",
    isEnd: true,
  },
  5: {
    id: 5,
    speaker: "Elara",
    text: "Begitu ya. Kalau begitu, silakan lanjutkan jalanmu. Sampai jumpa.",
    isEnd: true,
  },
};

export default function Simulasi() {
  const [currentNode, setCurrentNode] = useState<number>(1);
  const [hp, setHp] = useState<number>(50); // Start HP
  const [affection, setAffection] = useState<number>(0);

  const handleChoice = (nextId: number, hpChange: number, affectionChange: number) => {
    setHp((prev) => Math.max(0, prev + hpChange));
    setAffection((prev) => prev + affectionChange);
    setCurrentNode(nextId);
  };

  const resetGame = () => {
    setCurrentNode(1);
    setHp(50);
    setAffection(0);
  };

  const node = story[currentNode];

  return (
    <section id="simulasi" className="w-full py-24 bg-gray-50 text-gray-900 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-gray-900">
            Simulasi <span className="text-pink-600">Mini-Game</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Coba cuplikan gameplay Seduce Arena. Setiap pilihan menguras waktu (HP). Dapatkan hati target sebelum waktumu habis!
          </p>
        </div>

        {/* Game UI */}
        <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          
          {/* Character / Visual Area */}
          <div className="md:w-2/5 bg-gradient-to-b from-pink-50 to-white p-8 flex flex-col items-center justify-center relative border-b md:border-b-0 md:border-r border-pink-100">
             <div className="w-32 h-32 bg-pink-200 rounded-full flex items-center justify-center mb-6 shadow-inner relative overflow-hidden border-4 border-white">
                <svg className="w-16 h-16 text-pink-400 mt-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
             </div>
             <h3 className="text-2xl font-bold text-gray-900">Elara</h3>
             <p className="text-pink-600 font-medium text-sm">Target Romansa</p>

             {/* Stats */}
             <div className="w-full mt-8 space-y-5 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <div>
                    <div className="flex justify-between text-sm mb-2 font-bold text-gray-700">
                        <span className="flex items-center gap-1"><span className="text-red-500">♥</span> HP (Waktu)</span>
                        <span>{hp} / 50</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3">
                        <div className="bg-gradient-to-r from-red-400 to-red-500 h-3 rounded-full transition-all duration-500 shadow-sm" style={{ width: `${(hp / 50) * 100}%` }}></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-sm mb-2 font-bold text-gray-700">
                        <span className="flex items-center gap-1"><span className="text-pink-500">✦</span> Afeksi</span>
                        <span>{affection} / 35</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3">
                        <div className="bg-gradient-to-r from-pink-400 to-fuchsia-500 h-3 rounded-full transition-all duration-500 shadow-sm" style={{ width: `${Math.min(100, Math.max(0, (affection / 35) * 100))}%` }}></div>
                    </div>
                </div>
             </div>
          </div>

          {/* Dialogue Area */}
          <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-between">
             
             {hp <= 0 && !node.isEnd ? (
                <div className="flex-grow flex flex-col items-center justify-center text-center">
                    <h2 className="text-4xl font-extrabold mb-4 text-gray-900">Game Over</h2>
                    <p className="text-xl text-red-500 font-medium mb-6">Waktu Anda habis. Penyakit merenggut nyawa Anda.</p>
                    <div className="p-4 bg-red-50 rounded-2xl border border-red-200 shadow-sm inline-block">
                        <p className="text-sm font-bold text-red-700 uppercase tracking-widest mb-2 flex items-center justify-center gap-1"><span>☠️</span> Death Achievement</p>
                        <Image src="/images/achievement2.jpeg" alt="Game Over Achievement" width={280} height={180} className="rounded-xl object-cover shadow-md mx-auto" />
                        <p className="mt-3 text-red-800 font-medium">Korban Waktu</p>
                    </div>
                </div>
             ) : (
                <div className="flex-grow">
                    {node.speaker && (
                        <h4 className="inline-block text-pink-600 font-bold mb-3 uppercase tracking-wider text-xs bg-pink-50 px-3 py-1 rounded-full border border-pink-100">{node.speaker}</h4>
                    )}
                    <p className="text-2xl text-gray-800 leading-relaxed min-h-[140px] font-medium">
                        "{node.text}"
                    </p>
                </div>
             )}

             <div className="mt-8 space-y-3">
                {hp > 0 && !node.isEnd ? (
                    node.choices?.map((choice, i) => (
                        <button
                            key={i}
                            onClick={() => handleChoice(choice.nextId, choice.hpChange, choice.affectionChange)}
                            className="w-full text-left p-5 rounded-2xl border border-gray-200 hover:border-pink-500 hover:bg-pink-50 hover:shadow-md transition-all duration-300 group flex justify-between items-center"
                        >
                            <span className="text-gray-700 group-hover:text-pink-800 font-medium text-lg pr-4">{choice.text}</span>
                            <span className="text-xs font-bold text-gray-400 group-hover:text-pink-500 flex flex-col items-end whitespace-nowrap bg-white px-3 py-1 rounded-full border border-gray-100 group-hover:border-pink-200">
                                <span>{choice.hpChange} HP</span>
                            </span>
                        </button>
                    ))
                ) : (
                    <div className="text-center pt-8 border-t border-gray-100 flex flex-col items-center">
                        {hp > 0 && affection >= 30 ? (
                            <div className="mb-8">
                                <p className="text-green-500 font-bold text-2xl mb-4">Sukses! Anda berhasil bertahan hidup!</p>
                                <div className="p-4 bg-green-50 rounded-2xl border border-green-200 shadow-sm inline-block">
                                    <p className="text-sm font-bold text-green-700 uppercase tracking-widest mb-2 flex items-center justify-center gap-1"><span>🏆</span> Achievement Unlocked</p>
                                    <Image src="/images/achievement1.jpeg" alt="Success Achievement" width={280} height={180} className="rounded-xl object-cover shadow-md mx-auto" />
                                    <p className="mt-3 text-green-800 font-medium">Sang Penakluk Hati</p>
                                </div>
                            </div>
                        ) : hp > 0 ? (
                            <div className="mb-8">
                                <p className="text-red-500 font-bold text-2xl mb-4">Gagal. Target kehilangan minat.</p>
                                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm inline-block opacity-90">
                                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 flex items-center justify-center gap-1"><span>🔒</span> Bad Ending</p>
                                    <Image src="/images/achievement2.jpeg" alt="Failed Achievement" width={280} height={180} className="rounded-xl object-cover shadow-sm mx-auto grayscale" />
                                    <p className="mt-3 text-gray-600 font-medium">Penolakan Dingin</p>
                                </div>
                            </div>
                        ) : null}
                        
                        <button onClick={resetGame} className="px-8 py-3 bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white rounded-full font-bold hover:scale-105 transition-all shadow-lg hover:shadow-pink-500/30">
                            Mulai Ulang Simulasi
                        </button>
                    </div>
                )}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
