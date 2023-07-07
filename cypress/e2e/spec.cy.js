
///<refernce types="Cypress"/>
describe('The access travel main page buttons', () => {

  describe('template spec', () => {
    // it('passes', () => {
    // cy.visit('https://www.accesstravel.com/en-US/Home/Index')
    // })

    // before(() => {
    // cy.visit('https://www.accesstravel.com/en-US/Home/Index')
    //})

    const hotels_tab = '.hotels'
    const guides_tab = '.guides'
    const tours_tab = '.js-list-tours'
    const things_to_do_tab = '.attraction-link'
    const navbar_tab = '.navbar-new'
    const login_button = 'a.menu-link-new'
    const signup_button= 'a.menu-link-new'


    after(() => {
      cy.log("after all")
    })

    afterEach(() => {
      cy.log("after each")
    })

    it('navigate to the navbar tab and click on login', () => {
      cy.visit('https://www.accesstravel.com/en-US/Home/Index');
      cy.get(navbar_tab).should('be.visible').click();
      cy.get(login_button)
        .parent('li.menu-item-new')
        .invoke('css', 'visibility', 'visible')
      cy.contains('Login').should('be.visible').click();
    });
    it('navigate to the navbar tab and click on signup', () => {
      cy.visit('https://www.accesstravel.com/en-US/Home/Index');
      cy.get(navbar_tab).should('be.visible').click();
      cy.get(signup_button)
        .parent('li.menu-item-new')
        .invoke('css', 'visibility', 'visible')
      cy.contains('Signup').should('be.visible').click();
    });

    it('navigate to the hotels tab', () => {
      cy.visit('https://www.accesstravel.com/en-US/Home/Index')
      cy.get(hotels_tab).should("be.visible")
    })
    it('navigate to the hotels tab', () => {
      cy.visit('https://www.accesstravel.com/en-US/Home/Index')
      cy.get('.hotels').click()
    })
    it('navigate to the guides tab', () => {
      cy.visit('https://www.accesstravel.com/en-US/Home/Index')
      cy.get(guides_tab).should("be.visible")
    })
    it('navigate to the guides tab', () => {
      cy.visit('https://www.accesstravel.com/en-US/Home/Index')
      cy.get('.guides').click()
    })
    it('navigate to the tours tab', () => {
      cy.visit('https://www.accesstravel.com/en-US/Home/Index')
      cy.get(tours_tab).should("be.visible")
    })
    it('navigate to the tours tab', () => {
      cy.visit('https://www.accesstravel.com/en-US/Home/Index')
      cy.get('.js-list-tours').click()
    })
    it('navigate to the things_to_do tab', () => {
      cy.visit('https://www.accesstravel.com/en-US/Home/Index')
      cy.get(things_to_do_tab).should("be.visible")
    })
    //it('navigate to the things to do list tab', () => {
    //cy.visit('https://www.accesstravel.com/en-US/Home/Index')
    //cy.get('.attraction-link').click()
  })






  //cy.get(hotels_tab).should("be.visible")
  //hotels_tab.should("be.visible")
  //cy.get(hotels_tab).invoke('attr', 'aria-expanded').should('eq', 'true')
  //cy.get(hotels_tab).invoke('text').should('eq', 'hotels')


})




