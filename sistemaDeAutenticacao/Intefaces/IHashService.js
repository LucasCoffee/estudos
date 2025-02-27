class IHashService {
    hashPassword(senha) {
        throw new Error("O método hashPassword precisa ser implementado");
    }

    comparePassword(senha, hash) {
        throw new Error("O método comparePassword precisa ser implementado");
    }
}

module.exports = IHashService;
