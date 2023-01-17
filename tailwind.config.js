/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '2rem',
      'large': '12px',
    },
    minWidth: {
      '0': '0',
      '4/10': '40%',
      '1/2': '50%',
      '3/4': '75%',
      '9/10': '90%',
      'full': '100%',
     },
  }
}