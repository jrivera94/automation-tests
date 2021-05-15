import HomePage from '../../pages/Home';
import Dashboard from '../../pages/Dashboard';

import user from '../../fixtures/user.json';
import post from '../../fixtures/post2.json';

describe('Escenario de Pruebas 2', () => {
  it('Ingresar con cuenta válida, Listar Posts, Editar Post, Listar Posts', () => {
    new HomePage()
      .goToSignIn()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    new Dashboard()
      .goToPost()
      .goToEditPost(0)
      .fillTitle(post.title)
      .fillText(post.text)
      .visit();
  });
});