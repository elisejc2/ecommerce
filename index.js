
const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session'); //middleware
const authRouter = require('./auth');
const AdminProductsRouter = require('./products');
const UserProductsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');

const app = express();

//MIDDLEWARE
app.use(express.static('public')); //every request that comes thru our app is handled first by this middleware in public (it will look in public to see if there is a route that matches the request)
//now all route handlers in our app will use bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    cookieSession({
    keys: ['wef4nhowt3294ugjea2rg'] //used to encrypt all the info
    })
);
app.use(authRouter); //very important that this is right after the cookies-session
app.use(AdminProductsRouter);
app.use(UserProductsRouter);
app.use(cartsRouter);



//note: for this application to work in the browser make sure to type 'npm run dev' in the terminal
//and then navigate to localhost:3000
