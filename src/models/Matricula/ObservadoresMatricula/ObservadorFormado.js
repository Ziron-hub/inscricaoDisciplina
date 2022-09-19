const ObservadorEstadoMatricula = require('./ObservadorEstadoMatricula');

class ObservadorFormado extends ObservadorEstadoMatricula {
    constructor() {
        super();
    }
    update() {
        console.log('Matricula formada');
    }
    enviaEmail() {
        console.log('Email enviado para o aluno');
    }
    removeDisciplinas() {
        console.log('Disciplinas removidas');
    }
    iniciaPreparacaoDiploma() {
        console.log('Preparação do diploma iniciada');
    }
}