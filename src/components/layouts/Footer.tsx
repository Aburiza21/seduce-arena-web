import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10 py-12">
      <div className="w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
            Seduce<span className="text-red-600">Arena</span>
          </Link>
          <p className="mt-4 text-sm text-gray-400">
            The ultimate competitive gaming experience. Join the arena and prove your worth.
          </p>
        </div>
        
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-semibold mb-2">Explore</h3>
          <Link href="/tournaments" className="text-sm text-gray-400 hover:text-white transition-colors">Tournaments</Link>
          <Link href="/leaderboard" className="text-sm text-gray-400 hover:text-white transition-colors">Leaderboard</Link>
          <Link href="/news" className="text-sm text-gray-400 hover:text-white transition-colors">News</Link>
        </div>
        
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-semibold mb-2">Legal</h3>
          <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
          <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/support" className="text-sm text-gray-400 hover:text-white transition-colors">Support</Link>
        </div>
      </div>
      
      <div className="w-full px-6 md:px-12 mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Seduce Arena. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
