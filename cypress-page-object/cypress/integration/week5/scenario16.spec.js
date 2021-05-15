import HomePage from '../../pages/Home';
import Dashboard from '../../pages/Dashboard';

import user from '../../fixtures/user.json';
import user2 from '../../fixtures/user2.json';
import post from '../../fixtures/post.json';
import post2 from '../../fixtures/post2.json';

describe('Escenario de Pruebas 16', () => {
  it('Ingresar con cuenta inválida, Ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts, Editar Post, Listar Post', () => {
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
      .visit()
      .goToEditPost(0)
      .fillTitle(post2.title)
      .fillText(post2.text)
      .visit();
  });
});