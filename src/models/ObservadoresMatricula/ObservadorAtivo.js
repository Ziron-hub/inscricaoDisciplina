const ObservadorEstadoMatricula = require('./ObservadorEstadoMatricula');

class ObservadorAtivo extends ObservadorEstadoMatricula {
    constructor() {
        super();
    }
    update() {
        console.log('Matricula ativa');
    }
    enviaEmail() {
        console.log('Email enviado para o aluno');
    }

}