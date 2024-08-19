/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'light_sidebar': '#e9e9e9',
        'light_topbar': '#edeced',
        'light_background': '#f7f7f7',
        'logo_green': '#41c984',
        'light_sidebar_icon': '#ffffff',

        'dark_topbar': '#232323',
        'dark_background': '#292a2d',
        'dark_card': '#333437',
        'dark_sidebar': '#1e1e1e',
      },
    },
    screens: {
      'ms': '320px',

      'mm': '375px',

      'ml': '425px',

      'tb': '768px',

      'lp': '1024px',

      'll': '2000px',
    },
  },
  plugins: [],
}

