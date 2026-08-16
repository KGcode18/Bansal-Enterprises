import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bansal Enterprises | Punjab\'s Leading Consumer Electronics Distribution Network',
  description: 'Established in 2004 by Rakesh Bansal. Authorised multi-brand consumer electronics distributor supplying retailers, dealers, and institutional partners across Bathinda, Mansa, Muktsar, & Faridkot.',
  keywords: [
    'Bansal Enterprises',
    'Punjab electronics distributor',
    'Bathinda electronics distributor',
    'Electronics wholesaler Punjab',
    'LG distributor Bathinda',
    'Samsung distributor Punjab',
    'Kenstar distributor',
    'Liebherr distributor',
    'Kaff distributor Bathinda',
    'Voltas distributor Punjab',
    'Electronics channel partner Bathinda',
    'B2B electronics supply Bathinda',
  ],
  authors: [{ name: 'Bansal Enterprises' }],
  creator: 'Bansal Enterprises',
  publisher: 'Bansal Enterprises',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: 'Bansal Enterprises | Punjab\'s Leading Consumer Electronics Distribution Network',
    description: 'Trusted since 2004. Authorised regional distribution network supplying 1000+ retail partners across 4 districts.',
    url: 'https://bansalenterprises.com',
    siteName: 'Bansal Enterprises',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bansal Enterprises | Punjab Electronics Distribution Network',
    description: 'Serving Bathinda, Mansa, Muktsar, & Faridkot since 2004 with authorised multi-brand electronics supply.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'WholesaleStore'],
  'name': 'Bansal Enterprises',
  'founder': 'Rakesh Bansal',
  'foundingDate': '2004',
  'telephone': ['+919988096592', '+919988531761', '+919988064592'],
  'email': 'bathindabe@gmail.com',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Main Road, Opposite Patiala Hospital, Paras Ram Nagar',
    'addressLocality': 'Bathinda',
    'addressRegion': 'Punjab',
    'postalCode': '151001',
    'addressCountry': 'IN',
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 30.2004245,
    'longitude': 74.9351052,
  },
  'areaServed': ['Bathinda', 'Mansa', 'Sri Muktsar Sahib', 'Faridkot'],
  'brand': [
    { '@type': 'Brand', 'name': 'Liebherr' },
    { '@type': 'Brand', 'name': 'Kaff' },
    { '@type': 'Brand', 'name': 'Kenstar' },
    { '@type': 'Brand', 'name': 'Amstrad' },
    { '@type': 'Brand', 'name': 'Tomashi' },
    { '@type': 'Brand', 'name': 'LG' },
    { '@type': 'Brand', 'name': 'Samsung' },
    { '@type': 'Brand', 'name': 'Vivo' },
  ],
  'paymentAccepted': 'B2B Trade Credit, Bank Transfer, Cheque, UPI',
  'priceRange': '₹₹₹',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="bg-navy-900 text-slate-900 antialiased selection:bg-gold-500 selection:text-navy-950">
        {children}
      </body>
    </html>
  );
}
