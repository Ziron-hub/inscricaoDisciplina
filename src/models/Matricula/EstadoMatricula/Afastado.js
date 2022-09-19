const EstadoMatricula = require('./EstadoMatricula');
class Afastado extends EstadoMatricula{
    static #instancia;
    constructor(matriculaEstado) {
        super();

        if (!this.#instancia) {
            this.#instancia = this
            this.matriculaEstado = matriculaEstado
        }

        return this.#instancia
    }

    static get instancia(){
        return this.#instancia
    }

    reativarMatricula(){
        this.matriculaEstado.setEstadoAtual(this.matriculaEstado.Ativo)
    }
}
module.exports = Afastado;
