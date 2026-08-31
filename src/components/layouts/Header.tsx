import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="w-full px-6 md:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white hover:text-gray-300 transition-colors">
          Seduce<span className="text-red-600">Arena</span>
        </Link>
        
        <nav className="hidden md:flex gap-8">
          <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/store" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Store
          </Link>
          <Link href="/leaderboard" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Leaderboard
          </Link>
          <Link href="/tournaments" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Tournaments
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
          >
            Sign In
          </Link>
          <Link 
            href="/register" 
            className="px-5 py-2.5 text-sm font-semibold bg-white text-black rounded-full hover:bg-gray-200 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          >
            Play Now
          </Link>
        </div>
      </div>
    </header>
  );
}
