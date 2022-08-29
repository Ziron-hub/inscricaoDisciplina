const Usuario = require('./../../models/Usuario') 

class UsuarioFactory {

    constructor() {
        throw new Error('Não é permitida a criação de instâncias desta classe');
    }

    static createUsuario(cpf, nome, email, senha) {
        return new Usuario(cpf, nome, email, senha);
    }
}

module.exports = UsuarioFactory
