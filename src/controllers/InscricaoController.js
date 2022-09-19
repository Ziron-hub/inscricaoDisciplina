const connection = require('../database/connection');
const InscricaoIMP = require('../models/Inscricao/InscricaoIMP')



module.exports =  {
    inscreverAluno(aluno , disciplina){
        const inscricao =  new InscricaoIMP();

        if(aluno.matricula.perfil === disciplina.perfil){
            inscricao.in
        }
    }
}