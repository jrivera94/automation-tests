Feature: Login error, login success, list post, create post, list, edit and list post
        @user1 @web
        Scenario: Ingresar con cuenta invalida, Ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts, Editar Post, Listar Post
                Given I navigate to page "<LOGIN>"
                Then I enter "yesid@hotmail.com" into input field having id "ember8"
                Then I enter "12345" into input field having id "ember10"
		Then I click on element having id "ember12"
		Then I navigate to page "<RELOAD_LOGIN>"

                Then I enter "<USER>" into input field having id "ember8"
                Then I enter "<PASSWORD>" into input field having id "ember10"
                Then I click on element having id "ember12"
                Then I navigate to page "<LIST_POST>"
                Then I navigate to page "<POST_CREATOR>"
                Then I click on element having css selector ".gh-editor-title"
                Then I enter "<TITLE_POST>" into input field having css selector "textarea"
		Then I enter "<DESCRIPTION_POST>" into input field having css selector "p"
		Then I navigate to page "<RELOAD_POST>"
		Then I click on element having css selector ".gh-posts-list-item"
		Then I click on element having css selector ".gh-editor-title"
                Then I enter "<TITLE_POST_EDITED_2>" into input field having css selector "textarea"
                Then I enter "<DESCRIPTION_POST_EDITED_2>" into input field having css selector "p"
		Then I click on element having css selector ".br--left"
