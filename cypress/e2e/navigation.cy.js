describe('Navigation', () => {
	it('Visit to our first page', () => {
		cy.visit('https://www.platzi.com')
	})

	it('Reload the page', () => {
		cy.reload()
	})

	it('Reload the page forcefully', () => {
		cy.visit('https://www.google.com')
		cy.reload(true)
	})

	it('Navigate back', () => {
		cy.visit('https://www.google.com')
		cy.visit('https://www.google.com/search?q=platzi')
		cy.go(-1)
	})

	it.only('Navigate forward', () => {
		cy.visit('https://www.google.com')
		cy.visit('https://www.google.com/search?q=platzi')
		cy.go('back')
		cy.go(1)
	})
})
