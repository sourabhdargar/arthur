/// <reference types="cypress" />

it('Login Test', function(){
    //Scenerio 1
cy.visit('https://staging.arthuronline.co.uk/login?X-MODE=QA-eW91LXdpbi1ub3RoaW5nCg')
cy.get('#UserEmail').type('robot+tester_1@firecreekweb.com')
cy.get('.password > .validate-container > input').type('Qwerty66#')
cy.get('.submit > input').click()
cy.get('.entity-name').invoke("text").should("be.eq", "Cypress Test Company")

    //Scenerio 2
cy.get('.alias-properties.dropdown > [data-left-menu-link="1"]').click()
cy.get('.detail > .actions > :nth-child(1) > :nth-child(1) > .btn').click()
cy.get('.noselect.multiple-unit > .arthur-icon').click()
cy.get('.property-name-ref > .input > #ProfileAddressName').type('Sourabh')
cy.get('#s2id_PropertyOwnerId > .select2-choice').click()
cy.get(':nth-child(2) > .select2-result-label').click()
cy.get('.details-content-left > :nth-child(1) > #ProfileAddress1').type('123 blr')
cy.get('#PropertyFullAccess').check()
cy.get('#PropertyUnitCount').clear().type('3')
cy.get('.next-page').click()
cy.get('.let-component > tbody > :nth-child(1) > :nth-child(3) > .input > #MultiUnitIdUnitOwnerId').select('Owner 1 - Sansiri').should('have.value', '107876')
cy.get(':nth-child(2) > :nth-child(3) > .input > #MultiUnitIdUnitOwnerId').select('Owner 1 - Sansiri').should('have.value', '107876')
cy.get(':nth-child(3) > :nth-child(3) > .input > #MultiUnitIdUnitOwnerId').select('Owner 1 - Sansiri').should('have.value', '107876')
cy.get('.next > .submit').click()
cy.get('h2').invoke("text").should("be.eq", "Multiple Units Added ")
cy.get('.alias-properties.dropdown > [data-left-menu-link="1"]').click()

})