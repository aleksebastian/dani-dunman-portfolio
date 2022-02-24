import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			optimizeDeps: { include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep'] },
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
		}
	}
};

export default config;
