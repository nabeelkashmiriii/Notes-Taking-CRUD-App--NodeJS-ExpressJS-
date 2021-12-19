const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended:true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

// database configuration
const databaseConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.promise = global.Promise;

// connecting to database
mongoose.connect(databaseConfig.url, {
    useNewUrlParser: true
}).then( () => {
    console.log("conection successfull");
}).catch(err => {
    console.log("could not connect....", err);
    process.exit();
});

// define a route
app.get('/', (req, res) => {
    res.json({"message": "This is a Crud App"});
});



// require Routes
require('./app/routes/crud.routes.js') (app);

// create server
app.listen(3000, () =>{
    console.log('Listening on 3000');
});
