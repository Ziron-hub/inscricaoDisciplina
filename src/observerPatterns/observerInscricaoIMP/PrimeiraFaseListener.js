const FaseInscricaoListener = require('./FaseInscricaoListener') 

class PrimeiraFaseListener extends FaseInscricaoListener{
    constructor(nome, inscricaoIMP){
        super(nome, inscricaoIMP)
    }

    update(){
        console.log(this.nome, "Foi notificado")
        atualizaPerfilAlunosAtivos()
    }

    atualizaPerfilAlunosAtivos(){
        console.log('atualizei os perfis dos alunos ativos')
    }

}