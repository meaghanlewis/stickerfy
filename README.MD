# Stickerfy


### Run Locally on Your Machine
You need Node, NPM and MongoDB properly installed. To get started:

1. Clone this repository
``` shell
    git clone https://github.com/meaghanlewis/stickerfy.git
```
2. Setup the environment variable for the MongoDB URI
``` shell
    export MONGODB_URI=mongodb://localhost:27017/shopping
```
3. Install dependencies
``` shell
    npm install
```

4. Start up MongoDB
``` shell
    mongod
```

5. Populate shopping database
``` shell
    node seed/product-seeder.js
```
Once the project is setup, start the dev server with Nodemon.
``` shell
    npm run dev
```
Server will start at: http://localhost:3000
