/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return knex.schema.createTable('disciplina', function(table){
        table.string('id').primary();
        table.string('nome').notNullable()
        table.bigInteger('codigo').notNullable()
        table.integer('numero_vagas').notNullable()
        table.string('curso_id').notNullable()
        table.integer('perfil').notNullable()
        
        table.foreign('curso_id').references('id').inTable('curso')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('disciplina')
};
