const { json } = require("stream/consumers");
const UserRepository = require("../Repositories/UserRepository");
const HashService = require("./HashService")
const JsonService = require('./JsonService')

class LoginService{
    constructor(respository, hashService, JsonService){
        this.respository = respository;
        this.hashService = hashService
        this.jsonService = JsonService
    }

    async login(email, senha){
        try {
            const user = await this.respository.getUserByEmail(email)
            if(!(await this.hashService.comparePassword(senha, user.senha ))){
                throw new Error('Email ou senha estão incorretos')
            }
            return await this.jsonService.login(email)

        } catch (error) {
            throw new Error(error)
        }
    }

    logout(email){

    }

}

module.exports = new LoginService(UserRepository, HashService, JsonService)
