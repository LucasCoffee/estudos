class IUserRepository{
    createUsers(nome, email, senha){
        throw new error("O metodo para criar usuarios precisa ser implementado")
    }
    getUserByEmail(email){
        throw new error("O metodo para buscar usuarios por email precisa ser implementado")
    }
    getUsersByID(id){
        throw new error("O metodo para buscar usuarios por id precisa ser implementado")

    }
}

module.exports = IUserRepository