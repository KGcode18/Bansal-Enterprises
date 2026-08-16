export interface PartnerBrand {
  id: string;
  name: string;
  logoText: string;
  categoryTag: string;
  highlight: string;
  websiteUrl: string;
}

export const partnerBrands: PartnerBrand[] = [
  {
    id: 'kaff',
    name: 'KAFF',
    logoText: 'KAFF',
    categoryTag: 'Kitchen Chimneys, Built-in Hobs & Ovens',
    highlight: 'Premium Kitchen Appliances',
    websiteUrl: 'https://www.kaff.in',
  },
  {
    id: 'amstrad',
    name: 'Amstrad',
    logoText: 'AMSTRAD',
    categoryTag: 'Air Conditioners, Smart TVs & Washing Machines',
    highlight: 'Next-Gen Consumer Electronics',
    websiteUrl: 'https://amstradworld.com/',
  },
  {
    id: 'tomashi',
    name: 'Tomashi',
    logoText: 'TOMASHI',
    categoryTag: 'Smart LED TVs, Audio Systems & Home Appliances',
    highlight: 'Authorised Regional Distribution',
    websiteUrl: 'https://www.tomashiindia.in/',
  },
  {
    id: 'kenstar',
    name: 'Kenstar',
    logoText: 'KENSTAR',
    categoryTag: 'Air Coolers, Water Heaters & Home Appliances',
    highlight: 'Trusted Home Comfort',
    websiteUrl: 'https://www.kenstar.in',
  },
  {
    id: 'liebherr',
    name: 'Liebherr',
    logoText: 'LIEBHERR',
    categoryTag: 'Luxury German Refrigerators',
    highlight: 'German Precision Cooling',
    websiteUrl: 'https://home.liebherr.com',
  },
  {
    id: 'nova-max',
    name: 'Nova Max',
    logoText: 'NOVA MAX',
    categoryTag: 'Heavy Duty Air Coolers & Air Cooling',
    highlight: 'Heavy Duty Air Cooling',
    websiteUrl: 'https://novamaxindia.com',
  },
];
