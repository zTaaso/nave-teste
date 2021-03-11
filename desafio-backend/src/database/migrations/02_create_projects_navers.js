async function up(knex) {
  return knex.schema.createTable('projects_navers', (table) => {
    table.increments('id').primary();

    table
      .uuid('project_id')
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    table
      .uuid('naver_id')
      .notNullable()
      .references('id')
      .inTable('navers')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

async function down(knex) {
  return knex.schema.dropTable('projects_navers');
}

module.exports = { up, down };
