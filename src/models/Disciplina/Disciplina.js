const Curso = require('../Curso/Curso')
const connection = require('../../database/connection')

class Disciplina {
    #nome;
    #codigo;
    #numero_vagas;
    #curso;
    #perfil;
    constructor(nome, codigo, numero_vagas, curso ,perfil) {
        this.#nome = nome;
        this.#codigo = codigo;
        this.#numero_vagas = numero_vagas;
        this.#curso = curso;
        this.#perfil = perfil;
    }
    get nome() {
        return this.#nome;
    }
    get codigo() {
        return this.#codigo;
    }
    get numero_vagas() {
        return this.#numero_vagas;
    }
    get curso() {
        return this.#curso;
    }
    get perfil() {
        return this.#perfil;
    }
    set nome(nome) {
        this.#nome = nome;
    }
    set codigo(codigo) {
        this.#codigo = codigo;
    }
    set numero_vagas(numero_vagas) {
        this.#numero_vagas = numero_vagas;
    }
    set curso(curso) {
        this.#curso = curso;
    }
    set perfil(perfil) {
        this.#perfil = perfil;
    }

    async consultarNumVagasDisc(idDisciplina){
        return await connection('disciplina').where('id',idDisciplina).select('numero_vagas').first();
    }


}

module.exports = Disciplina;
