describe('React Todo MVC', () => {
  beforeEach(() => cy.visit('http://todomvc.com/examples/react'));

  it('visits React Todo MVC page', () => {
    cy.get('section').should('have.class', 'todoapp');
  });

  it('creates a new todo', () => {
    cy.get('input.new-todo')
      .type('Arroz')
      .type('{enter}');
      
    cy.get('.todo-list')
      .find('li label')
      .should('have.text', 'Arroz');
  });

  it('marks a todo as completed', () => {
    cy.get('input.new-todo')
      .type('Arroz')
      .type('{enter}');

    cy.get('.todo-list')
      .find('li input.toggle')
      .check();

    cy.get('.todo-list')
      .find('li')
      .should('have.class', 'completed');
  });

  it('destroys an existing todo', () => {
    cy.get('input.new-todo')
      .type('Arroz')
      .type('{enter}');

    cy.get('.todo-list')
      .find('li button.destroy')
      .click({ force: true });

    cy.get('section.main').should('not.exist');
  });

  it('toggles all todos as completed', () => {
    cy.get('input.new-todo')
      .type('Todo 1')
      .type('{enter}')
      .type('Todo 2')
      .type('{enter}')
      .type('Todo 3')
      .type('{enter}');

    cy.get('section.main')
      .find('label[for="toggle-all"]')
      .click();

    cy.get('section.main > .todo-list li').should('have.class', 'completed');
  });


  it('shows the amount of items left', () => {
    cy.get('input.new-todo')
      .type('Todo 1')
      .type('{enter}')
      .type('Todo 2')
      .type('{enter}')
      .type('Todo 3')
      .type('{enter}');

    cy.get('ul.todo-list li:first-child')
      .find('input.toggle')
      .check();

    cy.get('.todoapp footer')
      .find('.todo-count > strong')
      .should('have.text', 2);
  })
})