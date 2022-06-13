describe('Saving Elements', () => {
	it('Avoid repeats', () => {
		cy.visit('/automation-practice-form')

		cy.get('input[placeholder="First Name"]')
			.parents('form')
			.then((form) => {
				const inputs = form.find('input')
				const divs = form.find('div')
				const labels = form.find('label')

				cy.task('log', `inputs: ${inputs.length}`)
				cy.log('I am the length', inputs.length)

				expect(inputs.length).to.eq(15)
				expect(divs.length).to.eq(70)
				expect(labels.length).to.eq(16)

				cy.wrap(inputs).should('have.length', 15)
			})
	})
})
