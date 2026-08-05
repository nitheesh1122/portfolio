/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            // Font families are defined via the Tailwind v4 CSS-first `@theme`
            // block in src/index.css (this JS config's `theme.extend` is not
            // loaded by @tailwindcss/postcss unless referenced with @config).
        },
    },
    plugins: [],
}
