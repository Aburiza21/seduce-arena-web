import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/20 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="z-10 text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent drop-shadow-sm">
          Seduce Arena
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light">
          The ultimate competitive gaming experience. Prepare to dominate the arena.
        </p>
        
        <div className="pt-8">
          <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            Join the Waitlist
          </button>
        </div>
      </div>
    </section>
  );
}
