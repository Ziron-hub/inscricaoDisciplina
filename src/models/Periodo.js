class Periodo {
    #ofertasDisciplina;
    #ano;
    #semestre;
    #creditos;
    #maxCredito;

    constructor(ofertasDisciplina, ano, semestre, creditos, maxCredito) {
        this.#ofertasDisciplina = ofertasDisciplina;
        this.#ano = ano;
        this.#semestre = semestre;
        this.#creditos = creditos;
        this.#maxCredito = maxCredito;
    }

    consultarDisciplinasAlunoDoPeriodo(aluno) {
        let disciplinas = [];
        for (let oferta of this.#ofertasDisciplina) {
            let alunos = oferta.deferidos()
            for (let estudante of alunos) {
                if (estudante.cpf === aluno.cpf) {
                    disciplinas.push(oferta.codDisciplina());
                }
            }
        }
        return disciplinas;
    }

    consultarDisciplinasDisponiveisPeriodo(){
        let disciplinas = [];
        for (let oferta of this.#ofertasDisciplina) {
            if (oferta.consultarNumVagasDisponiveis() > 0) {
                disciplinas.push(oferta.codDisciplina());
            }
        }
        return disciplinas;
    }

}

module.exports = Periodo;
