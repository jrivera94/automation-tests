import HomePage from '../../pages/Home';
import Dashboard from '../../pages/Dashboard';

import user from '../../fixtures/user.json';
import post from '../../fixtures/post.json';
import post2 from '../../fixtures/post2.json';

describe('Escenario de Pruebas 15', () => {
  it('Ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts, Editar Post, Publicar Post, Listar Post', () => {
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
      .fillTitle(post2.title)
      .fillText(post2.text)
      .visit()
      .goToEditPost(0)
      .publish()
      .visit();
  });
});