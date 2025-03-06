const express = require("express")
const routers = express.Router();

const ControllerLogin = require('../Controllers/ControllerLogin')

routers.post('/login', ControllerLogin.login )

routers.post('/logout', ControllerLogin.logout )

module.exports = routers