///<reference types="Cypress"/>

describe('The children tab search input functionality', () => {
    const hotels_tab = '.hotels'
    const children_tab = '[name="Filter.ChildrenNum"]'
    const search_button = '[type="submit"]'
    const destination_tab = '#Filter_DestinationId'
    const childrens_age = '[name="Filter.ChildrensAge[1]"]'
    const invalid_error = '.field-validation-error'

    beforeEach(() => {
        cy.visit('https://www.accesstravel.com/en-US/Home/Index')
        cy.get(hotels_tab).click()
        cy.get(destination_tab).select('Tel Aviv', { force: true })
    })

    it('verify elements of children tab', () => {
        cy.get(children_tab).should('be.visible')
        cy.get(children_tab).clear().type('4').click()
        cy.get(search_button).click()
        cy.get(childrens_age).should('be.visible')
    })

    it('verify not valid number of children tab', () => {
        cy.get(children_tab).should('be.visible')
        cy.get(children_tab).clear().type('7').click()
        cy.get(search_button).click()
        cy.get(childrens_age).should('not.exist')
    })

    it('verify not valid number of children tab', () => {
        cy.get(children_tab).should('be.visible')
        cy.get(children_tab).clear().type('-1').click()
        cy.get(search_button).click()
        cy.get(childrens_age).should('not.exist')
        cy.get(invalid_error).contains('Invalid number')
    })



})
