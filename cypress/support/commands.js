Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Lucas')
    cy.get('#lastName').type('Souza')
    cy.get('#email').type('lucas@exemplo.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button','Enviar').click()
})