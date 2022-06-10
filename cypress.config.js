const { defineConfig } = require('cypress')

module.exports = defineConfig({
	e2e: {
		excludeSpecPattern: [
			'**/1-getting-started/*.js',
			'**/2-advanced-examples/*.js',
		],
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		viewportHeight: 1080,
		viewportWidth: 1920,
	},
})
