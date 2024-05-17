

describe('Exercise 1 for demoqa.com:', () => {
  before(() => {
    cy.visit('https://demoqa.com')
  })

  it('navigates to the Selenium Online Training page and verifies that the page loads correctly', () => {
    cy.get('#app > div > div > div.home-banner > a')
     .should('have.attr', 'href')
     .then((href) => {
       cy.visit(href)
     })

    
  })

  it('tests Elements Section', () => {
   //Explore and test various web elements such as text boxes, buttons, checkboxes, radio buttons, dropdowns, etc.
   //Perform actions such as clicking, typing, selecting options, and verifying element properties.
   cy.visit('https://demoqa.com/text-box')
   cy.get('#userName').type("TestName")
   cy.get('#userEmail').type("testmail")
   cy.get('#item-1').click()
   cy.get('.rct-checkbox').click()
   
  })

  it('tests Forms Section', () => {
    //Fill out and submit different types of forms available on the page.
    //Verify form submission and validation messages.
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.get('#firstName').type('test')
    cy.get('#lastName').type('test')
    cy.get('#userEmail').type('test@email.com')
    cy.get('#gender-radio-1').check({force: true})
    cy.get('#userNumber').type('509345340')
    cy.get('#dateOfBirthInput').eq(0).type('1996-12-25')
    cy.get('.subjects-auto-complete__value-container')
    cy.get('#hobbies-checkbox-1').check({force: true})
    cy.get('#uploadPicture').selectFile('example.json')
    cy.get('#currentAddress').type('addres')
    cy.get('#react-select-3-input').type('NCR', {force: true})
    cy.contains('NCR').click({force: true})
    cy.get('#submit').click()
  })

  it('tests Alerts, Frames & Windows', () => {
    //Test different types of alerts (e.g., alert boxes, confirmation dialogs) and handle them accordingly.
    //Interact with frames and windows on the page.
    cy.visit('https://demoqa.com/alerts')
    cy.get('#confirmButton').click()
    cy.get('#confirmResult').should('have.text', 'You selected Ok')
  })

  it('explores Widgets', () => {
    //Test various widgets available on the page, such as accordions, date pickers, sliders, etc.
    //Verify their functionality and behavior.
    cy.visit('https://demoqa.com/accordian')
    cy.get('#section2Heading').click()
    cy.get('#section1Content').should('be.visible')
    cy.visit('https://demoqa.com/slider')
    cy.get('input[type=range]').click({ multiple: true, force: true });
    cy.get('input[type=range]').type("{rightarrow}{rightarrow}")
    cy.get('input[type=range]').as('range').invoke('val', 45).trigger('change')
  })

  it('interacts with Interactions:', () => {
    //Test interactive elements like draggable, droppable, resizable, selectable, etc.
    //Verify the interactions and behavior of these elements.
    cy.visit('https://demoqa.com/droppable')
    cy.get('#draggable').drag('#droppable', {force: true})

  })

  it('interacts with Interactions:', () => {
    //Navigate to the Book Store Application and perform actions such as searching for books, adding them to the cart, and checking out.
    //Verify the functionality of the book store application.
    cy.visit('https://demoqa.com/login')
    cy.get('#userName').type('test')
    cy.get('#password').type('Pass123#')
    cy.get('#login').click()
    cy.get('#userName-value').should('have.text', 'test')
    cy.get('#gotoStore').click()
    cy.url().should('eq', 'https://demoqa.com/books')
    cy.get('#searchBox').type('git')
    cy.get('#basic-addon2').click()
    cy.contains('Git').should('be.visible')
  })
})
