class Pagamento{
    constructor(){
        if(new.target === Pagamento){
            throw new Error('A classe "pagamento" nao pode ser intanciada')
        }
    }

    processarPagamento(){
        throw new Error('O metodo criarPagamento e obrigadorio');
    }
}

class cartao extends Pagamento{
    processarPagamento(dados){
        console.log("💳 Pagamento com Cartão processado!")
    }
}

class pix extends Pagamento{
    processarPagamento(dados){
        console.log("🔢 Pagamento via PIX confirmado!")
    }
}

class boleto extends Pagamento{
    processarPagamento(){
        console.log("📄 Pagamento com Boleto gerado!")
    }
}

const meioPagamento = {
    pix: pix,
    boleto: boleto,
    cartao: cartao
}

class PagamentoFactory{
    static processadorDePagamentos(formaPagamento){
        let pagamento = meioPagamento[formaPagamento];
    
        if(!pagamento){
            throw new Error("meio de pagamento nao existente")
        }
    
        return new pagamento()
    }
}

const realizarPagamento = PagamentoFactory.processadorDePagamentos("boleto");
realizarPagamento.processarPagamento()