const connection = require('../database/connection')
const IBiblioteca = require('../IBiblioteca')
const IGrupos = require('../IGrupos')
const AlunoFactory = require('../models/Usuario/AlunoFactory')

module.exports = {
    async indexDisciplinas(request, response){
        const { id = 1 } = request.params;
        
        const aluno = AlunoFactory.createUsuario()
        
        const disciplinas = await aluno.indexDisciplinas(id)


        return response.json(disciplinas['count(*)'])
    },

    async inscreverAlunoDisciplina(request, response){
        const {idAlunoDefDisciplina, alunoID , ofertaID, token} = request.body

        let iBiblioteca = new IBiblioteca()
        let iGrupos = new IGrupos()

        // Verifica se o aluno existe

        // Verifica se oferta da disciplina existe

        // Verifica pendencia com a biblioteca
        let pendencia = null
        let gruposAcad = null

        try{
            pendencia = await iBiblioteca.pendenciaBibiliotecaAluno(alunoID)
        }catch(err){
            return response.json({"status":'Não deu pra recuperar pendencia de aluno'})
        }  

        if(pendencia.data === true){
            return response.json({"status":"Aluno não pode se inscrever em disciplinas com pendencia na biblioteca"})
        }

        try{
            gruposAcad = await iGrupos.getGrupos(alunoID, token)
            console.log(gruposAcad)
        }catch(err){
            return response.json({"status":'Não deu pra recuperar grupos do aluno'})
        }

        if(gruposAcad.data.length > 2){
            return response.json({"status":"Aluno não pode se inscrever em disciplina se estiver em mais de 2 grupos"})
        }
        
        const [id] = await connection('alunosDefDisciplina').insert({
            id:idAlunoDefDisciplina,
            aluno_id:alunoID,
            ofertaDisciplina_id:ofertaID,
        });

        return response.json(id)
        
    }

}