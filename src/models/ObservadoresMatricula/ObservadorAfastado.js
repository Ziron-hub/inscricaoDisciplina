const ObservadorEstadoMatricula = require('./ObservadorEstadoMatricula');

class ObservadorAfastado extends ObservadorEstadoMatricula {
    constructor() {
        super();
    }
    update() {
        console.log('Matricula trancada');
    }
    enviaEmail() {
        console.log('Email enviado para o aluno');
    }
    removeDisciplinas() {
        console.log('Disciplinas removidas');
    }

}