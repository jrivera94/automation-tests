Feature: Login error, login success, list post, delete and list post
        @user1 @web
        Scenario: Ingresar con cuenta inválida, Ingresar con cuenta valida, Listar Posts, Eliminar Post, Listar Posts
                Given I navigate to page "<LOGIN>"
                Then I enter "yesid@hotmail.com" into input field having id "ember8"
                Then I enter "12345" into input field having id "ember10"
		Then I click on element having id "ember12"
		Then I navigate to page "<RELOAD_LOGIN>"

                Then I enter "<USER>" into input field having id "ember8"
                Then I enter "<PASSWORD>" into input field having id "ember10"
                Then I click on element having id "ember12"
                Then I navigate to page "<LIST_POST>"
                Then I click on element having css selector ".gh-posts-list-item"
		Then I click on element having css selector ".post-settings"
		Then I click on element having css selector ".settings-menu-delete-button"
		Then I click on element having css selector ".gh-btn-red"
		Then I navigate to page "<RELOAD_POST>"
