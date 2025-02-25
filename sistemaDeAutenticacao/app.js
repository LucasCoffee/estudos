const express = require('express');
const app = express();
const port = 8080;
const RoutersUser = require('./routes/RouterUsers')

app.use(express.json());

app.use('/', RoutersUser);

app.listen(port, () => {
   return console.log('Server ON')
})


module.exports = app;