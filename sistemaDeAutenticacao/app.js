const express = require('express');
const app = express();
const port = 8080;

require("dotenv").config()

const RoutersUser = require('./routes/RouterUsers')
const RoutersLogin = require('./routes/RouteLogin')
const RoutesSistem = require('./routes/routePages')

app.use(express.json());

app.use('/', RoutersUser);
app.use('/', RoutersLogin)
app.use('/', RoutesSistem)

app.listen(port, () => {
   return console.log('Server ON')
})


module.exports = app;