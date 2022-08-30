const connection = require('../database/connection')

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
    }

}