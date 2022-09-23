class Curso {
    #duracao;
    #admsDepartamento;
    constructor(nome, duracao, admsDepartamento) {
        this.nome = nome;
        this.#duracao = duracao;
        this.#admsDepartamento = admsDepartamento;
    }
    get duracao() {
        return this.#duracao;
    }
    get admsDepartamento() {
        return this.#admsDepartamento;
    }
    set duracao(duracao) {
        this.#duracao = duracao;
    }
    set admsDepartamento(admsDepartamento) {
        this.#admsDepartamento = admsDepartamento;
    }
}

module.exports = Curso;

