/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: '#f56caa',
                secondary: '#ffffff',
                third: '#89c8d5',
                accent: '#fef3f7'
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'sans-serif'],
            }
        }
    },
    plugins: [],
}
