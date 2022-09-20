const connection = require('../database/connection')
const apiBiblioteca = require('../services/apiBiblioteca')
const IBiblioteca = require('../IBiblioteca')
module.exports = {
    async indexDisciplinas(request, response){
        const { id = 1 } = request.params;
        
        const matricula_id = await connection('aluno')
        .where('id', id)
        .select('matricula_id');

        const periodo_id = await connection('matricula')
        .where('id',matricula_id[0].matricula_id )
        .select('periodo_id');

        const [disciplinas] = await connection('periodo_ofertas_disciplinas')
        .where('periodo_id', periodo_id[0].periodo_id)
        .count();

        return response.json(disciplinas['count(*)'])
    },

    async inscreverAlunoDisciplina(request, response){
        const {idAlunoDefDisciplina, alunoID , ofertaID} = request.body
        console.log(idAlunoDefDisciplina)
        let iBiblioteca = new IBiblioteca()

        // Verifica se o aluno existe

        // Verifica se oferta da disciplina existe

        // Verifica pendencia com a biblioteca
        let pendencia = null
        /*try{
            pendencia = await apiBiblioteca.get(`pessoa/pendencias/${alunoID}`)
        }catch(err){
            return response.json({"status":'Não deu pra recuperar pendencia de aluno'})
        }  */

        try{
            pendencia = await iBiblioteca.pendenciaBibiliotecaAluno(alunoID)
        }catch(err){
            return response.json({"status":'Não deu pra recuperar pendencia de aluno'})
        }  
        console.log(pendencia.data)
        if(pendencia.data === true){
            return response.json({"status":"Aluno não pode se inscrever em disciplinas com pendencia na biblioteca"})
        }
        
        const [id] = await connection('alunosDefDisciplina').insert({
            id:idAlunoDefDisciplina,
            aluno_id:alunoID,
            ofertaDisciplina_id:ofertaID,
        });

        return response.json(id)
        
    }

}