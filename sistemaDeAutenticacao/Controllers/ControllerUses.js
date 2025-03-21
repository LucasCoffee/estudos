const serviceUsers = require("../Service/UsersService")


class ControllerUsers{
    static async homePage(req, res){
         res.send('Seja bem vindo ao sistema de autenticação Node JS com construido com conceitos SOLID')
        
    }

    static async cadastro(req, res){
        try {
            const { nome, email, senha } = req.body;
            serviceUsers.createUsers(nome, email, senha)
            res.send("OK")
        } catch (error) {
            res.send("erro")
        }
    }

    static async getUsersById(req, res){
        try {
            const {id} = req.params
            const usuario = await serviceUsers.getUsersById(id);
            res.json(usuario)
        } catch (error) {
            
        }
    }
    static async getUsersByEmail(req, res){
        try {
            const {email} = req.params
            const usuario = await serviceUsers.getUserEmail(email);
            res.json(usuario)
        } catch (error) {
            res.sendStatus(500)
            console.log(error)
        }
    }
}

module.exports =  ControllerUsers