class IUserRepository{
    createUsers(nome, email, senha){
        throw new Error("O metodo para criar usuarios precisa ser implementado")
    }
    getUserByEmail(email){
        throw new Error("O metodo para buscar usuarios por email precisa ser implementado")
    }
    getUserByID(id){
        throw new Error("O metodo para buscar usuarios por id precisa ser implementado")

    }
}

module.exports = IUserRepository