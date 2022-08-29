const Aluno = require('./../../models/Aluno') 

class AlunoFactory {

    constructor() {
        throw new Error('Não é permitida a criação de instâncias desta classe');
    }
    
    static createUsuario(cpf, nome, email, senha, matricula) {
        return new Aluno(cpf, nome, email, senha, matricula);
    }
}

module.exports = AlunoFactory
