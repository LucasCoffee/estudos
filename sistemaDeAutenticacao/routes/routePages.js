const express = require("express");
const routers = express.Router();
const MiddlewaresLogin = require('../middlewares/validacaoDetoken');

routers.get("/home", MiddlewaresLogin,  (req, res) => {
    res.send("Liberado o acesso")
})

module.exports = routers;