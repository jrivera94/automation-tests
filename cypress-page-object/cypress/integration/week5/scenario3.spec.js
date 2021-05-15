import HomePage from '../../pages/Home';
import Dashboard from '../../pages/Dashboard';

import user from '../../fixtures/user.json';

describe('Escenario de Pruebas 3', () => {
  it('Ingresar con cuenta válida, Listar Posts, Eliminar Post, Listar Posts', () => {
    new HomePage()
      .goToSignIn()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    new Dashboard()
      .goToPost()
      .goToEditPost(0)
      .deletePost()
      .visit();
  });
});