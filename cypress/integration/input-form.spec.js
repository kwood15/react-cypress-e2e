describe('Input form', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('focuses input on load', () => {
    cy.focused()
      .should('have.class', 'new-todo')
  });

  it('accepts input', () => {
    const inputText = 'Test input value';

    cy.get('.new-todo')
      .type(inputText)
      .should('have.value', inputText)
  });

  context('form submission', () => {
    it('adds a new todo on submit', () => {
      const newInputText = 'New input value'

      cy.server();

      cy.route('POST', 'api/todos', {
        id: 1,
        name: newInputText,
        isComplete: false
      });

      cy.get('.new-todo')
        .type(newInputText)
        .type('{enter}')

      cy.get('.todo-list li')
        .should('have.length', 1)
        .and('contain', newInputText)
    });
  });
});
