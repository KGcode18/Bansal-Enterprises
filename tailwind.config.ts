import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060D1A',
          900: '#0A1428',
          850: '#0D1B36',
          800: '#122448',
          700: '#183060',
        },
        gold: {
          500: '#D4AF37',
          400: '#E6C687',
          300: '#F3E8CE',
          600: '#B89628',
          100: '#FAF6ED',
        },
        slate: {
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
          500: '#64748B',
          400: '#94A3B8',
          300: '#CBD5E1',
          200: '#E2E8F0',
          100: '#F1F5F9',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F3E8CE 50%, #B89628 100%)',
        'navy-gradient': 'linear-gradient(180deg, #0A1428 0%, #060D1A 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(13,27,54,0.9) 0%, rgba(6,13,26,0.9) 100%)',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.6)',
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
