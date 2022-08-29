# ReenbitChat

Реалізовано за допомогою фреймворку Angular, є один баг - який необхідно пофіксити, а саме відповідь серверу йде з затримкою 10 секунд(як вказано в тз). Як вирішити це - треба створити історію дій користувача і записувати всі дію в історію. Потім порівнювати значення по id чату і пушити в масив повідомлень. Трохи з адаптивом в Css треба попрацювати, але вже як є...

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2.

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

build in subfolder
ng build --prod --base-href

