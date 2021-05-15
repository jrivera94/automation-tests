import SignIn from './SignIn';

class Home {

  visit() {
    cy.visit('/');
    cy.wait(300);
    return this;
  }

  goToSignIn() {
    const signIn = new SignIn();
    signIn.visit();
    return signIn;
  }
}

export default Home;