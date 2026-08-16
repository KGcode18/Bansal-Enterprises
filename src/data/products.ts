export interface ProductItem {
  id: string;
  name: string;
  category: string;
  brand: string;
  type: 'Wholesale & Retail' | 'Wholesale Exclusive' | 'Retail Exclusive';
  highlight: string;
  specifications: string[];
  image: string;
  priceEstimate?: number;
  popular?: boolean;
}

export const productCategories = [
  'All Products',
  'LED & Smart TVs',
  'Refrigerators & Freezers',
  'Air Conditioners',
  'Washing Machines',
  'Kitchen Appliances',
  'Chimneys & Built-ins',
  'Air Coolers & Geysers',
  'Mobile Phones & Accessories',
] as const;

export type CategoryType = typeof productCategories[number];

export const productsData: ProductItem[] = [
  // TVs
  {
    id: 'lg-oled-g3',
    name: 'LG 65" OLED EVO G3 4K Cinema Display',
    category: 'LED & Smart TVs',
    brand: 'LG',
    type: 'Retail Exclusive',
    highlight: 'Self-lit OLED pixels with Brightness Booster Max & 120Hz Gaming Refresh Rate.',
    specifications: ['65-inch 4K UHD OLED', 'α9 AI Processor Gen6', 'Dolby Vision IQ & Atmos', '4x HDMI 2.1 Ports'],
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1000&q=80',
    priceEstimate: 189990,
    popular: true,
  },
  {
    id: 'samsung-neo-qled-75',
    name: 'Samsung 75" Neo QLED 8K Quantum Matrix',
    category: 'LED & Smart TVs',
    brand: 'Samsung',
    type: 'Retail Exclusive',
    highlight: 'Quantum Mini LED backlighting with Neural Quantum Processor 8K.',
    specifications: ['75-inch 8K Neo QLED', 'Infinity Screen Zero-Bezel', 'Dolby Atmos 90W Sound', 'Motion Xcelerator Turbo+'],
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1000&q=80',
    priceEstimate: 299990,
    popular: true,
  },
  {
    id: 'amstrad-gaming-tv-55',
    name: 'Amstrad 55" Mini-LED Gaming 144Hz Smart TV',
    category: 'LED & Smart TVs',
    brand: 'Amstrad',
    type: 'Wholesale & Retail',
    highlight: 'Ultra-low latency gaming engine with Google TV ecosystem and MEMC technology.',
    specifications: ['55-inch Mini-LED 4K', '144Hz VRR & ALLM Mode', 'Hands-free Voice Search', 'HDR10+ & Dolby Atmos'],
    image: 'https://images.unsplash.com/photo-1577979749830-f1d742b96791?auto=format&fit=crop&w=1000&q=80',
    priceEstimate: 54990,
    popular: true,
  },

  // Refrigerators
  {
    id: 'liebherr-biofresh-french',
    name: 'Liebherr 645L Monolith BioFresh French Door Refrigerator',
    category: 'Refrigerators & Freezers',
    brand: 'Liebherr',
    type: 'Wholesale Exclusive',
    highlight: 'German precision cooling with dual compressors and zero-degree BioFresh zones.',
    specifications: ['645 Litres Capacity', 'BioFresh-Plus Preservation', 'DuoCooling No-Frost System', 'Stainless Steel Interior'],
    image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=1000&q=80',
    priceEstimate: 275000,
    popular: true,
  },
  {
    id: 'samsung-bespoke-instaview',
    name: 'Samsung Bespoke 670L Side-by-Side Inverter Refrigerator',
    category: 'Refrigerators & Freezers',
    brand: 'Samsung',
    type: 'Retail Exclusive',
    highlight: 'Customizable glass panel finishes with Beverage Center & Dual Auto Ice Maker.',
    specifications: ['670 Litres Net Capacity', 'Twin Cooling Plus Technology', 'AI Energy Saver Mode', 'Digital Inverter Compressor'],
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=1000&q=80',
    priceEstimate: 145000,
  },
  {
    id: 'tomashi-deep-freezer-400',
    name: 'Tomashi 400L Commercial Hard Top Deep Freezer',
    category: 'Refrigerators & Freezers',
    brand: 'Tomashi',
    type: 'Wholesale & Retail',
    highlight: 'Heavy-duty copper coil cooling engineered for commercial dairy and frozen storage in high ambient climates.',
    specifications: ['400 Litres Volume', 'High-Density PUF Insulation', 'Heavy-Duty Lockable Lid', 'Fast Freezing Operation'],
    image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=1000&q=80',
    priceEstimate: 28500,
  },

  // ACs
  {
    id: 'amstrad-heavy-duty-2tr',
    name: 'Amstrad 2.0 Ton 5-Star Heavy Duty Heavy Ambient Inverter AC',
    category: 'Air Conditioners',
    brand: 'Amstrad',
    type: 'Wholesale & Retail',
    highlight: 'Operates efficiently at extreme temperatures up to 60°C with 100% inner-grooved copper tubing.',
    specifications: ['2.0 Ton Cooling Capacity', '5-Star BEE Energy Rating', 'Heavy Ambient Cooling (60°C)', 'PM 2.5 Air Filtration Filter'],
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80',
    priceEstimate: 48990,
    popular: true,
  },
  {
    id: 'lg-dual-inverter-1.5',
    name: 'LG 1.5 Ton 5-Star AI Dual Inverter Split Air Conditioner',
    category: 'Air Conditioners',
    brand: 'LG',
    type: 'Retail Exclusive',
    highlight: '6-in-1 convertible cooling with VirusSafe UVnano fan sterilization technology.',
    specifications: ['1.5 Ton Inverter', '5-Star Rated', '4-Way Auto Air Swing', 'Ocean Black Protection Fin'],
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80',
    priceEstimate: 44990,
  },

  // Washing Machines
  {
    id: 'lg-ai-dd-wash-10kg',
    name: 'LG 10kg AI DD Front Load Washing Machine with Steam',
    category: 'Washing Machines',
    brand: 'LG',
    type: 'Retail Exclusive',
    highlight: 'AI direct drive motor calculates fabric weight and softness to deliver custom drum motions.',
    specifications: ['10 kg Washing Capacity', '1400 RPM Spin Speed', 'Steam Allergiene Cycle', 'ThinQ Wi-Fi Smart Control'],
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1000&q=80',
    priceEstimate: 42990,
  },
  {
    id: 'tomashi-semi-auto-8.5',
    name: 'Tomashi 8.5kg Semi-Automatic Toughened Glass Top Washer',
    category: 'Washing Machines',
    brand: 'Tomashi',
    type: 'Wholesale & Retail',
    highlight: 'Rust-proof plastic body with heavy-duty air dry turbo spinner and powerful pulsator.',
    specifications: ['8.5 kg Wash Capacity', 'Active Soak Wash Mode', 'Toughened Glass Lids', 'High-Torque Motor'],
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=1000&q=80',
    priceEstimate: 11990,
  },

  // Chimneys & Built-ins
  {
    id: 'kaff-auto-clean-chimney-90',
    name: 'Kaff 90cm DVL Filterless Auto-Clean Curved Glass Chimney',
    category: 'Chimneys & Built-ins',
    brand: 'Kaff',
    type: 'Wholesale Exclusive',
    highlight: '1450 m³/h suction power with thermal auto-clean, gesture motion controls, and LED lighting.',
    specifications: ['90 cm Width', '1450 m³/h Suction', 'Baffleless Filter Technology', 'Touch & Wave Motion Control'],
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
    priceEstimate: 24990,
    popular: true,
  },
  {
    id: 'kaff-brass-burner-hob-4',
    name: 'Kaff 4-Burner Heavy Brass Built-in Glass Hob',
    category: 'Chimneys & Built-ins',
    brand: 'Kaff',
    type: 'Wholesale Exclusive',
    highlight: '8mm bevelled toughened black glass with flame failure safety device and auto-ignition.',
    specifications: ['4 Brass Burners', 'Flame Failure Device (FFD)', 'Cast Iron Pan Supports', '8mm Bevelled Glass'],
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
    priceEstimate: 19990,
  },

  // Kitchen & Small Appliances
  {
    id: 'kaff-built-in-oven-70l',
    name: 'Kaff 70L Built-in Digital Convection Oven',
    category: 'Kitchen Appliances',
    brand: 'Kaff',
    type: 'Wholesale Exclusive',
    highlight: 'Multi-function baking, roasting, and grilling with triple-glazed cool touch glass door.',
    specifications: ['70 Litres Capacity', '10 Cooking Functions', 'Rotisserie & Grill', 'Soft-closing Glass Door'],
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
    priceEstimate: 36990,
  },
  {
    id: 'tomashi-digital-air-fryer-6l',
    name: 'Tomashi 6L Digital Rapid Air Fryer with 8 Presets',
    category: 'Kitchen Appliances',
    brand: 'Tomashi',
    type: 'Wholesale & Retail',
    highlight: '360° high-speed air circulation requiring up to 90% less oil for crispy, healthy frying.',
    specifications: ['6 Litres Non-stick Basket', '1700W Power', 'Digital Touchscreen Panel', '8 Auto Cooking Presets'],
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=1000&q=80',
    priceEstimate: 4990,
  },

  // Coolers & Geysers
  {
    id: 'kenstar-glamour-air-cooler-60',
    name: 'Kenstar Glamour 60L Desert Honeycomb Air Cooler',
    category: 'Air Coolers & Geysers',
    brand: 'Kenstar',
    type: 'Wholesale Exclusive',
    highlight: 'Ultra-cool heavy blowers with thick honeycomb pads for maximum throw across large halls.',
    specifications: ['60 Litres Tank Capacity', '45 Feet Air Throw', '3-Speed Blower', 'Inverter Compatible'],
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80',
    priceEstimate: 9990,
    popular: true,
  },
  {
    id: 'kenstar-digital-storage-geyser-25',
    name: 'Kenstar 25L Digital Storage Water Heater / Geyser',
    category: 'Air Coolers & Geysers',
    brand: 'Kenstar',
    type: 'Wholesale Exclusive',
    highlight: 'Glass-lined inner tank withstands up to 8 bar pressure suitable for high-rise buildings.',
    specifications: ['25 Litres Capacity', '8 Bar Pressure Rating', '5-Star BEE Efficiency', 'Heavy Anode Rod Protection'],
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=1000&q=80',
    priceEstimate: 8490,
  },

  // Mobiles & Accessories
  {
    id: 'samsung-galaxy-s24-ultra',
    name: 'Samsung Galaxy S24 Ultra 5G (Titanium Gray)',
    category: 'Mobile Phones & Accessories',
    brand: 'Samsung',
    type: 'Retail Exclusive',
    highlight: 'Galaxy AI suite with 200MP camera, built-in S-Pen, and Snapdragon 8 Gen 3 for Galaxy.',
    specifications: ['200MP Quad Camera', 'Snapdragon 8 Gen 3', '6.8" QHD+ Dynamic AMOLED 2X', '5000 mAh Battery'],
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1000&q=80',
    priceEstimate: 129999,
    popular: true,
  },
  {
    id: 'vivo-v30-pro-5g',
    name: 'Vivo V30 Pro 5G with Zeiss Professional Portrait Optics',
    category: 'Mobile Phones & Accessories',
    brand: 'Vivo',
    type: 'Retail Exclusive',
    highlight: 'Co-engineered with ZEISS, Aura Light Portrait, and ultra-slim 3D curved display.',
    specifications: ['50MP ZEISS Triple Camera', 'Dimensity 8200 Chipset', '80W FlashCharge', '1.5K 120Hz Curved AMOLED'],
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1000&q=80',
    priceEstimate: 41999,
  },
];
