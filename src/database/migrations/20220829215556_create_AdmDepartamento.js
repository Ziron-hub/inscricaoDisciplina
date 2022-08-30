/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return knex.schema.createTable('admDepartamento', function(table){
        table.string('id').primary();
        table.string('cargo').notNullable()

        table.foreign('id').references('id').inTable('usuario')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('admDepartamento')
};
