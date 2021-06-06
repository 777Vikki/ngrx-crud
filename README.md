Task:
Below is a task which you need to integrate in angular using the Ngrx Store.
Create an Employee Store in Ngrx
get the list of Employees from below API and update the Store with Effects.
https://reqres.in/api/users?page=1
Display the list of Employees from the Store
Create an Employee and the same should reflect in the Store.
Edit an Employee detail and the same should reflect in the Store.
Delete an Employee record and the same should reflect in the Store.
Below is a link about a well know pattern "Facade Pattern", you need to understand the pattern and integrate the above tasks with this pattern.
https://angular-academy.com/angular-architecture-best-practices/

tutoiral Reference:
https://www.youtube.com/watch?v=62JNAasgclE&list=PLaMbwDs23r4KXoMucJEyUAvamQ-kFNBvC&index=1

Git Reference:
https://github.com/angulardeveloper-io/ngrx-store-app

Contents:

    > State Management

    > Redux

    > Ngrx

    > Typescript

    > Best Practices

    > Build an application (CRUD)

State: State is the representation of the application. It can be user information like username, email for example. It can also be user input and selection. It can be data we get from the server. It can also be View state/UI state, information about the view. It can be location state and router state. or any other application information that our application tracks.

Redux: If the application grows in complexity and get cenario. It becomes more difficult to manage multiple type of state.
It contains three principles:

> Single source of truth(store)

> The state is read only(immutable)

> All changes in the state are made by pure funtion called Reducers.

NgRx: NgRX is RxJS powered state managemant for Angular application, inspired by Redux.

NgRx/store: 

    > Store - Single source of truth.

    > Components subscribe to changes in the state.

    > Information that needs to be shared between components should go to the store.

    > Database in the front-end.
    
    > Provides a cache, Component don't need to connect the server every time the initialize.

NgRx Libraries:

    > @ngrx/store: the core library

    > @ngrx/effects: used to handle side effects such as communication with a back-end server

    >  @ngrx/router-store: to connect the angular router to ngrx store

    > @ngrx/entity: used to manage record collections

    > @ngrx/store-devtools: allows us to inspect and debug the application

    > @ngrx/schematics: scaffolding library that provides CLI commands to generate files