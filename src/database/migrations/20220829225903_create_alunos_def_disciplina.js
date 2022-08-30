/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return knex.schema.createTable('alunosDefDisciplina', function(table){
        table.string('id').primary();
        table.string('aluno_id').notNullable()
        table.string('ofertaDisciplina_id').notNullable()

        table.foreign('aluno_id').references('id').inTable('aluno')
        table.foreign('ofertaDisciplina_id').references('id').inTable('ofertaDisciplina')

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('alunosDefDisciplina')
};
