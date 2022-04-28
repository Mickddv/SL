/// <reference types="cypress" />

describe('create new record', () => {
    beforeEach(() => {

    cy.visit('https://qa-practical.qa.swimlane.io/login')
    })
    
    it('.type() - type into a DOM element', () => {

        cy.get('#input-1')
          .type('mick.valiyee', {delay: 100}).should('have.value', 'mick.valiyee')
        cy.get('#input-2')
          .type('EouNFZSe8sCuav', {delay: 100}).should('have.value', 'EouNFZSe8sCuav')  
        // cy.contains('Login')
        cy.get('[data-cy=submit__btn]')
          .click()  
        cy.get('[data-cy=new-record1__btn] > ngx-icon.ng-star-inserted > .ngx-icon')
          .click()
        cy.wait(2000)


        cy.get('.form-input').first()
          .type("Mick", {delay: 100})
          .get('.form-input').eq(1)
          .type("Valiyee", {delay: 100})
          .get('.form-input').eq(2)
          .type("363 Centennial Pkwy Suite 210", {delay: 100})
          .get('.form-input').eq(3)
          .type("Louisville", {delay: 100})
          .get('.form-input').eq(4)
          .type("CO", {delay: 100})
          .get('.form-input').eq(5)
          .type("888-111-2222", {delay: 100})
          .get('.form-input').eq(6)
          .type("80027", {delay: 100})
          .get('.form-input').eq(7)
          .type("mick.valiyee@swimlane.com", {delay: 100})

          cy.get('.radio [type="radio"]').first()
          .not('[disabled]')
          .check().should('be.checked')

          cy.get('.radio [type="radio"]').eq(3)
          .not('[disabled]')
          .check().should('be.checked')

          cy.get('.radio [type="radio"]').eq(11)
          .not('[disabled]')
          .check().should('be.checked')


          cy.get('.save-button > [ng-if="!getInProgressState(tool)"] > .text')
          .click()  

          cy.get('.modal-footer > .btn')
          .click()  

      })
  })
  
