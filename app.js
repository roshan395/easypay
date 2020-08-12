const express = require('express')
const app = express();

const tRoutes = require('./api/routes/products');


app.use('/', tRoutes);


module.exports = app;
