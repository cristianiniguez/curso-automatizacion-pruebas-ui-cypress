describe('Waiting for elements', () => {
	beforeEach(() => {
		cy.visit('https://www.platzi.com/')
	})

	it('Wait for a defined time', () => {
		cy.wait(5000)
	})

	it('Wait for an element', () => {
		cy.get('.ButtonLogin-cta', { timeout: 6000 })
	})

	it('Wait for an element and make an assertion', () => {
		cy.get('.ButtonLogin-cta', { timeout: 6000 }).should('be.visible')
	})
})

describe.only('Waiting for elements', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('Disabling retry', () => {
		cy.get(':nth-child(1) > :nth-child(1) > .card-body', { timeout: 0 })
	})
})
