class transportes{
    criarTrasnporte(){};
}

class navio extends transportes{
    criarTrasnporte(){
        console.log('navio criado')
    }
}

class caminhao extends transportes{
    criarTrasnporte(){
        console.log('caminhao criado')
    }
}

const meioDeTransporte = {
    maritimo: navio,
    rodoviario: caminhao
}

class logistica{
    static SolicitarTransporte(tipo){
        const transporte = meioDeTransporte[tipo]
        if(!transporte){
            throw new Error("Esse meio de transporte nao exite")
        }
        return new transporte();
    }
}

const enviarProduto = logistica.SolicitarTransporte("rodoviario")
        enviarProduto.criarTrasnporte()

