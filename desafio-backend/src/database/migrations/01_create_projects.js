const uuidRaw = require('../../util/uuidGenerationRaw');

async function up(knex) {
  return knex.schema.createTable('projects', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw(uuidRaw));
    table.string('name').notNullable();

    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
  });
}

async function down(knex) {
  return knex.schema.dropTable('projects');
}

module.exports = { up, down };
