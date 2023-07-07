///<reference types="Cypress"/>

describe('The hotels tab search input functionality', () => {
  const hotels_tab = '.hotels'
  const destination_tab = '#Filter_DestinationId'
  const search_button = '[type="submit"]'
  //const children_field = '[name="Filter.ChildrenNum"]'

  beforeEach(() => {
    cy.visit('https://www.accesstravel.com/en-US/Home/Index')
    cy.get(hotels_tab).click()
    //cy.visit('https://www.accesstravel.com/en-US/Hotel/List')

  })

  it('chooses destination', () => {
    
    cy.get(destination_tab).should('be.visible')
    cy.get(destination_tab).select('Tel Aviv', { force: true })
    cy.get(destination_tab).should('have.value', '2')
    cy.get(destination_tab).contains('Tel Aviv')
    cy.get(search_button).click()
  })
  it('chooses destination', () => {
    cy.get(destination_tab).should('be.visible')
    cy.get(destination_tab).select('London', { force: true })
    cy.get(destination_tab).should('have.value', '31')
    cy.get(destination_tab).contains('London')
    cy.get(search_button).click()
  })
  it('chooses destination', () => {
    cy.get(destination_tab).should('be.visible')
    cy.get(destination_tab).select('New York', { force: true })
    cy.get(destination_tab).should('have.value', '51')
    cy.get(destination_tab).contains('New York')
    cy.get(search_button).click()
  })
})



