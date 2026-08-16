export interface Testimonial {
  id: string;
  name: string;
  role: string;
  city: string;
  businessName?: string;
  quote: string;
  rating: number;
  type: 'Wholesale Partner' | 'Retail Customer';
}

export const testimonialsData: Testimonial[] = [
  {
    id: 't1',
    name: 'Gurpreet Singh',
    role: 'Owner, Singh Electronics',
    city: 'Mansa',
    businessName: 'Singh Electronics Store',
    quote: 'We have been procuring Kenstar air coolers and Kaff appliances from Bansal Enterprises since 2012. Their supply reliability, wholesale margins, and quick delivery to Mansa are unmatched.',
    rating: 5,
    type: 'Wholesale Partner',
  },
  {
    id: 't2',
    name: 'Dr. Harvinder Sharma',
    role: 'Senior Physician',
    city: 'Bathinda',
    quote: 'Purchased an LG OLED TV and a Liebherr French door refrigerator for our home. Mr. Rakesh Bansal personally guided us on the ideal models. The installation was seamless and financing via Bajaj Finance took less than 5 minutes.',
    rating: 5,
    type: 'Retail Customer',
  },
  {
    id: 't3',
    name: 'Rajinder Kumar',
    role: 'Proprietor, Modern Home Needs',
    city: 'Sri Muktsar Sahib',
    businessName: 'Modern Home Needs',
    quote: 'Bansal Enterprises is more than a distributor; they are true business partners. Their stock availability during peak summer for Amstrad ACs saved our retail season.',
    rating: 5,
    type: 'Wholesale Partner',
  },
  {
    id: 't4',
    name: 'Jasleen Kaur',
    role: 'Interior Designer',
    city: 'Faridkot',
    quote: 'I recommend Bansal Enterprises to all my residential design clients in Faridkot. Their collection of built-in Kaff hobs and chimneys elevates every modular kitchen project.',
    rating: 5,
    type: 'Retail Customer',
  },
];
