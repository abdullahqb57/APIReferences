const express = require('express');
const Router = express.Router();
const port = process.env.port || 8080;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dbconnect = require('./DBConnect');
const app = express();

const sellerroute = require('./routes/seller');
const carroute = require('./routes/car');
app.use(bodyParser.json());

app.use('/',sellerroute);
app.use('/',carroute);


app.listen(port, function(err){
    if(err){
        throw err;
    }else {
        console.log('Up and Running');
    }
})

