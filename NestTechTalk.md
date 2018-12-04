<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# [Intro](#Intro)

- Welcome to NestJS Tech Talk

## [Outline](#Outline)

(Nest in 20 min)
  - [Intro](#intro)
    - [Outline](#Outline)
    - [Nest](#nest)
  - [Getting Started](#Getting-Started)
  - [Creating an Endpoint](#Creating-an-Endpoint)
  - [Cool and Nifty Features](#Cool-and-Nifty-Features)
  - [Outro](#Outro)

# [Nest](#Nest)

- What is Nest
  - https://docs.nestjs.com/
  - Nest is a framework for building efficient, scalable Node.js server-side applications.
  - Nest JS is quoted from Josue: "A Ruby on Rails for Nodejs APIs"
  - Uses express like any other Node apps. Language is typescript but uses regular Javascript too
  - Is built with TypeScript (preserves compatibility with pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).
- Why Nest
  - https://github.com/ElephantVentures/epm-core-webflow/tree/develop/node-express-api

# [Getting Started](#Getting-Started)

https://docs.nestjs.com/first-steps
- `$ npm i –g n@nestjs/cli`
- `$ nest new project`
- `$ npm run start`

Basic Structure
  ```
  src
    app.controller.ts
    app.module.ts
    main.ts
  ```

  `main.ts`
      The entry file of the application. It uses NestFactory to create the Nest application instance. (NestFactory is one of the most fundamental classes, it exposes a few static methods that allows creating application instance.) It includes an async function, which will bootstrap our application

  `app.module.ts`
      Defines AppModule, the root module of the application.

  `app.controller.ts`
      Basic controller sample with a single route.

# [Creating an Endpoint](#Creating-an-Endpoint)

## Controller

* https://docs.nestjs.com/controllers
* A controller uses “decorators” to let nest know how to create it’s routing map
    ``` typescript
    @Controller
    ```
* Controllers are responsible for handling incoming requests and returning responses to the client.

## Module

* https://docs.nestjs.com/modules
* A module is a class annotated with a `@Module()` decorator. The `@Module()` decorator provides metadata that Nest makes use of to organize the application structure.

* Controllers always belong to the module, which is why we hold the controllers array within the @Module() decorator.

## Service

* https://docs.nestjs.com/providers
* Are simply providers. Similar to EV services where they handle the endpoint logic. Heavy lifter

Two Ways to Create and Endpoint
1. Manual
2. Automatic:  `nest g controller dogs`

Endpoint Features:
- Params
- Body
- Query

# [Cool and Nifty Features](#Cool-and-Nifty-Features)

1. [Swagger](https://docs.nestjs.com/recipes/swagger)
    - Uses decorators within the code to define the route and endpoint structure
    - Automatically detects endpoints from the Nest decorators
2. [TypeOrm](https://docs.nestjs.com/techniques/database)
3. Testing and Mocking
4. [Error/Exception Handling](https://docs.nestjs.com/exception-filters)
    ``` typescript
    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    ```
5. [Middleware](https://docs.nestjs.com/middleware)
6. Migration Scripts

# [Outro](#Outro)
- Recap of Nest and What we talked about

# Questions?
