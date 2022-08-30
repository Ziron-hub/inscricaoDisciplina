/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return knex.schema.createTable('ofertaDisciplina', function(table){
        table.string('id').primary();
        table.string('nome').notNullable()
        table.bigInteger('cod_disciplina').notNullable()
        table.string('disciplina_id').notNullable()

        table.foreign('cod_disciplina').references('codigo').inTable('disciplina')
        table.foreign('disciplina_id').references('id').inTable('disciplina')

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('ofertaDisciplina')
};
