export interface FAQItem {
  question: string;
  answer: string;
  category: 'distribution' | 'logistics' | 'general';
}

export const faqsData: FAQItem[] = [
  {
    question: 'How do I become an authorized channel partner with Bansal Enterprises?',
    answer: 'Electronics retailers and dealers operating in Bathinda, Mansa, Muktsar, or Faridkot can apply by submitting the "Partner With Us" form or contacting our channel management team at +91 99880 96592. We verify GST documentation and territorial presence to onboard new retail partners within 48 hours.',
    category: 'distribution',
  },
  {
    question: 'Which global and Indian brands are directly distributed by Bansal Enterprises?',
    answer: 'We hold official regional distribution contracts for leading manufacturers including Samsung, LG Electronics, IFB Appliances, Voltas, Blue Star, Haier, Godrej, Panasonic, Crompton, Havells, Whirlpool, Liebherr, KAFF, and Symphony.',
    category: 'general',
  },
  {
    question: 'What trade credit and inventory fulfilment options are available for dealers?',
    answer: 'We offer structured B2B trade credit terms, high inventory availability, and volume order fulfilment for verified retail partners across Southern Punjab, backed by dedicated account management.',
    category: 'distribution',
  },
  {
    question: 'How does Bansal Enterprises handle regional logistics and delivery?',
    answer: 'Our fleet operates daily scheduled delivery routes across all 4 target districts (Bathinda, Mansa, Sri Muktsar Sahib, and Faridkot), ensuring fast dispatch directly from our central warehousing hub.',
    category: 'logistics',
  },
  {
    question: 'Do all distributed products come with direct manufacturer warranty backing?',
    answer: 'Yes. Every product supplied through Bansal Enterprises carries 100% genuine factory original manufacturer warranty registered directly with the respective brand service network.',
    category: 'general',
  },
];
