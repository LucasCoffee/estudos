const LoginService = require('../Service/LoginService');

class ControllerLogin{
    static async login(req, res){
         const {email, senha } = req.body
            try {
                const token = await LoginService.login(email, senha)
                res.json({token})
            } catch (error) {
                res.status(401).send(error.message)
            }
    }

    static logout(req, res){
        const {email } = req.body
    }
}

module.exports = ControllerLogin