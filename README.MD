# Stickerfy

The application can be found at https://stickerfy.herokuapp.com/

## Run the application locally

### Prerequisites

You need the following properly installed before being able to run this application:

- [Node](https://nodejs.org/en/download/)
- [NPM](https://www.npmjs.com/get-npm) (which is bundled with Node)
- [MongoDB Community Edition](https://docs.mongodb.com/manual/installation/#mongodb-community-edition)

#### Get started

1. Clone this repository

``` shell
    git clone https://github.com/meaghanlewis/stickerfy.git
```

2. Install dependencies

``` shell
    npm install
```

3. Set the MONGODB_URI environment variable

    On OSX I use the following command from my terminal. For other operating systems, set the environment variable with the correct syntax.

``` shell
    export MONGODB_URI=mongodb://localhost:27017/shopping
```

4. Start up MongoDB

    Refer to [Run MongoDB Community Edition](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#run-mongodb-community-edition) for the latest command to do that on your operating system. on OSX, I use the following command from my terminal.

``` shell
    brew services start mongodb-community@5.0
```

5. Populate shopping database

``` shell
    node seed/product-seeder.js
```

6. Once the project is setup, start the dev server with Nodemon.

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
