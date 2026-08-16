export interface FinancePartner {
  id: string;
  name: string;
  logoText: string;
  tagline: string;
  features: string[];
}

export const financePartnersData: FinancePartner[] = [
  {
    id: 'bajaj',
    name: 'Bajaj Finance',
    logoText: 'BAJAJ FINANCE',
    tagline: 'Flexible Consumer EMI Options',
    features: ['Zero Down Payment Schemes', 'Instant On-Counter Approval', 'No Cost EMI Options'],
  },
  {
    id: 'idfc',
    name: 'IDFC First Bank',
    logoText: 'IDFC FIRST BANK',
    tagline: 'Instant In-Store Loan Schemes',
    features: ['Paperless Digital Process', 'Flexible 3 to 24 Month Tenure', 'Minimal Documentation'],
  },
  {
    id: 'pine-labs',
    name: 'Pine Labs',
    logoText: 'PINE LABS',
    tagline: 'Credit & Debit Card Counter EMI',
    features: ['All Major Bank Cards Accepted', 'Instant Counter Cashback', 'Seamless POS Approval'],
  },
  {
    id: 'poonawalla',
    name: 'Poonawalla Fincorp',
    logoText: 'POONAWALLA FINCORP',
    tagline: 'Quick Appliance Financing',
    features: ['High Approval Rate', 'Transparent Low Interest', 'Dedicated Store Desk'],
  },
];

export const trustBadgesData = [
  { title: 'Easy EMI', subtitle: 'Flexible Monthly Instalments' },
  { title: 'Zero Down Payment', subtitle: 'On Select Brand Schemes' },
  { title: 'Instant Approval', subtitle: '3-Minute Counter Process' },
  { title: 'Minimal Documentation', subtitle: 'Aadhaar & PAN Only' },
];
