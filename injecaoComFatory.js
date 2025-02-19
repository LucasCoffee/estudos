const { error } = require("console")

class Pagamento{

    constructor(){
        if(new.target === 'Pagamento'){
            throw new error("Essa classe não pode ser intanciada")
        }
    }

    pagarCompra(){
        throw new error("O metodo paga conta precisa ser implementado")
    }

    verificarConexao(){
        throw new error("O metodo verificar conexão precisa ser implementado")
    }


}

class Cartao extends Pagamento{
    pagarCompra(){
        console.log("💳 Pagamento com Cartão processado!")
    }

    verificarConexao(){
        return true
    }
}

class Pix extends Pagamento{
    pagarCompra(){
        console.log("🔢 Pagamento via PIX confirmado!")
    }

    verificarConexao(){
        return true
    }
}
class Boleto extends Pagamento{
    pagarCompra(){
        console.log("📄 Pagamento com Boleto gerado!")
    }

    verificarConexao(){
        return false
    }
}

var metodosDePagamento = {
    cartao: Cartao,
    pix: Pix,
    boleto: Boleto
}

class PagamentoFactory {

    static criarPagamento(metodoSelecionado){
        
        var meioDePagamento = metodosDePagamento[metodoSelecionado]

        if(!meioDePagamento){
            throw new error("O metodo de pagamento selecionado não foi encontrado");
        }

        return new meioDePagamento

    }
}

class PagamentoService{
    
    constructor(meioDePagamento){
        this.meioDePagamento = meioDePagamento
    }

    gerarPagamento(){
        this.meioDePagamento.pagarCompra();
    }
}

const meioDePagamento = PagamentoFactory.criarPagamento("cartao")
    if(meioDePagamento.verificarConexao()){
        const pagamentoService = new PagamentoService(meioDePagamento);
                pagamentoService.gerarPagamento();
    }else{
        console.log("Não foi possivel conectar com meio de pagamneto selecionado")
    }
