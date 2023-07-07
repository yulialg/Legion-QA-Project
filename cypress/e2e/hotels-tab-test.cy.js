///<reference types="Cypress"/>

describe('The hotels tab search input functionality', () => {
const hotels_tab = '.hotels'
const destination_tab = '#Filter_DestinationId'

beforeEach(() => {
    cy.visit('https://www.accesstravel.com/en-US/Hotel/List')
})

  it('navigate to the hotels tab and click destination', () => {
    cy.get(hotels_tab).click()
  })

  it('chooses destination', () => {
    cy.get(destination_tab).type('Tel Aviv').should('have.value', 'Tel Aviv')
  })
})

