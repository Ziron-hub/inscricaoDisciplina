/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return knex.schema.createTable('curso', function(table){
        table.string('id').primary();
        table.string('nome').notNullable()
        table.string('admDepartamento_id').notNullable()
 
        table.foreign('admDepartamento_id').references('id').inTable('admDepartamento')

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('curso')
};
