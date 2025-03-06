const InterfaceUserRepository = require('../Intefaces/InterfaceRepositore')
const knex = require("../database/connection");

class UserRepository extends InterfaceUserRepository{
    constructor(db){
        super();
        this.db = db
    }
    async createUser(nome, email, senha){
        return await this.db('users').insert({nome, email, senha})
    }

    async getUserByEmail(email) {
        return await this.db("users").where({ email }).first();
    }

    async getUserByID(id) {
        return await this.db("users").where({ id }).first();
    }
}

const userRepository = new UserRepository(knex)

module.exports = userRepository;