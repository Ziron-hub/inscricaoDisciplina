/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return knex.schema.createTable('periodo', function(table){
        table.string('id').primary();
        table.bigInteger('ano').notNullable()
        table.integer('creditos').notNullable()
        table.integer('maxCredito').notNullable()
        table.integer('semestre').notNullable()

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('periodo')
};
