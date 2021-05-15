import HomePage from '../../pages/Home';
import Dashboard from '../../pages/Dashboard';

import user from '../../fixtures/user.json';
import post from '../../fixtures/post.json';

describe('Escenario de Pruebas 1', () => {
  it('Ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts', () => {
    new HomePage()
      .goToSignIn()
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