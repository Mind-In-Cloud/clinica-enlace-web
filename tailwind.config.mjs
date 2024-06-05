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
			colors: {
				blue: '#59CCD9',
				'blue-soft': '#B4E8EE',
				cyan: '#C9EEF2',
				'cyan-soft': '#E6F7F9',
				green: '#4ED999',
				'green-soft': '#AFEED1',
				metal: '#7191AD',
				'metal-soft': '#BFCDDA',
				red : '#D97364',
				'red-soft': '#EEC0B9',
				yellow: '#D9AC4E',
				'yellow-soft': '#EED9AF',
				white: '#F8FAFC',
				neutral : {
					900: '#070A0D',
					800: '#0F151A',
					700: '#1E2A34',
					600: '#2D3E4E',
					400: '#7191AD',
					300: '#A4B9CB',
					200: '#CBD7E1',
				}
			}
		},
	},
	plugins: [],
}
