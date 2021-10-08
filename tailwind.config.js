module.exports = {
  purge: ['./**/*.html','./**/*.js',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['"Red Hat Display"', 'sans-serif']
    },
    colors: {
      primary:{
        Paleblue: 'hsl(225, 100%, 94%)',
        Brightblue: 'hsl(245, 75%, 52%)',
        white: 'hsl(100, 100%, 100%)',
      },
      neutral: {
        Verypaleblue: 'hsl(225, 100%, 98%)',
        Desaturatedblue: 'hsl(224, 23%, 55%)',
        Darkblue: 'hsl(223, 47%, 23%)'
      }
    },
    extend: {
      backgroundImage: {
        'mobile-bg': "url('/images/pattern-background-mobile.svg')",
        'desktop-bg': "url('/images/pattern-background-desktop.svg')",
      }, 
      screens: {
        'sm': {'max': '767px'},
        // => @media (max-width: 639px) { ... }
      },
      minWidth: {
        'container': '400px',
      },
      inset: {
        '-left-sm': '-5%',
        '-left-md': '-13%',
       },
      boxShadow: {
        pay: '-4px 23px 23px hsl(225, 100%, 94%)',
      } 
     },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
