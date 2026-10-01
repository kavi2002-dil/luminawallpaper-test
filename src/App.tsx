import Header from './components/Header';
import WallpaperGrid from './components/WallpaperGrid';
import { Search, Sparkles, TrendingUp, History } from 'lucide-react';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <section className="py-12 md:py-16 flex flex-col items-center text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-brand-primary/10 text-brand-primary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 mb-6"
            >
                <Sparkles size={12} />
                Fresh 4K Visuals Added Daily
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-white leading-[1.1] mb-8 max-w-4xl tracking-tight">
                Refined Imagery for <br />
                <span className="bg-gradient-to-r from-brand-primary via-purple-400 to-brand-primary bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
                  Modern Interfaces.
                </span>
            </h1>
            
            {/* Main Search Area */}
            <div className="w-full max-w-2xl relative group mb-8">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-brand-primary transition-colors" />
                <input 
                    type="text" 
                    placeholder="Search for wallpapers..." 
                    className="w-full bg-dark-surface border-2 border-white/5 rounded-full py-4 pl-14 pr-32 outline-none focus:border-brand-primary focus:ring-8 focus:ring-brand-primary/5 transition-all text-gray-100 text-base shadow-2xl placeholder:text-gray-600"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-brand-primary hover:bg-brand-primary-hover text-white px-8 py-2 rounded-full font-bold shadow-lg transition-all active:scale-95">
                    Explore
                </button>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <span className="text-gray-500 font-medium text-xs uppercase tracking-widest">Trending:</span>
                <div className="flex gap-4">
                    <TrendingItem icon={<TrendingUp size={14} />} label="Cyberpunk" />
                    <TrendingItem icon={<History size={14} />} label="Minimal" />
                    <TrendingItem icon={<Sparkles size={14} />} label="Abstract" />
                </div>
            </div>
        </section>

        {/* Masonry Feed */}
        <WallpaperGrid />
      </main>

      {/* Footer */}
      <footer className="px-8 py-4 bg-dark-bg border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 mt-auto">
        <div className="flex gap-6">
          <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">© 2024 VISTA MEDIA</span>
          <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest cursor-pointer hover:text-white transition-colors">Privacy</span>
          <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest cursor-pointer hover:text-white transition-colors">Terms</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">12,402 Wallpapers Online</span>
        </div>
      </footer>
    </div>
  );
}

function TrendingItem({ icon, label }: { icon: ReactNode, label: string }) {
    return (
        <a href="#" className="flex items-center gap-1.5 text-gray-400 hover:text-brand-primary transition-colors cursor-pointer group">
            <span className="text-gray-600 transition-colors group-hover:text-brand-primary">{icon}</span>
            {label}
        </a>
    )
}

