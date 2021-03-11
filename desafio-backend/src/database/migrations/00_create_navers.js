async function up(knex) {
  return knex.schema.createTable('navers', (table) => {
    // table.increments('id').primary();
    table.uuid('id').primary();
    table.string('name').notNullable();
    table.string('job_role').notNullable();
    table.date('birthdate').notNullable();
    table.date('admission_date').notNullable();

    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
  });
}

async function down(knex) {
  return knex.schema.dropTable('navers');
}

module.exports = { up, down };
