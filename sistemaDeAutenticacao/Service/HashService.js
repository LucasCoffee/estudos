const IHashService = require("../Intefaces/IHashService");
const bcrypt = require("bcrypt");
const saltCount = 13;

class HashService extends IHashService {
    async hashPassword(senha) {
        const salt = await bcrypt.genSalt(saltCount);
        return bcrypt.hash(senha, salt);
    }

    async comparePassword(senha, hash) {
        return await bcrypt.compare(senha, hash);
    }
}

module.exports = new HashService();
