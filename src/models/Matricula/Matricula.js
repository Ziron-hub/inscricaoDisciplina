class Matricula {
    #dataMatricula;
    #curso;
    #estadoMatricula;
    #ra;
    #ira;
    #perfil;
    #periodo;
    #listaObservadoresEstado;
    #aluno

    constructor(aluno, dataMatricula, curso, estadoMatricula, ra, ira, perfil, periodo) {
        this.#aluno = aluno;
        this.#dataMatricula = dataMatricula;
        this.#curso = curso;
        this.#estadoMatricula = estadoMatricula;
        this.#ra = ra;
        this.#ira = ira;
        this.#perfil = perfil;
        this.#periodo = periodo;
        this.#listaObservadoresEstado = [];
    }

    get aluno() {
        return this.#aluno;
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

    adcEstadoObservador(observador) {
        this.#listaObservadoresEstado.push(observador);
    }

    notificarObservadoresEstado() {
        this.#listaObservadoresEstado.forEach(observador => {
                observador.update(this);
            }
        );
    }

    removerObservadorEstado(observador) {
        this.#listaObservadoresEstado.splice(this.#listaObservadoresEstado.indexOf(observador), 1);
    }

    trancarMatricula() {
        notificarObservadoresEstado()
        this.estadoMatricula.trancarMatricula(this);
    }

    reativarMatricula() {
        notificarObservadoresEstado()
        this.estadoMatricula.reativarMatricula(this);
    }

    suspenderMatricula() {
        notificarObservadoresEstado()
        this.estadoMatricula.suspenderMatricula(this);
    }

    concluirMatricula() {
        notificarObservadoresEstado()
        this.estadoMatricula.concluirMatricula(this);
    }

    desativarMatricula() {
        notificarObservadoresEstado()
        this.estadoMatricula.desativarMatricula(this);
    }

    afastarMatricula() {
        notificarObservadoresEstado()
        this.estadoMatricula.afastarMatricula(this);
    }

    jubilarMatricula() {
        notificarObservadoresEstado()
        this.estadoMatricula.jubilarMatricula(this);
    }
}

module.exports = Matricula;