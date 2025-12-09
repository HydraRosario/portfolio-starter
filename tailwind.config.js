module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#ff0000', // Rojo fundamental
        secondary: '#0044ff', // Azul fundamental
        accent: '#B809C3',
        gradientStart: '#ff0000',
        gradientEnd: '#0044ff',
      },
      backgroundImage: theme => ({
        ...theme('backgroundImage'),
        'red-blue-gradient': 'linear-gradient(90deg, #ff0000 0%, #0044ff 100%)',
      }),
      backgroundImage: {
        site: "url('../sites/portfolio/assets/site-bg.jpg')",
        about: "url('../sites/portfolio/assets/about.png')",
        services: "url('../sites/portfolio/assets/services.png')",
      },
    },
  },
  plugins: [],
};
