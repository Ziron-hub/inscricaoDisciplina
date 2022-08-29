class EstadoMatricula {
    #Ativo
    #MatriculaTrancada
    #Suspenso
    #Afastado
    #Jubilado
    #Formado
    #EstadoAtual
    constructor() {
        this.#Ativo = new Ativo();
        this.#MatriculaTrancada = new MatriculaTrancada();
        this.#Suspenso = new Suspenso();
        this.#Afastado = new Afastado();
        this.#Jubilado = new Jubilado();
        this.#Formado = new Formado();
        this.#EstadoAtual = this.#Ativo;
    }
}

module.exports = EstadoMatricula;