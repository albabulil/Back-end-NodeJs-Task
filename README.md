## Tech Stack

- [Node.js](https://nodejs.org/download/release/v14.16.0/) Node.js version `14.16`.
- [Yarn](https://yarnpkg.com) for Package Manager.
- [Nest.js](https://github.com/nestjs/nest) as the framework.

## Development
### Dependencies
NOTE: You must create devlopment.env, staging.env, production.env file based on .env.example file that provided
```
# App config
APP_NAME=Backend-Test-Task
APP_PORT=3000
MODE=DEV
DEBUG=false

# Postgres config
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DATABASE=extask
DB_SYNC=true
```
### How to run in your local

```bash
# Installation
$ npm install
# development
$ npm run start:dev
# production mode
$ npm run start:prod
```

## For more result test:

1. [Simple Database querying](https://github.com/albabulil/Back-end-NodeJs-Task/blob/master/simple-query.txt)<br>
    ### Users Module (`/v1/users`)

    | | | |
    |-|-|-|
    | `GET` | `/` | get all app |
    <br>
    Notes:<br>
      please check the documentation postman here (https://documenter.getpostman.com/view/15047366/UV5WDd7V#intro)<br>
      
2.  Write a small ExpressJS server to search movies from (http://www.omdbapi.com/)<br><br>
      The Backend should :<br>
        [GET Search](http://localhost:3000/v1/omdb/?page=1&limit=10&q=Begins)<br>
        [GET Detail](http://localhost:3000/v1/omdb/:id)<br>
    
    ### Omdb Module (`/v1/omdb`)

    | | | |
    |-|-|-|
    | `GET` | `/` | get all app |
    | `GET` | `/:id` | get app with certain id |
    <br>
    Notes:<br>
      please check the documentation postman here (https://documenter.getpostman.com/view/15047366/UV5WDd7V#intro)<br> 
      
3. [Refactor the code is more efficient and easy to read with good logic flow.](https://github.com/albabulil/Back-end-NodeJs-Task/blob/master/find-first-string-In-bracket.txt)<br>

4. [Logic Anagram](https://github.com/albabulil/Back-end-NodeJs-Task/blob/master/logic-anagram.txt)

