# Entrega Semana 5

### Integrantes del Equipo:

```
El readme del repo debe tener los nombres y correos uniandes de los estudiantes.
```

- [Andrés Aldana](https://github.com/andalm) (a.aldanam@uniandes.edu.co)
- [Juan Diego Alzate](https://github.com/juandial01) (jd.alzate@uniandes.edu.co)
- [Jael Rivera Oviedo](https://github.com/ja-rivera94) (ja.riverao1@uniandes.edu.co)
- [Yesid Felipe Tombé](https://github.com/Yesidtombe) (y.tombe@uniandes.edu.co)

```
El readme del repositorio detalla las 5 funcionalidades bajo pruebas. [2 puntos] NOTA: si quieren definir escenarios para más de 5 funcionalidades lo pueden hacer. El mínimo de funcionalides es 5.
```

### Funcionalidades Bajo Pruebas:

1. Funcionalidad 1. Ingresar con cuenta: Permite ingresar a la aplicación con una cuenta previamente creada.
2. Funcionalidad 2. Listar Posts: Permite listar los Post existentes, tanto publicados como versiones en borrador.
3. Funcionalidad 3. Editar Post: Permite editar un Post previamente creado, ya sea en borrador o ya publicado. El resultado queda en borrador.
4. Funcionalidad 4. Crear Post: Permite crear un nuevo Post en borrador.
5. Funcionalidad 5. Publicar Post: Permite publicar un Post previamente guardado como borrador.
6. Funcionalidad 6. Eliminar Post: Permite eliminar un Post previamente creado.

```
El readme del repositorio describe los 20 escenarios de pruebas. [3 puntos]
```

### Escenarios de Pruebas:

1. Escenario de Pruebas 1. Ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts
2. Escenario de Pruebas 2. Ingresar con cuenta válida, Listar Posts, Editar Post, Listar Posts
3. Escenario de Pruebas 3. Ingresar con cuenta válida, Listar Posts, Eliminar Post, Listar Posts
4. Escenario de Pruebas 4. Ingresar con cuenta válida, Listar Posts, Crear Post, Publicar Post, Listar Posts
5. Escenario de Pruebas 5. Ingresar con cuenta válida, Listar Posts, Editar Post, Listar Posts
6. Escenario de Pruebas 6. Ingresar con cuenta inválida, Ingresar con cuenta válida, Listar Post, Crear Post, Listar Posts
7. Escenario de Pruebas 7. Ingresar con cuenta inválida, Ingresar con cuenta válida, Listar Post, Editar Post, Listar Posts
8. Escenario de Pruebas 8. Ingresar con cuenta inválida, Ingresar con cuenta válida, Listar Post, Eliminar Post, Listar Posts
9. Escenario de Pruebas 9. Ingresar con cuenta inválida, Ingresar con cuenta válida, Listar Post, Crear Post, Publicar Post, Listar Posts
10. Escenario de Pruebas 10. Ingresar con cuenta inválida, Ingresar con cuenta válida, Listar Post, Editar Post, Listar Posts
11. Escenario de Pruebas 11. Ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts, Crear Post, Listar Post
12. Escenario de Pruebas 12. Ingresar con cuenta inválida, Ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts, Crear Post, Listar Post
13. Escenario de Pruebas 13. Ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts, Editar Post, Listar Post
14. Escenario de Pruebas 14. Ingresar con cuenta inválida, Ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts, Editar Post, Listar Post
15. Escenario de Pruebas 15. Ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts, Editar Post, Publicar Post, Listar Post
16. Escenario de Pruebas 16. Ingresar con cuenta inválida, Ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts, Editar Post, Listar Post
17. Escenario de Pruebas 17. Ingresar con cuenta válida, Listar Posts, Crear Post (500 caracteres), Listar Posts
18. Escenario de Pruebas 18. Ingresar con cuenta inválida, Listar Posts, Crear Post (500 caracteres), Listar Posts
19. Escenario de Pruebas 19. Ingresar con cuenta válida, Listar Posts, Crear Post (500 caracteres), Listar Posts
20. Escenario de Pruebas 20. Ingresar con cuenta inválida, Listar Posts, Crear Post (500 caracteres), Listar Posts

```
El readme del repo detalla las instrucciones para ejecutar los escenarios. Estas instrucciones deben llevar a la ejecución de los escenarios. De lo contrario no se darán los puntos en el siguiente criterio. [2 puntos]
```

### Cypress

**Instalación**

Antes de comenzar con lo siguiente debe tener instalado Ghost en el sistema. [Instrucciones](https://ghost.org/docs/install/)

**Patrón**

PageObject

**Instrucciones de ejecución:**

- Ubíquese en la carpeta `automation-tests/cypress-page-object`
- En el archivo `cypress.json` cambie el valor de la variable `baseUrl` en caso de ser necesario
- En la ruta `cypress/fixtures` cambie las credenciales de `user.json` por un usuario válido en la instalación de ghost
- En la ruta `cypress/fixtures` cambie las credenciales de `user2.json` por un usuario no válido en la instalación de ghost

_Opcion 1_

- Con el comando `cypress open` se abrirá la interfaz gráfica de `cypress`, selecciona la ubicación del proyecto `automation-tests/cypress-page-object`
- En la parte superior derecha dé clic en Run, correrá los 20 escenarios de prueba

_Opcion 2_

- Ubicado en carpeta `automation-tests/cypress-page-object` corra el comando `cypress run --headless`, esto correrá todas las pruebas y generará videos y screenshots

---

### Kraken

**Instalación**

_Especificar como se instala_

**Patrón**

Given When Then

**Instrucciones de ejecución:**

- Paso 1
- Paso 2
- Paso 3
