/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            colors: {
                'olive': '#20231F',
                'beige': '#DBD6CA',
                'grayblue': '#A4BED1',
            },
        },
        plugins: [],
    }
}
