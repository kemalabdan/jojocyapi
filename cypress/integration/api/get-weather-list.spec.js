/// <reference types="cypress" />

describe('Get status', () => {
    it('Verify the list users will displayed', () => {
        cy.request({
            method: 'GET', 
            url: 'https://www.weatherbit.io/api/swaggerui/weather-api-v2#!/andautomatebelowAPIs',
        }).as('weather')
        cy.get('@weather').its('status').should('equal', 200)
        cy.get('@weather').then((response) =>{
            expect(response.data.iat).to.eq('38')
            expect(response.data.ion).to.eq('-78.25')
        })
    });
})