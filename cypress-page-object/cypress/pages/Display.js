const config = require('../../cypress.json');

class Display {

  _path = `${Cypress.browser.name}`;

  screenshot(folder) {
    cy.screenshot(`${this._path}/${folder}/${config.fileName}`);
    return this;
  }
}

export default Display;