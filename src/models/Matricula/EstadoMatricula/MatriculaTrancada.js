class MatriculaTrancada {
    static #instancia;
    constructor(matriculaEstado) {
        if (!this.#instancia) {
            this.#instancia = this
            this.matriculaEstado = matriculaEstado
        }
        return this.#instancia

    }

    static get instancia() {
        return this.#instancia
    }

    reativarMatricula() {
        this.matriculaEstado.setEstadoAtual(this.matriculaEstado.Ativo)
    }
}
module.exports = MatriculaTrancada;
