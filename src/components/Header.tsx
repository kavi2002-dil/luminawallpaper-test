import { Search, Image as ImageIcon, Music, LayoutGrid, Upload, User, Menu } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import type { ReactNode } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-dark-bg border-b border-white/10">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-8 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center font-bold text-white">
              V
            </div>
            <span className="text-xl font-display font-bold tracking-tight text-white hidden sm:block">
              VISTA
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <a href="#" className="text-white border-b-2 border-brand-primary pb-1">Wallpapers</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Ringtones</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Categories</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Premium</a>
          </nav>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md relative group hidden md:block">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 group-focus-within:text-brand-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Search wallpapers..." 
            className="w-full bg-dark-surface border border-white/10 rounded-full py-2 px-10 text-sm outline-none focus:border-brand-primary transition-all text-gray-200 placeholder:text-gray-600"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Upload
          </button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-brand-primary hover:bg-brand-primary-hover text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-brand-primary/20 transition-all"
          >
            Login
          </motion.button>
          <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-8 h-8 flex items-center justify-center text-gray-300"
          >
              <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-dark-elevated border-b border-white/5 p-4 lg:hidden flex flex-col gap-2 shadow-2xl"
        >
            <NavButton icon={<ImageIcon size={18} />} label="Wallpapers" full active />
            <NavButton icon={<Music size={18} />} label="Ringtones" full />
            <NavButton icon={<LayoutGrid size={18} />} label="Categories" full />
            <div className="h-px bg-white/10 my-2" />
            <button className="bg-brand-blue text-white w-full py-3 rounded-xl font-bold">Upload New</button>
        </motion.div>
      )}
    </header>
  );
}

function NavButton({ icon, label, active = false, full = false }: { icon: ReactNode, label: string, active?: boolean, full?: boolean }) {
  return (
    <button className={`
      flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all font-medium
      ${active ? 'text-brand-blue bg-brand-blue/10' : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'}
      ${full ? 'w-full text-lg justify-start' : ''}
    `}>
      {icon}
      {label}
    </button>
  );
}
