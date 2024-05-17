/// <reference types="cypress" />

describe('Exercise 2 for uitestingplayground.com:', () => {
  beforeEach(() => {
    cy.visit('http://uitestingplayground.com/')
  })

  it('verifies Responsive Image', () => {
    //Ensure that the responsive image behaves correctly across different screen sizes.
  })

  it('handles Dynamic ID', () => {
   //EVerify that dynamic IDs of elements are not recorded in tests.
   cy.contains('Dynamic ID').click()
   cy.contains('Button with Dynamic ID').click()
  })

  it('validates Class Attribute', () => {
    //Check that class attribute-based XPath is well-formed and functions correctly.
    cy.contains('Class Attribute').click()
    cy.get('button').should('have.class', 'btn-primary')
  })

  it('interacts with Hidden Layers', () => {
    //Ensure that tests do not interact with elements hidden due to z-order.
  })

  it('tests Load Delay', () => {
    //Verify that tests are capable of waiting for a page to load before proceeding.
  })

  it('handles AJAX Data', () => {
    //Test elements that appear after loading data with AJAX requests.
  })

  it('tests Client-Side Delay', () => {
    //Test elements that appear after client-side time-consuming JavaScript calculations.
  })

  it('validates Click Events', () => {
    //Verify that event-based clicks on elements work reliably.
  })

  it.only('enters Text into Input Fields', () => {
    //Ensure that text entered into input fields has the intended effect.
    cy.contains('Text Input').click()
    cy.get('#newButtonName').type('test')
    cy.get('#updatingButton').click()
    cy.get('#updatingButton').should('have.text', 'test')
  })

  it('scrolls Elements into View', () => {
    //Test scrolling elements into view and interacting with them.
  })
  it('verifies Dynamic Table', () => {
    //Verify cell values in a dynamic table.
  })
  it('tests Visibility of Elements', () => {
    //Check if elements are visible on the screen.
    cy.contains('Verify Text').click()
    cy.get('.bg-primary > .badge-secondary').should('contain', 'Welcome UserName!')
  })
  it('tests Mouse Over Interaction', () => {
    //Test interactions triggered by placing the mouse over an element.
    cy.contains('Mouse Over').click()
    cy.contains('Click me').dblclick()
    cy.get('#clickCount').should('have.text', '2')
    
  })
  it('inspects Shadow DOM Components', () => {
    //Explore and interact with Shadow DOM components
  })

})
