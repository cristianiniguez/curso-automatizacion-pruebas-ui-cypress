describe('Assertions', () => {
	it('Assertion', () => {
		cy.visit('/automation-practice-form')
		cy.url().should('include', 'demoqa.com')

		cy.get('#firstName')
			.should('be.visible')
			.and('have.attr', 'placeholder', 'First Name')
	})

	it('Assertion 2', () => {
		cy.visit('/automation-practice-form')
		cy.get('#firstName').then((element) => {
			expect(element).to.be.visible
			expect(element).to.have.attr('placeholder', 'First Name')
		})
	})

	it('Assertion 3', () => {
		cy.visit('/automation-practice-form')
		cy.get('#firstName').then((element) => {
			assert.equal(element.attr('placeholder'), 'First Name')
		})
	})
})
