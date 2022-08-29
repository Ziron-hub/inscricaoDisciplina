class Formado {
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

}
module.exports = Formado;
