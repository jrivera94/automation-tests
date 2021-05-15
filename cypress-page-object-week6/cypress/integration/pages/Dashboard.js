import Post from './Post';

class Dashboard {

  visit() {
    cy.visit('/dashboard');
    cy.wait(300);
    return this;
  }

  goToPost() {
    const post = new Post();
    post.visit();
    return post;
  }
}

export default Dashboard;