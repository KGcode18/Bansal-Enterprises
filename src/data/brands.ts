export interface PartnerBrand {
  id: string;
  name: string;
  logoText: string;
  categoryTag: string;
  highlight: string;
}

export const partnerBrands: PartnerBrand[] = [
  { id: 'samsung', name: 'Samsung', logoText: 'SAMSUNG', categoryTag: 'TV, Refrigerators, Mobile', highlight: 'Global Electronics Leader' },
  { id: 'lg', name: 'LG Electronics', logoText: 'LG', categoryTag: 'OLED TV, Washers, AC', highlight: 'Authorized Regional Supply' },
  { id: 'ifb', name: 'IFB Appliances', logoText: 'IFB', categoryTag: 'Washing Machines, Microwave', highlight: 'Premium Home Laundry' },
  { id: 'voltas', name: 'Voltas', logoText: 'VOLTAS', categoryTag: 'Air Conditioners & Coolers', highlight: 'Tata Enterprise Cooling' },
  { id: 'blue-star', name: 'Blue Star', logoText: 'BLUE STAR', categoryTag: 'Commercial & Split AC', highlight: 'Precision Cooling Solutions' },
  { id: 'haier', name: 'Haier', logoText: 'Haier', categoryTag: 'Refrigerators & Washers', highlight: 'Smart Home Innovation' },
  { id: 'godrej', name: 'Godrej Appliances', logoText: 'Godrej', categoryTag: 'Refrigerators & Freezers', highlight: 'Trusted Indian Brand' },
  { id: 'panasonic', name: 'Panasonic', logoText: 'Panasonic', categoryTag: 'TV, Microwave & AC', highlight: 'Japanese Engineering' },
  { id: 'crompton', name: 'Crompton', logoText: 'Crompton', categoryTag: 'Fans, Coolers & Geysers', highlight: 'Consumer Electricals' },
  { id: 'havells', name: 'Havells', logoText: 'HAVELLS', categoryTag: 'Small Appliances & Fans', highlight: 'Electrical Standards' },
  { id: 'whirlpool', name: 'Whirlpool', logoText: 'Whirlpool', categoryTag: 'Washers & Refrigerators', highlight: 'Global Home Appliances' },
  { id: 'liebherr', name: 'Liebherr', logoText: 'LIEBHERR', categoryTag: 'Luxury Refrigeration', highlight: 'German Precision Cooling' },
  { id: 'kaff', name: 'KAFF', logoText: 'KAFF', categoryTag: 'Built-in Hobs & Chimneys', highlight: 'Kitchen Appliances' },
  { id: 'symphony', name: 'Symphony', logoText: 'Symphony', categoryTag: 'Desert & Air Coolers', highlight: 'Cooling Innovation' },
];
