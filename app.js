const express = require('express')
const app = express();
const morgan = require('morgan');//package to manage login
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const ProductRoutes = require('./api/routes/products');

mongoose.connect(//connecting to the database server
  'mongodb+srv://admin_rk:'+
  'Easypay123' +
  '@cluster0.zcw4h.mongodb.net/<dbname>?retryWrites=true&w=majority',
  //'mongodb+srv://node-shop1:' +
  // process.env.MONGO_ATLAS_PW +
    //'@node-rest-shop.vm3bo.mongodb.net/<shopProduct>?retryWrites=true&w=majority',
    {
      //useMongoClient: true,//uses mongodb client under the hood
      useUnifiedTopology: true,
      useNewUrlParser: true
    }
);

app.use(morgan('dev'));//passing every route through this
app.use(bodyParser.urlencoded({extended: false}));//have different properties which we can extract
app.use(bodyParser.json());

app.use('/Products', ProductRoutes);


module.exports = app;
