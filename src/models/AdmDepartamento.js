const Usuario = require('./Usuario');

class AdmDepartamento extends Usuario {
    #numeroADM;
    #cargo;
    constructor(cpf, nome, email, senha, numeroADM, cargo) {
        super(cpf, nome, email, senha);
        this.#numeroADM = numeroADM;
        this.#cargo = cargo;
    }
    get numeroADM() {
        return this.#numeroADM;
    }
    get cargo() {
        return this.#cargo;
    }
    set numeroADM(numeroADM) {
        this.#numeroADM = numeroADM;
    }
    set cargo(cargo) {
        this.#cargo = cargo;
    }
}

module.exports = AdmDepartamento;