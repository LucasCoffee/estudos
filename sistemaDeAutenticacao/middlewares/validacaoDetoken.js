const secret = process.env.secret
const JsonService = require('../Service/JsonService')

async function validacaoDeToken(req, res, next){

        var token = req?.headers?.authorization
        console.log(token)

        if(!token || token === undefined){
            res.send(`Você precisa efetuar o login para acessar essa pagina :( )`)
        }
        
        token = token.split(' ')[1]

        try {
            const decoded = await JsonService.verificaToken(token)
            req.userId = decoded
            next()
        } catch (error) {
            res.send(error.message)
        }

}

module.exports = validacaoDeToken