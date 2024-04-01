describe('Login Test', () => {
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/login');
  });

  //TESTE CREDENCIAIS REAIS
  it('Deve logar com as credenciais reais', () => {
    cy.get('input[name="email"]').type('lucasrib@teste.com');
    cy.get('input[name="password"]').type('@Lucasribteste');
    cy.get('button[type="submit"]').click();

    //Verificação do Login, sendo o usuário Admin ou não
    cy.url().should('include', '/home');
  });

  //TESTE CREDENCIAIS INVÁLIDAS
  it('Deve mostrar mensagem de erro com credenciais inválidas', () => {
    cy.get('input[name="email"]').type('usuarioinvalido@teste.com');
    cy.get('input[name="password"]').type('TesteSenhaInvalida');
    cy.get('button[type="submit"]').click();

    //Verificação mensagem de erro
    cy.contains('Email e/ou senha inválidos').should('be.visible');
  });
});
