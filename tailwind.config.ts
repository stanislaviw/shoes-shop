import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'sans': ['Montserrat', "sans-serif"],
        'serif': ['Poppins', "serif"],
      },
      fontSize: {
        sm: '25px',
        base: '30px',
        xl: '35px',
        '2xl': '40px',
        '3xl': '45px',
        '4xl': '80px',
        '5xl': '100px',
      },
      colors: {
        'light-black': '#040404',
      },
    },
  },
  plugins: [],
}
export default config
