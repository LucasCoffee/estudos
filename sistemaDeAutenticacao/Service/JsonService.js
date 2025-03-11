const jwt = require('jsonwebtoken')
const secret = process.env.secret

class JsonService{
    login(email){
        return jwt.sign(email, secret)
    }

    verificaToken(token){
        try {
            return jwt.verify(token, secret,)
        } catch (error) {
            throw new Error("Token é invalido ou está expirado")
        }
    }
}

module.exports = new JsonService