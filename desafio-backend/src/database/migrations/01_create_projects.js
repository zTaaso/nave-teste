async function up(knex) {
  return knex.schema.createTable('projects', (table) => {
    table.uuid('id').primary();
    table.string('name').notNullable();

    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
  });
}

async function down(knex) {
  return knex.schema.dropTable('projects');
}

module.exports = { up, down };
