describe('Input form', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('focuses input on load', () => {
    cy.focused()
      .should('have.class', 'new-todo');
  });

  it('accepts input', () => {
    const typedText = 'Test input value';

    cy.get('.new-todo')
      .type(typedText)
      .should('have.value', typedText);
  });

  context('Form submission', () => {
    it('Adds a new todo on submit', () => {
      cy.get('.new-todo')
      .type('Test input value')
      .type('{enter}');
    });
  });
});
