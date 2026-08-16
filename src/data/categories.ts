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
    summary: 'Smart LED TVs & Display Systems distributed to authorised retailers across Punjab.',
    image: '/images/categories/televisions.jpg',
    iconName: 'Tv',
    tag: 'Amstrad • Tomashi',
  },
  {
    id: 'refrigerators',
    name: 'Refrigeration Systems',
    summary: 'Luxury German Refrigerators & Cold Storage units distributed to regional dealer networks.',
    image: '/images/categories/lg-refrigerator-v2.jpg',
    iconName: 'Refrigerator',
    tag: 'Liebherr • Amstrad',
  },
  {
    id: 'air-conditioners',
    name: 'Air Conditioning Systems',
    summary: 'Heavy-Duty Inverter Split & Window Air Conditioners for commercial & retail channel supply.',
    image: '/images/categories/air-conditioners.jpg',
    iconName: 'Wind',
    tag: 'Amstrad',
  },
  {
    id: 'washing-machines',
    name: 'Laundry Care Appliances',
    summary: 'Fully Automatic & Semi-Automatic Washing Solutions with direct manufacturer warranty backing.',
    image: '/images/categories/washing-machines.jpg',
    iconName: 'Shirt',
    tag: 'Amstrad',
  },
  {
    id: 'built-in-appliances',
    name: 'Built-in Kitchen Appliances',
    summary: 'Integrated Cooking Suites, Built-in Ovens & Microwaves for retail partners and projects.',
    image: '/images/categories/built-in-appliances.jpg',
    iconName: 'ChefHat',
    tag: 'KAFF',
  },
  {
    id: 'chimneys-hobs',
    name: 'Kitchen Chimneys & Hobs',
    summary: 'Filterless Auto-Clean Chimneys & Glass Hob Solutions distributed across 4 districts.',
    image: '/images/categories/chimneys-hobs.jpg',
    iconName: 'Flame',
    tag: 'KAFF',
  },
  {
    id: 'microwave-ovens',
    name: 'Microwave & Cooking Ovens',
    summary: 'Convection, Grill & Digital Microwaves supplied with complete trade inventory support.',
    image: '/images/categories/microwave-ovens.jpg',
    iconName: 'Utensils',
    tag: 'KAFF',
  },
  {
    id: 'air-coolers',
    name: 'Air Cooling Solutions',
    summary: 'High Air Delivery Desert & Commercial Air Coolers distributed for seasonal dealer demand.',
    image: '/images/categories/air-coolers.jpg',
    iconName: 'Fan',
    tag: 'Kenstar • Nova Max',
  },
  {
    id: 'water-heaters',
    name: 'Water Heating Systems',
    summary: 'Digital Storage & Instant High-Pressure Geysers for retail channel distribution.',
    image: '/images/categories/water-heaters.jpg',
    iconName: 'Zap',
    tag: 'Kenstar',
  },
  {
    id: 'small-appliances',
    name: 'Small Home Appliances',
    summary: 'Mixer Grinders, Kettles & Consumer Home Appliances available for volume dealer orders.',
    image: '/images/categories/small-appliances.jpg',
    iconName: 'Home',
    tag: 'Kenstar • Tomashi',
  },
];
