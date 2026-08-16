import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Bansal Enterprises | Rakesh Bansal | Consumer Electronics Distribution in Punjab",
  description:
    "Bansal Enterprises is an authorised regional distributor of consumer electronics and home appliances, serving retail partners across Punjab.",
  keywords: [
    'Bansal Enterprises',
    'Punjab electronics distributor',
    'Bathinda electronics distributor',
    'Amstrad distributor Bathinda',
    'Tomashi distributor Punjab',
    'Kenstar distributor Bathinda',
    'Liebherr distributor Punjab',
    'KAFF distributor Bathinda',
    'Nova Max air cooler distributor',
    'Electronics channel partner Bathinda',
    'Fazilka electronics distributor',
    'Abohar electronics wholesaler',
    'B2B electronics supply Bathinda',
    'Rakesh Bansal',
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
    description: 'Authorised regional distributor for Amstrad, Tomashi, Kenstar, Liebherr, KAFF, and Nova Max supplying 100+ retail partners across 5 districts.',
    url: 'https://bansal-enterprises.vercel.app',
    siteName: 'Bansal Enterprises',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bansal Enterprises | Punjab Electronics Distribution Network',
    description: 'Serving Bathinda, Mansa, Muktsar, Faridkot, & Fazilka since 2017 with authorised supply of Amstrad, Tomashi, Kenstar, Liebherr, KAFF, & Nova Max.',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "google83e638e69a5d4cbb.html",
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'WholesaleStore'],
  'name': 'Bansal Enterprises',
  'founder': 'Rakesh Bansal',
  'foundingDate': '2017',
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
  'areaServed': ['Bathinda', 'Mansa', 'Sri Muktsar Sahib', 'Faridkot', 'Fazilka'],
  'brand': [
    { '@type': 'Brand', 'name': 'Amstrad' },
    { '@type': 'Brand', 'name': 'Tomashi' },
    { '@type': 'Brand', 'name': 'Kenstar' },
    { '@type': 'Brand', 'name': 'Liebherr' },
    { '@type': 'Brand', 'name': 'KAFF' },
    { '@type': 'Brand', 'name': 'Nova Max' },
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
