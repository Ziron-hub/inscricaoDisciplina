const Usuario = require('./Usuario');

class AdmDepartamento extends Usuario {
    #numeroADM;
    #cargo;
    constructor(cpf, nome, email, senha, numeroADM, cargo) {
        super(cpf, nome, email, senha);
        this.#numeroADM = numeroADM;
        this.#cargo = cargo;
    }
}

module.exports = AdmDepartamento;