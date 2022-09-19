const Usuario = require('./Usuario');


class Aluno extends Usuario {
    #matricula;
    constructor(cpf, nome, email, senha, matricula) {
        super(cpf, nome, email, senha);
        this.#matricula = matricula;

    }
    get matricula() {
        return this.#matricula;
    }

    set matricula(matricula) {
        this.#matricula = matricula;
    }

}

module.exports = Aluno;