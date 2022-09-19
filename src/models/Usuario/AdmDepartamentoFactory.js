const AdmDepartamento = require('./AdmDepartamento') 

class AdmDepartamentoFactory {

    constructor() {
        throw new Error('Não é permitida a criação de instâncias desta classe');
    }

    static createUsuario(cpf, nome, email, senha, matricula) {
        return new AdmDepartamento(cpf, nome, email, senha, matricula);
    }
}

module.exports = AdmDepartamentoFactory
