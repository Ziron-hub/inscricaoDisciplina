const Periodo = require('./Periodo');
const Curso = require('./Curso');

class Matricula {
    #dataMatricula;
    #curso;
    #estadoMatricula;
    #ra;
    #ira;
    #perfil;
    #periodo;
    #listObserversState;

    constructor(dataMatricula, curso, estadoMatricula, ra, ira, perfil, periodo) {
        this.#dataMatricula = dataMatricula;
        this.#curso = curso;
        this.#estadoMatricula = estadoMatricula;
        this.#ra = ra;
        this.#ira = ira;
        this.#perfil = perfil;
        this.#periodo = periodo;
        this.#listObserversState = [];
    }
    get dataMatricula() {
        return this.#dataMatricula;
    }
    get curso() {
        return this.#curso;
    }
    get estadoMatricula() {
        return this.#estadoMatricula;
    }
    get ra() {
        return this.#ra;
    }
    get ira() {
        return this.#ira;
    }
    get perfil() {
        return this.#perfil;
    }
    get periodo() {
        return this.#periodo;
    }
    set dataMatricula(dataMatricula) {
        this.#dataMatricula = dataMatricula;
    }
    set curso(curso) {
        this.#curso = curso;
    }
    set estadoMatricula(estadoMatricula) {
        this.#estadoMatricula = estadoMatricula;
    }
    set ra(ra) {
        this.#ra = ra;
    }
    set ira(ira) {
        this.#ira = ira;
    }
    set perfil(perfil) {
        this.#perfil = perfil;
    }
    set periodo(periodo) {
        this.#periodo = periodo;
    }
    addObserverState(observer) {
        this.#listObserversState.push(observer);
    }
    notifyObserversState() {
        this.#listObserversState.forEach(observer => {
            observer.update(this);
        }
        );
    }
    removeObserverState(observer) {
        this.#listObserversState.splice(this.#listObserversState.indexOf(observer), 1);
    }



}