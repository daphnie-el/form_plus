//end to end testing
describe('API test', () => {
    it('Test that the endpoint returns 200', () => {
        cy.request('GET', 'https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates')
        .then(
            (response) => {
                expect(response.status).to.eq(200)
            }
        )
    })

    it('Selects filter option and updates U.I', () => {
        cy.visit('http://localhost:3000/')
        .get('.select-dropdown').first().select('Health')
        .wait(550)
        cy.contains("Health Templates")
    })
})