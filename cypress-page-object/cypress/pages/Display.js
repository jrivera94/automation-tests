const config = require('../../cypress.json');

class ConcreteDisplay {

  _path = `${Cypress.browser.name}`;
  _folder = Cypress.mocha.getRunner().suite.title.toLowerCase().replace(/\s/g, '_');
  _steps = 1;

  screenshot() {
    cy.screenshot(`${this._path}/${this._folder}/step${this._steps}-${config.fileName}`);
    this._steps ++;
    cy.wait(10);
    return this;
  }
}

class Display {

  static _instance = null;

  static getInstance() {
    if (Display._instance) {
      return Display._instance;
    }
    Display._instance = new ConcreteDisplay();
    return Display._instance;
  }
}

export default Display;