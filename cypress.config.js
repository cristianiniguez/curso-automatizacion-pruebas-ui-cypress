const { defineConfig } = require('cypress')

module.exports = defineConfig({
	e2e: {
		baseUrl: 'https://demoqa.com',
		excludeSpecPattern: [
			'**/1-getting-started/*.js',
			'**/2-advanced-examples/*.js',
		],
		setupNodeEvents(on, config) {
			on('task', {
				log(message) {
					console.log(`Task console.log: ${message}`)
					return null
				},
			})
		},
		viewportHeight: 1080,
		viewportWidth: 1920,
	},
})
