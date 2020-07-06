describe('React Todo MVC', () => {
  it('visits React Todo MVC example page', () => {
    cy.visit('http://todomvc.com/examples/react');

    cy.get('body').should('have.class', 'learn-bar');
  })
})