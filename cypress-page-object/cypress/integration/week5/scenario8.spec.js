import HomePage from '../../pages/Home';
import Dashboard from '../../pages/Dashboard';

import user from '../../fixtures/user.json';
import user2 from '../../fixtures/user2.json';

describe('Escenario de Pruebas 8', () => {
  it('Ingresar con cuenta inválida, Ingresar con cuenta válida, Listar Post, Eliminar Post, Listar Posts', () => {
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
      .goToEditPost(0)
      .deletePost()
      .visit();
  });
});