
const IServiceUsers = require("../Intefaces/InterfaceServiceUsers")
const UserRepository = require("../Repositories/UserRepository");
const HashService = require("./HashService")


class UserService extends IServiceUsers{
    constructor(repository){
        super()
        this.repository = repository
    }
    async createUsers(nome, email, senha){
        try {
            const hash = await HashService.hashPassword(senha)
            return await this.repository.createUser(nome, email, hash)
        } catch (error) {
            console.log(error)
            throw new Error("Erro ao cadastrar novo usuario")
        }
    }

    async getUserById(id){
        try {
            return await this.repository.getUserByID(id)
        } catch (error) {
            console.log(error)
            throw new Error("Erro ao buscar usuario por id")
        }
    }

    async getUserEmail(email){
        try {
            const response = await this.repository.getUserByEmail(email)
          if(!response){
            return false
          }

          return response
        } catch (error) {
            console.log(error)
            throw new Error("Erro na busca de usuario por email")
        }
    }
}

module.exports = new UserService(UserRepository)