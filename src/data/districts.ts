export interface DistrictCoverage {
  id: string;
  name: string;
  pinCodes: string;
  hubs: string[];
  dealersCount: string;
  wholesaleDeliveryDays: string;
  description: string;
  coordinates: { x: number; y: number }; // Relative SVG percentage positioning
}

export const districtsData: DistrictCoverage[] = [
  {
    id: 'bathinda',
    name: 'Bathinda District',
    pinCodes: '151001 - 151509',
    hubs: ['Central Warehouse (Paras Ram Nagar)', 'Model Town', 'G T Road', 'Raman Mandi', 'Talwandi Sabo'],
    dealersCount: '45+ Partnered Retailers',
    wholesaleDeliveryDays: 'Same-Day / Daily Supply',
    description: 'Central distribution hub housing Bansal Enterprises headquarters, main warehouse, and flagship retail showroom.',
    coordinates: { x: 45, y: 55 },
  },
  {
    id: 'mansa',
    name: 'Mansa District',
    pinCodes: '151505 - 151508',
    hubs: ['Mansa Main Market', 'Budhlada', 'Sardulgarh', 'Bhikhi'],
    dealersCount: '28+ Partnered Retailers',
    wholesaleDeliveryDays: 'Daily Express Dispatch',
    description: 'Direct wholesale distribution corridor supplying electronics, cooling appliances, and kitchen ranges.',
    coordinates: { x: 68, y: 65 },
  },
  {
    id: 'muktsar',
    name: 'Sri Muktsar Sahib',
    pinCodes: '152026 - 152032',
    hubs: ['Muktsar City', 'Malout', 'Gidderbaha'],
    dealersCount: '32+ Partnered Retailers',
    wholesaleDeliveryDays: 'Daily Morning Dispatch',
    description: 'Established dealer network serving major appliance retailers across Malout and Sri Muktsar Sahib.',
    coordinates: { x: 30, y: 45 },
  },
  {
    id: 'faridkot',
    name: 'Faridkot District',
    pinCodes: '151203 - 151212',
    hubs: ['Faridkot Main Market', 'Kotkapura', 'Jaitu'],
    dealersCount: '25+ Partnered Retailers',
    wholesaleDeliveryDays: 'Daily Scheduled Route',
    description: 'Comprehensive wholesale reach supplying premium home appliances, ACs, and TV inventory to dealers.',
    coordinates: { x: 38, y: 25 },
  },
];
