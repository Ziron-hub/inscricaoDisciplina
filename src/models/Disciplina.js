const Curso = module.require('./curso')

class Disciplina {
    #nome;
    #codigo;
    #numero_vagas;
    #deferidos;
    #curso;
    #perfil;
    constructor(nome, codigo, numero_vagas, deferidos, curso ,perfil) {
        this.#nome = nome;
        this.#codigo = codigo;
        this.#numero_vagas = numero_vagas;
        this.#deferidos = deferidos;
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
    get deferidos() {
        return this.#deferidos;
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
    set deferidos(deferidos) {
        this.#deferidos = deferidos;
    }
    set curso(curso) {
        this.#curso = curso;
    }
    set perfil(perfil) {
        this.#perfil = perfil;
    }




}

module.exports = Disciplina;
