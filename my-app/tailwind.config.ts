import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      backgroundImage: {
        topography: 'url("/topography.svg")',
        'topography-dark': 'url("/topography_dark.svg")',
      },
      colors: {
        'primary-dark': '#323b4c',
        'primary-light': '#cbd5e1',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        exit: {
          from: { opacity: '1' },
          to: { opacity: '0', transform: 'scale3d(0.3,0.3,0.3)' },
        },
        'exit-reverse': {
          from: { opacity: '0', transform: 'scale3d(0.3,0.3,0.3)' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        exit: 'exit 0.2s ease-in-out',
        'exit-reverse': 'exit-reverse 0.2s ease-in-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
