const usuario = [
    { 
        nome: "Carlos", 
        aceitaNotificacoes: ["email", "push"] 
    }
]

class Notificacao{
    constructor(){
        if(new.target === Notificacao)
            console.log("Essa clssse não pode ser instanciada")
    }

    enviarMensagem(){
        throw new Error("O medoto EnviarMensagem precisa ser implementado")
    }
}

class Email extends Notificacao{
    enviarMensagem(usuario, mensagem){
        console.log(`Mensagem enviado por email para o usuario: ${usuario}, ${mensagem}`)
    }
}

class Sms extends Notificacao{
    enviarMensagem(usuario, mensagem){
        console.log(`Mensagem enviado por sms para o usuario: ${usuario}, ${mensagem}`)

    }
}

class PushNotification extends Notificacao{
    enviarMensagem(usuario, mensagem){
        console.log(`Mensagem enviado por push para o usuario: ${usuario}, ${mensagem}`)

    }
}

const MeiosDeEnvio = {
    email: Email,
    sms: Sms,
    push: PushNotification
}

class FactoryMensagens{
    constructor(metodo, usuario){
        this.metodo = metodo
        this.usuario = usuario
    }

    CriarMetodo(){
        const meioDeEnvio = MeiosDeEnvio[this.metodo]
            if(!this.usuario.includes(this.metodo)){
                throw new Error("O cliente não aceita esse metodo mensagem")
                
            }

            if(!meioDeEnvio)
                console.log("Nenhum meio de notificação encontrado")

        return new meioDeEnvio;
    }

}

class ServiceMensagem{
    constructor(usuario, mensagem, metodo){
        this.mensagem = mensagem
        this.metodo = metodo
        this.usuario = usuario
    }

    enviarMensagem(){
        this.metodo.enviarMensagem(this.usuario, this.mensagem)
    }
    
}

try {
    const factoryMensagem = new FactoryMensagens("email", usuario[0].aceitaNotificacoes)
        const metodoDeMensagem = factoryMensagem.CriarMetodo()
            const serviceMensagem = new ServiceMensagem(usuario[0].nome, "Atualização de sistema na sexta feira", metodoDeMensagem)
                    serviceMensagem.enviarMensagem()
} catch (error) {
        console.log(error)
}

    
try {
    const factoryMensagem = new FactoryMensagens("sms", usuario[0].aceitaNotificacoes)
        const metodoDeMensagem = factoryMensagem.CriarMetodo()
            const serviceMensagem = new ServiceMensagem(usuario[0].nome, "Atualização de sistema na sexta feira", metodoDeMensagem)
                    serviceMensagem.enviarMensagem()
} catch (error) {
        console.log(error)
}