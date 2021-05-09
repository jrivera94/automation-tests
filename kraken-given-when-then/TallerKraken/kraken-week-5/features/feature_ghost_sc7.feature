Feature: Login, list post, edit and delete post
        @user1 @web
        Scenario: Ingresar con cuenta inválida, Ingresar con cuenta válida, Listar Post, Editar Post, Listar Posts
                Given I navigate to page "<LOGIN>"
		Then I enter "" into input field having id "ember8"
                Then I enter "" into input field having id "ember10"
		Then I click on element having id "ember12"
		Then I enter "" into input field having id "ember8"
                Then I enter "" into input field having id "ember10"

		Then I enter "<USER>" into input field having id "ember8"
                Then I enter "<PASSWORD>" into input field having id "ember10"
                Then I click on element having id "ember12"
		Then I navigate to page "<LIST_POST>"
		Then I click on element having css selector ".gh-posts-list-item"
                Then I click on element having css selector "textarea"
                Then I enter "<TITLE_POST_EDIT>" into input field having css selector "textarea"
                Then I enter "<DESCRIPTION_POST_EDIT>" into input field having css selector "p"
                Then I navigate to page "<RELOAD_POST>"
