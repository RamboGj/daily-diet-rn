/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        redDark: '#BF3B44',
        redMid: '#F3BABD',
        redLight: '#F4E6E7',

        greenDark: '#639339',
        greenMid: '#CBE4B4',
        greenLight: '#E5F0DB',

        gray1: '#1B1D1E',
        gray2: '#333638',
        gray3: '#5C6265',
        gray5: '#DDDEDF',
        gray6: '#EFF0F0',
        gray7: '#FAFAFA',
        white: '#FFFFFF',
      },

      fontFamily: {
        nunitoBold: 'Nunito_700Bold',
        nunitoRegular: 'Nunito_400Regular',
      },
    },
  },
  plugins: [],
}
