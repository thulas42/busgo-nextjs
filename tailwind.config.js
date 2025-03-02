/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [
    "./src/**/*.{html,ts}",
  ],
  "theme": {
    "extend": {
      colors: {
        'indigo-500': '#6366f1',
        'purple-500': '#a855f7',
        'blue-600': '#2563eb',
      },
    },
    "plugins": []
  }
}