# BackbaseFeTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Application Structure

This application uses services, filters, models, and components to keep the application clean and to keep the most amount of code reusable. The majority of the code lives in src/app.

Each transaction uses the "Transaction" model that was created. When importing the mock data it's put into an array of Transactions to keep the model structure.

The search functionality uses a search pipe that lives in src/app/filters/search.

There are two services that were created to achieve this. The BalanceService handles maintaining an accurate account balance for the user. The TransactionService is in charge of getting the mock data from the mock json file with a function called "getTransactions" and is also in charge of adding the user's new transactions to the top of the transactions array with a function called "addTransaction".

There are two components, one for each epic. One is the recent transactions component which manages the recent transactions table, including the filtering and sorting. The other is the transfer form component, which utilizes the balance service to manage the user's balance and the transactions service to add new transactions.

# GIF

![Backbase](https://github.com/ldinatale1182/backbase-code-challenge/blob/master/Backbase.gif?raw=true)
