import Post from './Post';
import Display from './Display';

class Dashboard {

  _display = Display.getInstance();

  visit() {
    cy.visit('#/dashboard');
    cy.wait(300);
    this._display.screenshot();
    return this;
  }

  goToPost() {
    const post = new Post();
    post.visit();
    return post;
  }
}

export default Dashboard;