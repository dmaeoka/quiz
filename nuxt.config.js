export default {
	/* this is a static site, no Node.js */
	// mode: 'spa',
	mode: 'universal',

	/* Global headers parts */
	head: {
		// title: '{{title}}',
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
			{ name: 'theme-color', content: '#213e8f' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=4' },
		],
	},

	/* global SASS file */
	css: [
		'@/assets/layout.scss',
		'@/assets/css/fonts.css',
		'animate.css/animate.css'
	],

	/* Progress bar color */
	loading: {
		color: '#4f4fce'
	},

	plugins: [
		'~/plugins/filters.js',
		'~/plugins/lazyload.js',
	],

	purgeCSS: {
		whitelistPatterns: [/svg.*/, /fa.*/, /lnr./]
	},

	/* Build configuration */
	build: {
		extractCSS: false,
		/* Run ESLint on save */
		extend (config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		},
		"html.minify": {
			removeEmptyAttributes: false,
			removeRedundantAttributes: false
		}
	},

	modules: [
		'@nuxtjs/pwa',
		'@nuxtjs/axios'
	],

	markdownit: {
		injected: true,
		preset: 'default',
		breaks: true,
		html: true
	},

	manifest: {
		name: process.env.npm_package_name,
		short_name: "Short name replace",
		description: "Description Replace",
		lang: 'en'
	},

	workbox: {
		runtimeCaching: [{
			urlPattern: '/uploads/.*',
			handler: 'cacheFirst',
			strategyOptions: {
				cacheName: 'image-cache',
				cacheExpiration: {
					maxEntries: 100,
					maxAgeSeconds: 86400
				}
			}
		}]
	},

	buildModules: [
		// Doc: https://github.com/nuxt-community/nuxt-tailwindcss
		'@nuxtjs/tailwindcss'
	],
}
