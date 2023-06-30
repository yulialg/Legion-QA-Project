
///<refernce types="Cypress"/>
describe('The access travel main page buttons', () =>{

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.accesstravel.com/en-US/Home/Index')
  })

  before(() => {
    cy.visit('https://www.accesstravel.com/en-US/Home/Index')
})

const hotels_tab = '[cy.get(."hotels")]'
//const guides_tab = '[cy.get(."guides"]'
//const tours_tab = '[cy.get(."js-list-tours"]
//const things_to_do_tab = '[cy.get'."js-list-tours"]


after(() => {
    cy.log("after all")
})

afterEach(() => {
    cy.log("after each")
})

it('navigate to the hotels tab', () => {
    cy.get('hotels_tab').should("be.visible")
  //cy.get(hotels_tab).should("be.visible")
  //cy.get(hotels_tab).invoke('attr', 'aria-expanded').should('eq', 'true')
  //cy.get(hotels_tab).invoke('text').should('eq', 'hotels')

})
})
})