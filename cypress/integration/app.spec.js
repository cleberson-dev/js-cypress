describe('React Todo MVC', () => {
  beforeEach(() => cy.visit('http://todomvc.com/examples/react'));

  it('visits React Todo MVC page', () => {
    cy.get('section').should('have.class', 'todoapp');
  });

  it('creates a new todo', () => {
    cy.get('input.new-todo')
      .type('Arroz')
      .type('{enter}')
      
    cy.get('.todo-list')
      .find('li label')
      .should('have.text', 'Arroz');
  });
})