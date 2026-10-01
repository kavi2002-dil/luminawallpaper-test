export interface Wallpaper {
  id: string;
  url: string;
  title: string;
  category: string;
  uploader: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
}

export const CATEGORIES = ['Abstract', 'Nature', 'Tech', 'Minimal', 'City', 'Space'];

export const MOCK_WALLPAPERS: Wallpaper[] = [
  {
    id: '1',
    url: 'https://picsum.photos/seed/abstract1/800/1200',
    title: 'Neon Vectors',
    category: 'Abstract',
    uploader: 'AlexDesign',
    aspectRatio: 'portrait'
  },
  {
    id: '2',
    url: 'https://picsum.photos/seed/nature1/1200/800',
    title: 'Mountain Mist',
    category: 'Nature',
    uploader: 'NatureLover',
    aspectRatio: 'landscape'
  },
  {
    id: '3',
    url: 'https://picsum.photos/seed/tech1/800/1000',
    title: 'Cyber Circuit',
    category: 'Tech',
    uploader: 'NeonKnight',
    aspectRatio: 'portrait'
  },
  {
    id: '4',
    url: 'https://picsum.photos/seed/city1/800/1400',
    title: 'Tokyo Night',
    category: 'City',
    uploader: 'UrbanExplorer',
    aspectRatio: 'portrait'
  },
  {
    id: '5',
    url: 'https://picsum.photos/seed/space1/1000/1000',
    title: 'Galactic Void',
    category: 'Space',
    uploader: 'AstroCore',
    aspectRatio: 'square'
  },
  {
    id: '6',
    url: 'https://picsum.photos/seed/minimal1/800/1200',
    title: 'Quiet Lines',
    category: 'Minimal',
    uploader: 'ZenMaker',
    aspectRatio: 'portrait'
  },
  {
    id: '7',
    url: 'https://picsum.photos/seed/nature2/800/1300',
    title: 'Emerald Forest',
    category: 'Nature',
    uploader: 'Gaia',
    aspectRatio: 'portrait'
  },
  {
    id: '8',
    url: 'https://picsum.photos/seed/tech2/1400/800',
    title: 'Futuristic Lab',
    category: 'Tech',
    uploader: 'FutureThinker',
    aspectRatio: 'landscape'
  },
  {
    id: '9',
    url: 'https://picsum.photos/seed/city2/800/1100',
    title: 'Rainy Alley',
    category: 'City',
    uploader: 'StreetSnap',
    aspectRatio: 'portrait'
  },
  {
    id: '10',
    url: 'https://picsum.photos/seed/abstract2/800/1400',
    title: 'Liquid Gold',
    category: 'Abstract',
    uploader: 'ArtVibe',
    aspectRatio: 'portrait'
  },
];
