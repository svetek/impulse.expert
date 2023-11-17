import type { Config } from 'tailwindcss'

const config: Config = {
  variants: {
    extend: {
      boxShadow: ['dark']
    },
  },
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        dark: '0 10px 15px -5px #000, 0 3px 5px -1px #000',
        'dark-lg': '0 20px 25px -5px #000, 0 8px 10px -6px #000',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
