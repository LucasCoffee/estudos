const secret = process.env.secret
const JsonService = require('../Service/JsonService')

async function validacaoDeToken(req, res, next){

        var token = req?.headers?.authorization

        if(!token || token === undefined){
           return res.send(`Você precisa efetuar o login para acessar essa pagina :( )`)
        }
        
        token = token.split(' ')[1]

        try {
            const decoded = JsonService.verificaToken(token)
            req.userId = decoded
            next()
        } catch (error) {
            res.send(error.message)
        }

}

module.exports = validacaoDeToken