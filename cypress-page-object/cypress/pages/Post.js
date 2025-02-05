import Display from './Display';

class Post {

  _title = 'textarea';
  _text = 'div[data-kg="editor"]';
  _publishButton = 'button.gh-publishmenu-button';
  _editPost = 'a.gh-post-list-title';
  _settingDeleteButton = 'button.settings-menu-delete-button';
  _deleteButton = 'button.gh-btn-red';
  _publishButtonMenu = 'div.gh-publishmenu-trigger';
  _publishButton = 'button.gh-publishmenu-button';
  _display = Display.getInstance();

  _random() {
    return Math.ceil(Math.random() * 999); 
  }

  visit() {
    cy.visit('#/posts');
    cy.wait(300);
    this._display.screenshot();
    return this;
  }

  goToNewPost() {
    cy.visit('#/editor/post');
    cy.wait(300);
    this._display.screenshot();
    return this;
  }

  goToEditPost(item) {
    cy.get(this._editPost).then($posts => {
      let button =  cy.wrap($posts.get(item));
      button.click({ force: true });
    });
    cy.wait(300);
    this._display.screenshot();
    return this;
  }

  deletePost() {
    cy.get(this._settingDeleteButton)
      .click({ force: true });
    cy.wait(20);
    cy.get(this._deleteButton).then($buttons => {
      let button =  cy.wrap($buttons.get(0));
      button.click({ force: true });
    });
    this._display.screenshot();
    cy.wait(300);

    return this;
  }

  fillTitle(value) {
    cy.get(this._title).then($fields => {
      let field =  cy.wrap($fields.get(0));
      field.clear();
      field.type(`${value} ${this._random()}`);
    });

    return this;
  }

  fillText(value) {
    cy.get(this._text)
      .invoke('html', `<p data-koenig-dnd-droppable="true">${value} ${this._random()}</p>`);

    this._display.screenshot();
    return this;
  }

  publish() {
    cy.get(this._publishButtonMenu)
      .click({ force: true });
    this._display.screenshot();
    cy.wait(20);
    cy.get(this._publishButton)
      .click({ force: true });
    this._display.screenshot();
    
    return this;
  }
}

export default Post;