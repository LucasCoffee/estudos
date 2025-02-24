class IPagamentos{
    constructor(){
        if(new.target === IPagamentos ){
            throw new Error('Esse é uma classe abstrata não podera e não deve ser intanciada')
        }
    }

    processarPagamentos(valor){
        throw new Error(`O metodo de processarPagamento(valor) precisa ser implementado`);
    }
}

class CartaoPagamento extends IPagamentos{
    processarPagamentos(valor){
        console.log(`Pagamento de R$${valor} foi processado via Visa`)
    }
}

class PayPalPagamento extends IPagamentos{
    processarPagamentos(valor){
        console.log(`Pagamento de R$${valor} foi processado via PayPal`)
    }
}

class CriptoPagamento extends IPagamentos{
    processarPagamentos(valor){
        console.log(`Pagamento de R$${valor} foi processado por criptomoeda`)
    }
}

const metodosDePagamento = {
    cartao: CartaoPagamento,
    paypal: PayPalPagamento,
    cripto: CriptoPagamento
}

class MetodoPagamentoFactory{
    static criarPagamento(metodo){
        var meioPagamento = metodosDePagamento[metodo]
            if(!meioPagamento){
                throw new Error(`Sistema desconhece esse meio de pagamento`);
            }

        return new meioPagamento();
    }
}

class LoggerService{
    registrarLog(metodo, valor){
        console.log(`Pagamento realizado por ${metodo}, valor de ${valor} `)
    }
}

class CheckoutService{

    constructor(metodoDePagamento){
        if(!(metodoDePagamento instanceof IPagamentos)){
            throw new Error('O metodo de pagamento não é valido seguindo a inteface')
        }
        this.metodoDePagamento = metodoDePagamento
    }
    processar(valor){
        try {
            this.metodoDePagamento.processarPagamentos(valor)
            return {metodo: this.metodoDePagamento.constructor.name, valor:  valor}
        } catch (error) {
            throw new Error('Houve um erro no processamento do pagamento: ' + error)
        }
    }
}
class PagamentoService{

        constructor(processadorDePagamento, registradorDeLogs){
            this.processadorDePagamento = processadorDePagamento
            this.registradorDelogs = registradorDeLogs
        }

    processarPagamento(valor){   
        try {
            const resultadoPagamento = this.processadorDePagamento.processar(valor)
            this.registradorDelogs.registrarLog(resultadoPagamento.metodo, resultadoPagamento.valor)
        } catch (error) {
            console.log('Erro ao processar pagamento: ' + error)
        }
    }
}

const metodoDePagamento = MetodoPagamentoFactory.criarPagamento('paypal')
const pagamentoService = new PagamentoService(new CheckoutService(metodoDePagamento), new LoggerService())
        pagamentoService.processarPagamento(120)

    