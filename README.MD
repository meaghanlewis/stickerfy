# Stickerfy


### Run Locally on Your Machine
You need [Node](https://nodejs.org/en/download/), NPM (which is bundled with Node) and [MongoDB](https://docs.mongodb.com/manual/installation/) properly installed before being able to run this application.

To get started:
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

To run the:
- unit tests: `npm run unit-test`
- integration tests: `npm run integration-test`
- ui tests: `npm run ui-test`
