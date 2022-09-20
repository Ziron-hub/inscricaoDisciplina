class OfertaDisciplina{
    #nome
    #codDisciplina
    #deferidos
    #numVagas
    #alunosEspera
    constructor(nome, codDisciplina, deferidos, numVagas, alunosEspera){
        this.#alunosEspera = alunosEspera
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

    get alunosEspera(){
        return this.#alunosEspera
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

    set alunosEspera(alunosEspera){
        this.#alunosEspera = alunosEspera
    }

    consultaerNumVagasDisponiveis(){
        return this.#numVagas - this.#deferidos.length
    }

    consultarAlunosDef(idDisciplina){
        return [
            { nome: 'jason'},
            { nome: 'carlos'},
            { nome: 'joana'} 
        ]
    }


}
module.exports = OfertaDisciplina;
