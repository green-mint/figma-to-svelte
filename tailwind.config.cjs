/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{svelte,html,js,ts}'],
	theme: {
		extend: {
			fontFamily: {
				holy: ['Holybuck', 'sans-serif']
			},
			colors: {
				darkprimary: '#2E2923',
				accent: '#E8DFD3',
				surface: '#F1F0EA'
			}
		}
	},
	plugins: []
};
