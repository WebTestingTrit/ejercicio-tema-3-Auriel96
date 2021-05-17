# Práctica pruebas e2e Puppeteer

## Definición

Probar el funcionamiento de una web usando _Puppeteer_.
Preferiblemente usa una tuya que tenga una parte accesible al público. 
Si no puedes, o no quieres, te propongo que uses https://www.timeanddate.com/

### Requerimientos

Comprobar respuesta correctra a una url
Por ejemplo https://www.timeanddate.com/worldclock/tu-pais/tu-ciudad

Sacar instantanea del resultado

Comprobarlo emulando un dispositivo movil de tu elección

#### Recomendaciones

Seguir la estructura _Arrange-Act-Assert_

En los mensajes escritos usar el patrón _Given-When-Then_

### Commits y deploy

- Se recomienda usar convenio de nombrado durante los commits.

- Documentación [standard-version](https://www.npmjs.com/package/standard-version) to produce a changelog file from [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/)

- Para subir los cambios usar el script `npm run deploy` Se encarga de hacer el push y crear un changeLog con lo hecho.

### Code style y Prettier

-  Recomendado [extension](https://github.com/prettier/prettier-vscode) for VSCode
