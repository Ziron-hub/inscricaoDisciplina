class FaseInscricaoListener{
    #nome
    constructor(inscricaoIMP, nome){
        this.inscricaoIMP = inscricaoIMP
        this.#nome = nome
    }

    get nome(){
        return this.name
    }

    set nome(nome){
        this.#nome = nome
    }

    update(){
        console.log(this.nome, "Foi notificado")
    }
}

module.exports = FaseInscricaoListener;