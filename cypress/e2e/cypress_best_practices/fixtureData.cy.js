it('Login Into the Application With Multiple Credentials', () => {
    cy.fixture('credentials').then((credentials) => {
        credentials.forEach(credentials => {
            // your test logic
            cy.visit('https://www.saucedemo.com/');
            cy.get('#user-name').type(credentials.username);
            cy.get('#password').type(credentials.password);
            cy.get('#login-button').click();
           
        });
    });
 });