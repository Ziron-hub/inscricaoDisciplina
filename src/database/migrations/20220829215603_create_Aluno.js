/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return knex.schema.createTable('aluno', function(table){
        table.string('id').primary();
        table.string('matricula_id').notNullable()

        table.foreign('matricula_id').references('id').inTable('matricula')
        table.foreign('id').references('id').inTable('usuario')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('aluno')
};
