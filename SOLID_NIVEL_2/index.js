const livros = [];
const dvds = [];

class Iitens{
    constructor(){
        if(new.target === Iitens){
            throw new Error(`Essa classe não pode ser intanciada`)
        }
    }
    cadastrar(){}
    emprestar(){}
    devolver(){}
}

class Livro extends Iitens{
    constructor(titulo, autor, disponivel){
        super();
        this.titulo = titulo
        this.autor = autor
        this.disponivel = disponivel
    }

    cadastrar(){
        livros.push({titulo: this.titulo, autor: this.autor, disponivel: this.disponivel})
        return livros
    }

    emprestar(index){
        if(!livros[index]){
            return 'Esse livro ja foi emprestado'
        }
            livros[index].disponivel = false
            return 'Sucesso'
    }

    devolver(index){
        livros[index].disponivel = true
    }
}

class Dvd extends Iitens{
    constructor(tituto, autor, disponivel){
        super();
        this.tituto = tituto
        this.autor = autor
        this.disponivel = disponivel
    }

    cadastrar(){
        dvds.push({titulo: this.tituto, autor: this.autor, disponivel: this.disponivel})
        return dvds
    }

    emprestar(index){
        if(!dvds[index] || dvds[index].disponivel === false){
            return console.log('Esse dvd ja foi emprestado ou não exite')
        }
            dvds[index].disponivel = false
            return console.log('Sucesso')
    }

    devolver(index){
        dvds[index].disponivel = true
    }
}

class ServiceItens{
    constructor(itemClass){
        this.itemClass = itemClass;
    }

    cadastrar(titulo, autor, disponivel){
        const item = new this.itemClass(titulo, autor, disponivel)
            return item.cadastrar()
    }

    emprestar(index){
        const item =  new this.itemClass()
            return item.emprestar(index)
    }

    devolver(index){
        const item = new this.itemClass()
            return item.devolver(index)
    }


}
class IitensFactory{
    static criarItem(item){
        const tipoDeItem = {
            livros:Livro,
            dvd: Dvd
        }

        const itemClass = tipoDeItem[item]
        if(!itemClass){
            throw new Error('Esse item não foi reconhecido')
        }

        return itemClass;
    }
}

const itemClass = IitensFactory.criarItem('dvd')
const serviceItem = new ServiceItens(itemClass)
   const res =  serviceItem.cadastrar('como influenciar pessoas', 'paulo roberto', true)
        console.log(res)

        
        const serviceItem2 = new ServiceItens(itemClass)
            serviceItem2.emprestar(0)

            const serviceItem3 = new ServiceItens(itemClass)
            serviceItem3.devolver(0)


  




    