import HomePage from '../../pages/Home';
import Dashboard from '../../pages/Dashboard';

import user from '../../fixtures/user.json';
import user2 from '../../fixtures/user2.json';
import post from '../../fixtures/post3.json';

describe('Escenario de Pruebas 20', () => {
  it('Ingresar con cuenta inválida, Listar Posts, Crear Post (500 caracteres), Listar Posts', () => {
    new HomePage()
      .goToSignIn()
      .fillEmail(user2.email)
      .fillPassword(user2.password)
      .submit()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    new Dashboard()
      .goToPost()
      .goToNewPost()
      .fillTitle(post.title)
      .fillText(post.text)
      .visit();
  });
});