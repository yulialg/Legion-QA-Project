///<reference types="Cypress"/>

describe('The adults tab search input functionality', () => {
    const hotels_tab = '.hotels'
    const adults_tab = '[name="Filter.AdultNum"]'
    const search_button = '[type="submit"]'
    const destination_tab = '#Filter_DestinationId'
    const invalid_error = '.field-validation-error'

    beforeEach(() => {
        cy.visit('https://www.accesstravel.com/en-US/Home/Index')
        cy.get(hotels_tab).click()
        cy.get(destination_tab).select('Tel Aviv', { force: true })
    })
    it('verify not valid number of adults tab', () => {
        cy.get(adults_tab).should('be.visible')
        cy.get(adults_tab).clear().type('-100').click()
        cy.get(search_button).click()
        cy.get(invalid_error).contains('Invalid value')
    })
})