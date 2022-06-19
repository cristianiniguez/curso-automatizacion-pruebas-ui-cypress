describe('Interacting with the elements', () => {
	let text

	it('Click', () => {
		cy.visit('/buttons')

		cy.get('button').eq(3).click()

		cy.get('#dynamicClickMessage')
			.should('be.visible')
			.and('contain', 'You have done a dynamic click')
	})

	it('Double Click', () => {
		cy.visit('/buttons')

		cy.get('#doubleClickBtn').dblclick()

		cy.get('#doubleClickMessage')
			.should('be.visible')
			.and('contain', 'You have done a double click')
	})

	it('Right Click', () => {
		cy.visit('/buttons')

		cy.get('#rightClickBtn').rightclick()
		cy.get('#rightClickMessage')
			.should('be.visible')
			.and('contain', 'You have done a right click')
	})

	it('Force Click', () => {
		cy.visit('/dynamic-properties')

		cy.get('#enableAfter').click({ force: true, timeout: 0 })
	})

	it('Click by position', () => {
		cy.visit('/buttons')

		cy.get('button').eq(3).parent().parent().click('topRight')
		cy.get('button').eq(3).parent().parent().click('bottomLeft')
		cy.get('button').eq(3).parent().parent().click(5, 60)
	})

	it('Input type text', () => {
		cy.visit('/automation-practice-form')

		cy.get('#firstName').type('Someone')
		cy.get('#lastName').type('Else')

		cy.get('#firstName').type('{selectAll}{backSpace}')
		cy.get('#firstName').type('Anyone')
		cy.get('#firstName').clear()
	})

	it('Checkboxes y radio buttons', () => {
		cy.visit('/automation-practice-form')

		cy.get('label[for="gender-radio-1"]').click()

		cy.get('label[for="hobbies-checkbox-1"]').click()
	})

	it('Extracting information', function () {
		cy.visit('/automation-practice-form')

		cy.get('#firstName').as('firstName')
		cy.get('@firstName').type('Someone')

		cy.get('@firstName').then(($firstName) => {
			text = $firstName.val()
			expect($firstName.val()).to.equal('Someone')
		})

		cy.get('@firstName').invoke('val').should('equal', 'Someone')
		cy.get('@firstName').invoke('val').as('globalFirstName')
	})

	it('Sharing information', function () {
		cy.visit('/automation-practice-form')

		cy.get('#lastName').as('lastName')
		cy.get('@lastName').type(text)

		cy.get('#firstName').type(this.globalFirstName)
	})

	it('Interacting with dropdown', () => {
		cy.visit('https://itera-qa.azurewebsites.net/home/automation')

		cy.get('.custom-select').select(10)
		cy.get('.custom-select').select('3').should('have.value', '3')
		cy.get('.custom-select').select('Greece').should('have.value', '4')
	})

	it('Interacting with dynamic dropdown', () => {
		cy.visit('https://react-select.com/home')

		cy.get('.basic-single .select__input').type('R')
		cy.get('.basic-single .select__option').each(($el) => {
			if ($el.text() === 'Red') $el.click()
		})
	})

	it('Interacting with tables', () => {
		cy.visit('https://www.w3schools.com/html/html_tables.asp')

		cy.get('#customers')
			.find('th')
			.each(($el) => {
				cy.log($el.text())
			})

		cy.get('#customers')
			.find('th')
			.first()
			.invoke('text')
			.should('equal', 'Company')

		cy.get('#customers')
			.find('th')
			.last()
			.invoke('text')
			.should('equal', 'Country')

		cy.get('#customers')
			.find('th')
			.eq(1)
			.invoke('text')
			.should('equal', 'Contact')

		cy.get('#customers').find('tr').should('have.length', 7)

		cy.get('#customers')
			.find('tr')
			.eq(1)
			.find('td')
			.eq(1)
			.invoke('text')
			.should('equal', 'Maria Anders')
	})

	it('Interacting with date pickers', function () {
		cy.visit('https://material.angular.io/components/datepicker/overview')

		cy.get('datepicker-overview-example').find('input').type('11/03/2022')

		cy.get('datepicker-overview-example').find('svg').click()
	})

	it('Interacting with modals', function () {
		cy.visit('/modal-dialogs')

		cy.get('#showSmallModal').click()
		cy.get('#closeSmallModal').click()
	})

	it('Interacting with popups', function () {
		cy.visit('/alerts')

		const stub = cy.stub()
		cy.on('window:confirm', stub)

		cy.get('#confirmButton')
			.click()
			.then(() => {
				expect(stub.getCall(0)).to.be.calledWith(
					'Do you confirm action?'
				)
			})

		cy.on('window:confirm', (confirm) => {
			expect(confirm).to.equal('Do you confirm action?')
			return false
		})

		cy.contains('You selected Cancel').should('exist')
	})

	it.only('Interacting with tooltips', () => {
		cy.visit('/tool-tips')

		cy.get('#toolTipButton').trigger('mouseover')
		cy.contains('You hovered over the Button').should('exist')

		cy.get('#toolTipButton').trigger('mouseout')
		cy.contains('You hovered over the Button').should('not.exist')
	})
})
