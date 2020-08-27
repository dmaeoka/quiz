/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
	prefix: '',
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
		},
		fontFamily: {
			display: ['Museo700', 'serif'],
			body: ['Trebuchet MS','Lucida Grande','Lucida Sans Unicode','Lucida Sans','Tahoma','sans-serif'],
		},
		container: {
			center: true
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: '#000',
			white: '#fff',
			gray: {
				lighter: '#E0E0E0',
				light: '#DADADA',
				default: '#5C5C5C',
			},
			green: {
				light: '#F6FAF4',
				default: '#4BA21C'
			},
			yellow: '#F5D410',
			orange: '#D67C1C',
			pink: '#CF6088',
			purple: '#AE67A2',
			cyan: '#83BEEB',
		}
	},
	variants: {},
	plugins: [
		require("tailwindcss-debug-screens")
	],
}
