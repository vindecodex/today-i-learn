const express = require('express');

const app = new express();

/* Any of this params name can be change, but it remains 1st argument will be request 2nd is response, last is next method
 * Everytime there is a request middleware will trigger
 * We can actually create multiple middlewares
 */
// Middleware
app.use((req, res, next) => {
  // we can use request and response properties/attributes
  console.log('Hello');
  // after all next fn must be called so that it wont stock after requesting
  next();
});

// Handlers
const getData = (req,res) => {
  res.status(200).json({
    data: data
  });
};

// Route
/*
 * Everytime we request a console.log('Hello will always trigger');
 */
app.get('/sample', getData);





// ------------------------------------------------------------------------------------------------------



/*
 * Middleware adding custom attribute to request
 */
app.use((req, res, next) => {
  // we are adding custom attribute that we can use on our handlers
  req.sample = 'Hi'
  next();
});

// Handlers
const getData = (req, res) => {
  // now we use the created custom properties
  console.log(req.sample);
}

app.get('/sample', getData);



// ------------------------------------------------------------------------------------------------------


// Best combination router.param and middleware param


/*
 * Perfect use for validation if params is valid
 */

// Create a router
const router = express.Router();

// Use router param
router.param('any-param', yourMiddleware);
// Routes
router.get('/sample/:any-param', yourController);

// Middleware
const yourMiddleware = (req, res, next, val) => {
  // use val for validation
}

// Controller
const yourController = (req, res) => {
  // Your todo here
}


// ------------------------------------------------------------------------------------------------------
