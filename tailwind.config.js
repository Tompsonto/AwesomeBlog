module.exports = {
    future: {
      // removeDeprecatedGapUtilities: true,
      // purgeLayersByDefault: true,
    },
    purge: [],
    plugins: [
        require('tailwindcss-textshadow')
      ],
    theme: {
       
            minHeight: {
            
             '0': '0',
             '31':'28rem',
             '1/4': '25%',
             '1/2': '50%',
             '3/4': '75%',
             'full': '100%',
            }
          
    },
    variants: {},

  }
  