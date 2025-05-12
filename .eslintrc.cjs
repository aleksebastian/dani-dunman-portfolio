module.exports = {
	root: true,
	extends: ['eslint:recommended', 'plugin:svelte/recommended', 'prettier'],
	parser: 'svelte-eslint-parser',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		parser: {
			ts: '@typescript-eslint/parser',
			js: 'espree'
		}
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parserOptions: {
				parser: {
					ts: '@typescript-eslint/parser',
					js: 'espree'
				}
			}
		}
	]
};
