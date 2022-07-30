import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['chart.js']
	},
	build: {
		rollupOptions: {
			// make sure to externalize deps that shouldn't be bundled
			// into your library
			external: ['chart.js/auto/auto.js'],
			output: {
				// Provide global variables to use in the UMD build
				// for externalized deps
				globals: {
					'chart.js/auto/auto.js': 'chart.js/auto/auto.js'
				}
			}
		}
	}
};

export default config;
