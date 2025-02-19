class EmailService{
    EnviarMensagem(mensagem){
        console.log(mensagem)
    }
}

class SmsService{
    EnviarMensagem(mensagem){
        console.log(mensagem)
    }
}

class PushServiee{
    EnviarMensagem(mensagem){
        console.log(mensagem)
    }
}

class NotificationService{
    constructor(meioDeEnvio, mensagem){
        this.meioDeEnvio = meioDeEnvio;
        this.mensagem = mensagem;
    }

    EnviarMensagem(){
        this.meioDeEnvio.EnviarMensagem(this.mensagem)
    }

    
}


const meioEnvio = new EmailService()
const NotificacaoService = new NotificationService(meioEnvio, "Promoção de 50% OFF!")
    NotificacaoService.EnviarMensagem()