/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{svelte,html,js,ts}'],
	theme: {
		fontWeight: {
			thin: 100,
			extralight: 200,
			light: 300,
			normal: 400,
			semibold: 500,
			bold: 600,
		},
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
