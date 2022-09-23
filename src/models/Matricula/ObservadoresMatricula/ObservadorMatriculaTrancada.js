const ObservadorEstadoMatricula = require('./ObservadorEstadoMatricula');
class ObservadorMatriculaTrancada extends ObservadorEstadoMatricula {
    constructor() {
        super();
    }
    update() {
        console.log('Matricula trancada');
    }
    enviaEmail() {
        console.log('Email enviado para o aluno');
    }
    removeDisciplinas(matricula) {
        console.log('Disciplinas removidas');

    }

}