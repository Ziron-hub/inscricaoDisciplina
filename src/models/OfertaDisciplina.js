class OfertaDisciplina{
    #nome
    #codDisciplina
    #deferidos
    #numVagas
    constructor(nome, codDisciplina, deferidos, numVagas){
        this.#nome = nome
        this.#codDisciplina = codDisciplina
        this.#deferidos = deferidos
        this.#numVagas = numVagas
    }
    get nome(){
        return this.#nome
    }
    get codDisciplina(){
        return this.#codDisciplina
    }
    get deferidos(){
        return this.#deferidos
    }
    get numVagas(){
        return this.#numVagas
    }
    set numVagas(numVagas){
        this.#numVagas = numVagas
    }
    set nome(nome){
        this.#nome = nome
    }
    set codDisciplina(codDisciplina){
        this.#codDisciplina = codDisciplina
    }
    set deferidos(deferidos){
        this.#deferidos = deferidos
    }
    consultaerNumVagasDisponiveis(){
        return this.#numVagas - this.#deferidos.length
    }


}
module.exports = OfertaDisciplina;
