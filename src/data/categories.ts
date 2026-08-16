export interface CategoryVisualItem {
  id: string;
  name: string;
  summary: string;
  image: string;
  iconName: string;
  tag: string;
}

export const categoryVisualItems: CategoryVisualItem[] = [
  {
    id: 'televisions',
    name: 'Televisions & Display Solutions',
    summary: 'Premium OLED, QLED & Smart Display Solutions supplied to authorised retailers across Punjab.',
    image: '/images/categories/televisions.jpg',
    iconName: 'Tv',
    tag: 'Samsung • LG • Sony',
  },
  {
    id: 'refrigerators',
    name: 'Refrigeration Systems',
    summary: 'Side-by-Side & Multi-Door Refrigeration units distributed to regional dealer networks.',
    image: '/images/categories/lg-refrigerator-v2.jpg',
    iconName: 'Refrigerator',
    tag: 'Liebherr • LG • Godrej',
  },
  {
    id: 'air-conditioners',
    name: 'Air Conditioning Systems',
    summary: 'Heavy-Duty Inverter Split & Cassette Cooling Systems for commercial & retail channel supply.',
    image: '/images/categories/air-conditioners.jpg',
    iconName: 'Wind',
    tag: 'Voltas • Blue Star • Daikin',
  },
  {
    id: 'washing-machines',
    name: 'Laundry Care Appliances',
    summary: 'AI Front Load & Top Load Washing Solutions with direct manufacturer warranty backing.',
    image: '/images/categories/washing-machines.jpg',
    iconName: 'Shirt',
    tag: 'IFB • LG • Whirlpool',
  },
  {
    id: 'built-in-appliances',
    name: 'Built-in Kitchen Appliances',
    summary: 'Integrated Cooking Suites, Built-in Ovens & Dishwashers for retail partners and institutional projects.',
    image: '/images/categories/built-in-appliances.jpg',
    iconName: 'ChefHat',
    tag: 'KAFF • Bosch • Siemens',
  },
  {
    id: 'chimneys-hobs',
    name: 'Kitchen Chimneys & Hobs',
    summary: 'Filterless Auto-Clean Chimneys & Glass Hob Solutions distributed across 4 districts.',
    image: '/images/categories/chimneys-hobs.jpg',
    iconName: 'Flame',
    tag: 'KAFF • Glen • Faber',
  },
  {
    id: 'microwave-ovens',
    name: 'Microwave & Cooking Ovens',
    summary: 'Convection, Grill & Digital Smart Microwaves supplied with complete trade inventory support.',
    image: '/images/categories/microwave-ovens.jpg',
    iconName: 'Utensils',
    tag: 'Panasonic • IFB • Samsung',
  },
  {
    id: 'air-coolers',
    name: 'Air Cooling Solutions',
    summary: 'High Air Delivery Desert & Honeycomb Coolers distributed for seasonal dealer demand.',
    image: '/images/categories/air-coolers.jpg',
    iconName: 'Fan',
    tag: 'Kenstar • Voltas • Symphony',
  },
  {
    id: 'water-heaters',
    name: 'Water Heating Systems',
    summary: 'Digital Storage & Instant High-Pressure Geysers for retail channel distribution.',
    image: '/images/categories/water-heaters.jpg',
    iconName: 'Zap',
    tag: 'Crompton • Havells • Racold',
  },
  {
    id: 'mobile-phones',
    name: 'Mobile Phones & Mobility',
    summary: 'Flagship 5G Smartphones & Mobility Accessories supplied to authorized retail outlets.',
    image: '/images/categories/mobile-phones.jpg',
    iconName: 'Smartphone',
    tag: 'Samsung • Vivo • Realme',
  },
  {
    id: 'small-appliances',
    name: 'Small Home Appliances',
    summary: 'Mixer Grinders, Air Fryers, Kettles & Food Processors available for volume dealer orders.',
    image: '/images/categories/small-appliances.jpg',
    iconName: 'Home',
    tag: 'Philips • Havells • Bajaj',
  },
];
