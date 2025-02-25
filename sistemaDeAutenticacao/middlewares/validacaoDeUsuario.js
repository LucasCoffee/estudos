function ValidacaoDeDadosUsuarios(req, res, next){
    const { nome, email, senha } = req.body;

    if(!nome || nome.trim() === "")
        return res.status(400).json({error: 'O nome de cadastro é obrigatorio'})

    if(!email || !email.includes('@'))
        return res.status(400).json({error:'O email não é valido'})

    if(!senha || senha.length < 6){
        return res.status(400).json({error: 'A senha é muito curta, necessario mais que 6 digitos'})
    }

    next();
}

module.exports = ValidacaoDeDadosUsuarios;