import { Download, Heart, Share2, MoreVertical } from 'lucide-react';
import { motion } from 'motion/react';
import { Wallpaper } from '../types';

interface WallpaperCardProps {
  wallpaper: Wallpaper;
}

export function WallpaperCard({ wallpaper }: WallpaperCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative rounded-2xl overflow-hidden bg-dark-surface border border-white/5 cursor-pointer shadow-xl ring-1 ring-white/5"
    >
      {/* Image Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
      
      {/* Image */}
      <img 
        src={wallpaper.url} 
        alt={wallpaper.title}
        referrerPolicy="no-referrer"
        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 p-4 flex flex-col justify-end">
        <div className="flex justify-between items-center translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{wallpaper.category}</span>
            <span className="text-sm font-semibold uppercase tracking-wider text-white">{wallpaper.title}</span>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-brand-primary text-white p-2.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <Download size={16} />
          </motion.button>
        </div>
      </div>

      {/* Badge */}
      <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white border border-white/10 uppercase tracking-widest">
          4K
      </div>
    </motion.div>
  );
}

import { MOCK_WALLPAPERS, CATEGORIES } from '../types';
import { useState } from 'react';

export default function WallpaperGrid() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredWallpapers = activeCategory === 'All' 
    ? MOCK_WALLPAPERS 
    : MOCK_WALLPAPERS.filter(w => w.category === activeCategory);

  return (
    <div className="py-8">
      {/* Category Filter */}
      <div className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar border-b border-white/5 mb-8">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mr-2 shrink-0">Popular</span>
        <div className="flex items-center gap-2">
          <CategoryButton 
            label="All" 
            active={activeCategory === 'All'} 
            onClick={() => setActiveCategory('All')} 
          />
          {CATEGORIES.map(cat => (
            <div key={cat}>
              <CategoryButton 
                label={cat} 
                active={activeCategory === cat} 
                onClick={() => setActiveCategory(cat)} 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Feed Title */}
      <div className="flex items-center justify-between mb-8 px-2">
        <h2 className="text-xl font-display font-bold text-white tracking-tight">
            Discover <span className="text-brand-primary">Assets</span>
        </h2>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
            Sort: <span className="text-brand-primary cursor-pointer">Trending</span>
        </div>
      </div>

      {/* Grid */}
      <div className="wallpaper-grid">
        {filteredWallpapers.map((wallpaper, idx) => (
          <div key={wallpaper.id + idx} className="wallpaper-item">
            <WallpaperCard wallpaper={wallpaper} />
          </div>
        ))}
        {/* Repeating for demo density */}
        {filteredWallpapers.map((wallpaper, idx) => (
          <div key={wallpaper.id + '-rep-' + idx} className="wallpaper-item">
            <WallpaperCard wallpaper={wallpaper} />
          </div>
        ))}
      </div>

      {/* Loading Placeholder */}
      <div className="mt-12 flex justify-center">
        <button className="px-8 py-3 rounded-2xl bg-dark-elevated border border-white/5 text-gray-400 hover:text-white hover:border-white/10 transition-all font-semibold">
            Load More Assets
        </button>
      </div>
    </div>
  );
}

function CategoryButton({ label, active, onClick }: { label: string, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`
        px-4 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap
        ${active 
          ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20' 
          : 'bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white'}
      `}
    >
      {label}
    </button>
  );
}
