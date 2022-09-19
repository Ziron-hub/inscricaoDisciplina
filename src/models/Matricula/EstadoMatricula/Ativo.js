class Ativo {
    static #instancia;
    constructor(matriculaEstado) {
        if(!this.#instancia){
            this.#instancia = this
            this.matriculaEstado = matriculaEstado
        }
        return this.#instancia


    }

    static get instancia(){
        return this.#instancia
    }

    concluirMatricula(){
        this.matriculaEstado.setEstadoAtual(this.matriculaEstado.Formado)
    }
    trancarMatricula(){
        this.matriculaEstado.setEstadoAtual(this.matriculaEstado.MatriculaTrancada)
    }
    suspenderMatricula(){
        this.matriculaEstado.setEstadoAtual(this.matriculaEstado.Suspenso)
    }
    jubilarMatricula(){
        this.matriculaEstado.setEstadoAtual(this.matriculaEstado.Jubilado)
    }
    afastarMatricula(){
        this.matriculaEstado.setEstadoAtual(this.matriculaEstado.Afastado)
    }

}
module.exports = Ativo;
