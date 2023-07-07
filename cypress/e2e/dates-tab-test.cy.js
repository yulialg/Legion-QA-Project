///<reference types="Cypress"/>

describe('The checkin field search input functionality', () => {
    const hotels_tab = '.hotels'
    const checkin_field = '[name="Filter.CheckIn"]'
    const search_button = '[type="submit"]'
    //const destination_tab = '#Filter_DestinationId'
    const invalid_error = '.field-validation-error'

    beforeEach(() => {
        cy.visit('https://www.accesstravel.com/en-US/Home/Index')
        cy.get(hotels_tab).click()
        //cy.get(destination_tab).select('Tel Aviv', { force: true })
        cy.get(checkin_field).type('2023-07-17', { force: true })
    })
    it('verify not valid date of checkin', () => {
        cy.get(checkin_field).should('be.visible')
        //cy.get(checkin_field).type('2023-07-17', { force: true })
        cy.get(checkin_field).clear().type('0000-07-17').click()
        cy.get(search_button).click()
        cy.get(invalid_error).contains("The value '0000-07-17' is not valid for CheckIn")
    })
})