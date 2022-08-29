class EstadoMatricula {

    constructor() {
        this.Ativo = new Ativo(this);
        this.Afastado = new Afastado(this);
        this.Formado = new Formado(this);
        this.Jubilado = new Jubilado(this);
        this.MatriculaTrancada = new MatriculaTrancada(this);
        this.Suspenso = new Suspenso(this);
        this.EstadoAtual = this.Ativo;
    }

    get EstadoAtual() {
        return this.EstadoAtual.valor;
    }

    setEstadoAtual(estado) {
        this.EstadoAtual = estado;
    }

    trancarMatricula() {
        throw new Error('Nao e possivel trancar a matricula');
    }

    jubilarMatricula() {
        throw new Error('Nao e possivel jubilar a matricula');
    }

    concluirMatricula() {
        throw new Error('Nao e possivel concluir a matricula');
    }

    suspenderMatricula() {
        throw new Error('Nao e possivel suspender a matricula');
    }

    reativarMatricula() {
        throw new Error('Nao e possivel reativar a matricula');
    }

    afastarMatricula() {
        throw new Error('Nao e possivel afastar a matricula');
    }


}

module.exports = EstadoMatricula;