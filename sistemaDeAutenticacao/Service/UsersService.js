const UserRepository = require("../Repositories/UserRepository");

class UserService{
    async createUsers(nome, email, senha){
       return await UserRepository.createUsers(nome, email, senha)
    }

    async getUsersById(id){
        return await UserRepository.getUserById(id)
    }
}

module.exports = new UserService();