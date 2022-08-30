/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return knex.schema.createTable('usuario', function(table){ 
        table.string('id').primary();
        table.string('nome').notNullable()
        table.string('cpf').notNullable()
        table.string('email').notNullable()
        table.string('senha').notNullable()

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('usuario')
};
