const defaultConfig = require('tailwindcss/defaultConfig');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				md: '824px',
			},
			colors: {
				base: '#e5e9f0',
				borderColor: '#1E2D3D',
				bgColor: '#011627',
				textInactive: '#607B96',
				textActive: '#E5E9F0',
				borderActive: '#FEA55F',
				primary: '#43D9AD',
				secondary: '#E99287',
				tertiary: '#4D5BCE',
				dark: '#011221',
			},
			backgroundImage: {
				'custom-gradient': 'linear-gradient(150deg, rgba(23, 85, 83, 0.70) 1.7%, rgba(67, 217, 173, 0.09) 81.82%)',
			},
			gridTemplateColumns: {
				20: 'repeat(30, minmax(0, 10px))',
			},
			gridTemplateRows: {
				20: 'repeat(51, minmax(0, 10px))',
			},
		},
		fontFamily: {
			sans: ['Fira Code', ...defaultConfig.theme.fontFamily.sans],
		},
		theme: {},
	},
	plugins: [],
};
