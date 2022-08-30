/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return knex.schema.createTable('matricula', function(table){
        table.string('id').primary();
        table.date('dataMatricula').notNullable()
        table.string('estadoMatricula').notNullable()
        table.string('curso_id').notNullable()
        table.bigInteger('RA').notNullable()
        table.bigInteger('IRA').notNullable()
        table.integer('perfil').notNullable()
        table.string('periodo_id').notNullable()

        table.foreign('periodo_id').references('id').inTable('periodo')
        table.foreign('curso_id').references('id').inTable('curso')

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('matricula')
};
