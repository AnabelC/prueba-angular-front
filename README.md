# ✨ PruebaAngularFront ✨

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.1.

Este proyecto esta basado en el proyecto del curso de Angular 8: **Platzi Store**, a diferencia que solo lista productos.

Actualmente se esta consultando la lista de los productos de un API expuesta en heroku http://platzi-store.herokuapp.com, se puede ver en las variables del environment.

## Secciones

Consta de 2 secciones:
 - Home: Muestra los productos en cards.
 - Products: Seccion admisnistrativa de los productos, los lista, permite modificarlos, eliminarlos y se pueden agregar nuevos productos.

 Los archivos correspondientes al campo imagen son subidos al storage de Firebase. 

## Consideracion Importante

 Para la ejecucion del proyecto debe agregarse al compilerOptions del archivo tsconfig.json, las siguientes lineas.

```
  # tsconfig.json
  "compilerOptions": {
	  ...
		"skipDefaultLibCheck": true,
		"skipLibCheck": true,
	  ...
	}
```

> Esto debido a un problema ocasionado por una version nueva de la libreria de firebase, miestras se corrije el error.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
