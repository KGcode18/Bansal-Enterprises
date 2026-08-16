export interface GalleryItem {
  id: string;
  title: string;
  category: 'Showroom' | 'Warehouse' | 'Brand Displays' | 'Events';
  image: string;
  caption: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Flagship Retail Showroom Frontage',
    category: 'Showroom',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1200&q=80',
    caption: 'Bansal Enterprises premier showroom on Main Road, opposite Patiala Hospital, Bathinda.',
  },
  {
    id: 'g2',
    title: 'Liebherr & Kaff Luxury Display Zone',
    category: 'Brand Displays',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    caption: 'Dedicated built-in kitchen experience center featuring live Kaff chimneys and Liebherr refrigeration.',
  },
  {
    id: 'g3',
    title: 'LG & Samsung Premium TV Wall',
    category: 'Showroom',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1200&q=80',
    caption: 'Interactive 4K OLED, QNED, and Neo QLED comparison display gallery.',
  },
  {
    id: 'g4',
    title: 'Central Wholesale Logistics Hub',
    category: 'Warehouse',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    caption: 'Spacious central inventory warehouse ensuring rapid dispatch across Bathinda, Mansa, Muktsar, & Faridkot.',
  },
  {
    id: 'g5',
    title: 'Air Conditioner & Heavy Appliances Wing',
    category: 'Showroom',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
    caption: 'Comprehensive display of Amstrad heavy ambient ACs, LG inverters, and Kenstar air coolers.',
  },
  {
    id: 'g6',
    title: 'Annual Retail Dealer Meet & Felicitation',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    caption: 'Celebrating 20 years of strategic partnerships with regional electronics dealers across Punjab.',
  },
];
