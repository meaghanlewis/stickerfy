# Stickerfy


### Run the application locally

#### Prerequisites
You need [Node](https://nodejs.org/en/download/), [NPM](https://www.npmjs.com/get-npm) (which is bundled with Node) and [MongoDB](https://docs.mongodb.com/manual/installation/#mongodb-community-edition) properly installed before being able to run this application.

#### To get started:
1. Clone this repository
``` shell
    git clone https://github.com/meaghanlewis/stickerfy.git
```

2. Install dependencies
``` shell
    npm install
```

3. Start up MongoDB
``` shell
    mongod
```

4. Populate shopping database
``` shell
    node seed/product-seeder.js
```
Once the project is setup, start the dev server with Nodemon.
``` shell
    npm run dev
```
Server will start at: http://localhost:3000

### Run mocha tests

#### Unit tests
- to run: `npm run unit-test`
- do not require the dev server running

#### Integration tests
- to run: `npm run integration-test`
- start up the dev server when running

#### UI tests
- to run: `npm run ui-test`
- note: dev server must be started by running `npm run dev` beforehand
