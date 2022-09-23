const Usuario = require('./Usuario');


class Aluno extends Usuario {
    #matricula;
    constructor(cpf, nome, email, senha, matricula) {
        super(cpf, nome, email, senha);
        this.#matricula = matricula;

    }
    get matricula() {
        return this.#matricula;
    }

    set matricula(matricula) {
        this.#matricula = matricula;
    }

    inscreverAlunoDisciplina(idAlunoDefDisciplina, alunoID , ofertaID, token){
        
    }

    async indexDisciplinas(idAluno){
        const matricula_id = await connection('aluno')
        .where('id', idAluno)
        .select('matricula_id');

        const periodo_id = await connection('matricula')
        .where('id',matricula_id[0].matricula_id )
        .select('periodo_id');

        const [disciplinas] = await connection('periodo_ofertas_disciplinas')
        .where('periodo_id', periodo_id[0].periodo_id)
        .count();

        return disciplinas
    }

}

module.exports = Aluno;