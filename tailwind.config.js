/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  "theme": {
    "extend": {
      colors: {
        'indigo-500': '#6366f1',
        'purple-500': '#a855f7',
        'blue-600': '#2563eb',
      },
    },
  },
  "plugins": []
}