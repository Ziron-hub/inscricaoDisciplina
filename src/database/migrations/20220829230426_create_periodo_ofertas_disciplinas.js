/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return knex.schema.createTable('periodo_ofertas_disciplinas', function(table){
        table.string('id').primary();
        table.string('periodo_id').notNullable()
        table.string('ofertasDisciplinas_id').notNullable()

        table.foreign('periodo_id').references('id').inTable('periodo')
        table.foreign('ofertasDisciplinas_id').references('id').inTable('ofertaDisciplina')

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('periodo_ofertas_disciplinas')
};
