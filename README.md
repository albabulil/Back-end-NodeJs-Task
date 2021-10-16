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