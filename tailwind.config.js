/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#373F67',
        secondary: '#5A85EE',
        tertiary: '#719CF7',
        contents: '#9DA1B4',
        contentsSecondary: '#919191',
        negative: '#E11900',
        'bluelight-400': '#8DB8F9',
        'bluegray-100': '#EBECF0',
      },
      fontSize: {
        mySize8: '0.5rem',
        mySize10: '0.625rem',
        mySize60: '3.75rem',
        mySize200: '12.5rem',
      },
      width: {
        mySize18: '4.5rem',
        mySize50: '3.125rem',
        mySize60: '3.75rem',
        mySize103: '6.44rem',
        mySize141: '8.82rem',
        mySize300: '18.75rem',
      },
      spacing: {
        ml6: '0.4rem',
        ml13: '0.8125rem',
        ml18: '1.125rem',
        for4gui: '0.2rem',
        profileDotTop: '3rem',
        profileDotLeft: '4rem',
        profilePencilTop: '3.15rem',
        profilePencilLeft: '4.15rem',
        passionTemWord: '3.1125rem',
        passionTem: '4.35rem',
      },
      height: {
        mySize50: '3.125rem',
        myHeight74: '4.625rem',
        myHeight348: '21.75rem',
        myHeight820: '51.25rem',
      },
      backgroundImage: {
        'icon-search': 'url("/assets/icon-search.svg")',
        'icon-plus': 'url("/assets/icon-plus.svg")',
        'icon-checked': 'url("/assets/icon-checked.svg")',
        'icon-calender': 'url("/assets/icon-calender.svg")',
        'icon-won': 'url("/assets/icon-won.svg")',
      },
      lineHeight: {
        base: '1.6',
      },
    },
  },
  plugins: [],
};
