describe('Locator Types', () => {
	it('Get by tag name', () => {
		cy.visit('/automation-practice-form')
		cy.get('input')
	})

	it('Get by attribute', () => {
		cy.get('[placeholder="First Name"]')
	})

	it('Get by attribute and tag name', () => {
		cy.get('input[placeholder="First Name"]')
	})

	it('Get by id', () => {
		cy.get('#firstName')
	})

	it('Get by class', () => {
		cy.get('.mr-sm-2.form-control')
	})

	it('Using contains', () => {
		cy.contains('Reading')
		cy.contains('.header-wrapper', 'Widgets')
	})

	it('Using parent', () => {
		cy.get('input[placeholder="First Name"]').parent()
		cy.get('input[placeholder="First Name"]').parents()
	})

	it('Using find', () => {
		cy.get('form').find('label')
	})
})
