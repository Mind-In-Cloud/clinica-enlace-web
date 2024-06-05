/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
// import '@fontsource/poppins'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
		},
	},
	plugins: [],
}
