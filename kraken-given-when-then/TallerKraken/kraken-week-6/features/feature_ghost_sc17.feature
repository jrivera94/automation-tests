Feature: Login, list post, and create post
        @user1 @web
        Scenario: Ingresar con cuenta válida, Listar Posts, Crear Post (500 caracteres), Listar Posts
                Given I navigate to page "<LOGIN>"
                Then I enter "<USER>" into input field having id "ember8"
                Then I enter "<PASSWORD>" into input field having id "ember10"
                Then I click on element having id "ember12"
                Then I navigate to page "<LIST_POST>"
                Then I navigate to page "<POST_CREATOR>"
                Then I click on element having css selector ".gh-editor-title"
                Then I enter "<BIG_TITLE>" into input field having css selector "textarea"
		Then I enter "<DESCRIPTION_POST>" into input field having css selector "p"
		Then I click on element having css selector ".br--left"
		#Then I navigate to page "<RELOAD_POST>" 
