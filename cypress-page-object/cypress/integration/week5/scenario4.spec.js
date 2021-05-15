import HomePage from '../../pages/Home';
import Dashboard from '../../pages/Dashboard';

import user from '../../fixtures/user.json';
import post from '../../fixtures/post2.json';

describe('Escenario de Pruebas 4', () => {
  it('Ingresar con cuenta válida, Listar Posts, Crear Post, Publicar Post, Listar Posts', () => {
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
      .visit()
      .goToEditPost(0)
      .publish()
      .visit();
  });
});