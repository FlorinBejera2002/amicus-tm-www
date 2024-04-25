import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  plugins: [],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      },
      fontFamily: {
        poppins: ['Poppins', 'Arial', 'sans-serif']
      }
    },
    screens: {
      lg: { max: '1023px' },

      md: { max: '767px' },

      sm: { max: '639px' },

      xl: { max: '1279px' }
    }
  }
}

export default config
