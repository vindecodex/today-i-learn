### All About NodeJS

Example project [Node-express-api](https://github.com/vindecodex/node-express-api)

##### What NodeJS Can do

- [ &#x2611; ] Can do Complex Single Page App (SPA's)
- [ &#x2611; ] Real Time Apps (RTA)
- [ &#x2611; ] Chat rooms
- [ &#x2611; ] Browser Games
- [ &#x2611; ] Data Streaming Apps
- [ &#x2611; ] REST API

#### What NodeJS Not Good
- [ &#x2612; ] CRUD App
- [ &#x2612; ] Heavy server-side computation

#### Best Pattern

- [ &#x2611; ] MVC
> In MVC handlers and controllers are the same.

#### Middlewares
[Sample Creating Middleware](/node/middleware.js)

Middleware can always be used for checking query params if correct using middleware params or logging some data during request or response

#### Chaining Middlewares
[Sample Chaining Middlewares](/node/middleware.js)


#### Mounting Routers
[Sample Using Mounting Routers](https://github.com/vindecodex/node-express-api/blob/master/routes/user.js)


#### Environment Variables
[Sample .env file](/node/.env)
Environment varible keys must be UPPERCASE

Environment variables are GLOBAL variables, it can be accessed anyware within your application.

Set environment variables during running the application.

`PORT=3000 node index.js` - This will create PORT environment variable

Set environment variables inside code

`process.env.YOURKEY=YOURVALUE` - This will create new properties on your process.env

Using .env file require to be read so we need a module that will read the .env file

`npm i dotenv --save`

```JavaScript
const dotenv = require('dotenv').config({ path: './.env' })
```

anything that you set from your .env file will be added to `process.env`

#### Running a function using your terminal
[Sample Script](/node/run-fn-with-terminal.js)
