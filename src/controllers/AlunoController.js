const connection = require('../database/connection')

module.exports = {
    async indexDisciplinas(request, response){
        const { id = 1 } = request.params;

        // await connection('aluno').insert({
        //     id :'3fa85f64-5717-4562-b3fc-2c963f66afa6',
        //     matricula_id :'1',
        // })

        // await connection('aluno').insert({
        //     id :'03dec7a5-9b4e-4d73-a87f-c00ff03d71b7',
        //     matricula_id :'2',
        // })

        // await connection('periodo').insert({
        //     id :'1',
        //     ano :20,
        //     creditos: 45,
        //     maxCredito: 20,
        //     semestre: 10,
        
        // })

        // await connection('periodo').insert({
        //     id :'2',
        //     ano :20,
        //     creditos: 45,
        //     maxCredito: 20,
        //     semestre: 10,
        
        // })

        // await connection('matricula').insert({
        //     id :'1',
        //     dataMatricula :'1964-09-12',
        //     estadoMatricula: 'ativo',
        //     curso_id: '1',
        //     RA: 10,
        //     IRA: 45233,
        //     perfil:1,
        //     periodo_id:'1',
        // })

        // await connection('matricula').insert({
        //     id :'2',
        //     dataMatricula :'1964-09-12',
        //     estadoMatricula: 'ativo',
        //     curso_id: '1',
        //     RA: 11,
        //     IRA: 45433,
        //     perfil:2,
        //     periodo_id:'2',
        // })

        // await connection('admDepartamento').insert({
        //     id :'1',
        //     cargo :'20',
        // })
        
        // await connection('curso').insert({ 
        //     id :'1',
        //     nome :'bcc',
        //     admDepartamento_id: '1',
        // })
        
        // await connection('disciplina').insert({
        //     id :'1',
        //     nome: 'CAP',
        //     codigo: 1,
        //     numero_vagas:3,
        //     curso_id:'1',
        //     perfil:1,
        // })
        
        // await connection('disciplina').insert({
        //     id :'2',
        //     nome: 'IA',
        //     codigo: 2,
        //     numero_vagas:2,
        //     curso_id:'1',
        //     perfil:1,
        // })

        // await connection('disciplina').insert({
        //     id :'3',
        //     nome: 'AM1',
        //     codigo: 3,
        //     numero_vagas:3,
        //     curso_id:'1',
        //     perfil:1,
        // })
        
        // await connection('disciplina').insert({
        //     id :'4',
        //     nome: 'Calculo 1',
        //     codigo: 4,
        //     numero_vagas:2,
        //     curso_id:'1',
        //     perfil:1,
        // })

        // await connection('disciplina').insert({
        //     id :'5',
        //     nome: 'AED2',
        //     codigo: 5,
        //     numero_vagas:2,
        //     curso_id:'1',
        //     perfil:1,
        // })

        // await connection('ofertaDisciplina').insert({
        //     id :'1',
        //     nome: 'CAP 1',
        //     cod_disciplina: 1,
        //     disciplina_id:'1',

        // })
        
        // await connection('ofertaDisciplina').insert({
        //     id :'2',
        //     nome: 'IA 1',
        //     cod_disciplina: 2,
        //     disciplina_id:'2',
        // })

        // await connection('ofertaDisciplina').insert({
        //     id :'3',
        //     nome: 'AM1',
        //     cod_disciplina: 3,
        //     disciplina_id:'3',
        // })

        // await connection('ofertaDisciplina').insert({
        //     id :'4',
        //     nome: 'Calculo 1',
        //     cod_disciplina: 4,
        //     disciplina_id:'4',
        // })

        // await connection('ofertaDisciplina').insert({
        //     id :'5',
        //     nome: 'AED2',
        //     cod_disciplina: 5,
        //     disciplina_id:'5',
        // })
        
        // await connection('periodo_ofertas_disciplinas').insert({
        //     id :'1',
        //     periodo_id:'1',
        //     ofertasDisciplinas_id:'1',
        // })
        
        // await connection('periodo_ofertas_disciplinas').insert({
        //     id :'2',
        //     periodo_id:'1',
        //     ofertasDisciplinas_id:'2',
        // })

        // await connection('periodo_ofertas_disciplinas').insert({
        //     id :'3',
        //     periodo_id:'2',
        //     ofertasDisciplinas_id:'1',
        // })

        // await connection('periodo_ofertas_disciplinas').insert({
        //     id :'4',
        //     periodo_id:'2',
        //     ofertasDisciplinas_id:'2',
        // })

        // await connection('periodo_ofertas_disciplinas').insert({
        //     id :'5',
        //     periodo_id:'2',
        //     ofertasDisciplinas_id:'3',
        // })

        // await connection('periodo_ofertas_disciplinas').insert({
        //     id :'6',
        //     periodo_id:'2',
        //     ofertasDisciplinas_id:'4',
        // })

        // await connection('periodo_ofertas_disciplinas').insert({
        //     id :'7',
        //     periodo_id:'2',
        //     ofertasDisciplinas_id:'5',
        // })

        //-------------------------------

        const matricula_id = await connection('aluno')
        .where('id', id)
        .select('matricula_id');

        if(matricula_id[0] == null){
            return response.json("Aluno não encontrado")
        }

        const periodo_id = await connection('matricula')
        .where('id',matricula_id[0].matricula_id )
        .select('periodo_id');

        const [disciplinas] = await connection('periodo_ofertas_disciplinas')
        .where('periodo_id', periodo_id[0].periodo_id)
        .count();

        return response.json(disciplinas['count(*)'])
    }

}