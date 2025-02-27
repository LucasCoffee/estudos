const express = require('express')
const routers = express.Router();

const ControllerUsers = require('../Controllers/ControllerUses')
const validarDadosDeCadastro = require('../middlewares/validacaoDeUsuario')


routers.get('/', ControllerUsers.homePage);

routers.post('/usuario', validarDadosDeCadastro, ControllerUsers.cadastro)

routers.get('/usuario/:id', ControllerUsers.getUsersById);

routers.get("/usuarioBy/:email", ControllerUsers.getUsersByEmail)


module.exports = routers