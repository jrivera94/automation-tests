# Entrega Semana 6

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
16. Escenario de Pruebas 16. Ingresar con cuenta inválida, Ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts, Editar Post, Publicar Post, Listar Post
17. Escenario de Pruebas 17. Ingresar con cuenta válida, Listar Posts, Crear Post (500 caracteres), Listar Posts
18. Escenario de Pruebas 18. Ingresar con cuenta inválida, Ingresar con cuenta válida, Listar Posts, Crear Post (500 caracteres), Listar Posts
19. Escenario de Pruebas 19. Ingresar con cuenta válida, Listar Posts, Editar Post (500 caracteres), Listar Posts
20. Escenario de Pruebas 20. Ingresar con cuenta inválida, Ingresar con cuenta válida, Listar Posts, Editar Post (500 caracteres), Listar Posts

```
El readme del repo detalla las instrucciones para ejecutar los escenarios. Estas instrucciones deben llevar a la ejecución de los escenarios. De lo contrario no se darán los puntos en el siguiente criterio. [2 puntos]
```

### Prerequisitos

- Tener instalado ghost en las versiones bajo prueba (v3.3.0 y v3.42.5)
- Version de node 12.16.1

### Cypress

**Instalación**

- Antes de comenzar con lo siguiente debe tener instalado Ghost en el sistema. [Instrucciones](https://ghost.org/docs/install/)
- Antes de comenzar con lo siguiente debe tener instalado Cypress en el sistema. [Instrucciones](https://docs.cypress.io/guides/getting-started/installing-cypress)

**Patrón**

### PageObject

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

### Resemble JS

**Instalación**

- Ubíquese en la carpeta `automation-tests/cypress-page-object`
- Corra el comando `npm install`

**Instrucciones de ejecución:**

- Una vez esté en esta la carpeta `automation-tests/cypress-page-object`, corra el comando
  `node resemble`
- Tardará por lo menos 1 min la ejecución y generará un reporte html en `automation-tests/cypress-page-object/resemble/report.html`, podrá abrirlo en el navegador de su preferencia
- También en `automation-tests/cypress-page-object/cypress/screenshots/All Integration Specs` en cada escenario de prueba generará la imagen de comparación `diff*.png` para cada paso de la prueba

**Escenarios de prueba (VRT)**

Cubre del escenario 1 al 5

---

### Kraken

**Instalación**

Para esta ejecución vamos a usar la maquina virtual que provee el curso

- Creamos una máquina virtual de VirtualBox en cual Kraken esta instalado y funcionando. La puede encontrar en la siguiente url y la clave es "pruebas": https://zenodo.org/record/4739209/files/Ubuntu20Light_copy.vdi?download=1
- Una vez configurada la maquina virtual procedemos a clonar el proyecto haciendo `git clone https://github.com/andalm/automation-tests.git`
- Ubicarse en el directorio /kraken-given-when-then/TallerKraken/ ejecutar `cd kraken-given-when-then/TallerKraken/`
- Ejecutar `gem install bundler`
- Ubicarse en el directorio kraken-week-5 ejecutar `cd kraken-week-5`
- Ejecutar el comando `bundle install`

Aquí ya tendremos el ambiente configurado

**Patrón**

### Given When Then

**Instrucciones de ejecución:**

Para correr los la automazacion e2e para la version de ghost 3.3.0 se deben de seguir los siguientes pasos:

- Paso 1 debemos de estar ubicados en el directorio `kraken-week-5`
- Paso 2 debemos de asegurar que tenemos conectividad entre nuestra máquina virtual y nuestro servidor de ghost
- Paso 3 debemos cambiar en el archivo kraken_properties.json los siguientes valores
  - Cambiar la propiedad USER por el usuario registrado en ghost
  - Cambiar la propiedad PASSWORD por el password registrado en la app para el usuario anterior
  - Cambiar las ip y puerto, para las propiedades LOGIN, RELOAD_LOGIN, LIST_POST, RELOAD_POST, POST_CREATOR, POST_CREATOR_2, RELOAD_POST_2, esto con la ip y el puerto en donde esta corriendo la instancia de ghost
- Paso 4 ejecutar `bundle exec kraken-mobile run --properties=kraken_properties.json`

Para correr los la automazacion e2e para la version de ghost 3.42.5 se deben de seguir los siguientes pasos:

- Paso 1 debemos de estar ubicados en el directorio `kraken-week-6`
- Paso 2 debemos de asegurar que tenemos conectividad entre nuestra máquina virtual y nuestro servidor de ghost
- Paso 3 debemos cambiar en el archivo kraken_properties.json los siguientes valores
  - Cambiar la propiedad USER por el usuario registrado en ghost
  - Cambiar la propiedad PASSWORD por el password registrado en la app para el usuario anterior
  - Cambiar las ip y puerto, para las propiedades LOGIN, RELOAD_LOGIN, LIST_POST, RELOAD_POST, POST_CREATOR, POST_CREATOR_2, RELOAD_POST_2, esto con la ip y el puerto en donde esta corriendo la instancia de ghost
- Paso 4 ejecutar `bundle exec kraken-mobile run --properties=kraken_properties.json`


### Backstop JS

**Instalación**

- Paso 2 ejecutar `npm install -g backstopjs`

**Instrucciones de ejecución:**

- Paso 1 ubicarse en el directorio `automation-tests/kraken-given-when-then/TallerKraken/backstopjs`
- Paso 2 ejecutar `backstop test`
- Paso 3 ejecutar `backstop approve`
- Paso 4 ejecutar `backstop test`
El reporte detallado lo puede encontrar en `${PATH_LOCAL_REPOSITORY}/automation-tests/kraken-given-when-then/TallerKraken/backstopjs/backstop_data/html_report/index.html`
**Escenarios de prueba (VRT)**

Cubre del escenario 6 al 10
