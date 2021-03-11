const uuids = require('./mock/mock_uuids');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: uuids.projects.website,
          name: 'Criação de nova página no website',
        },
        {
          id: uuids.projects.api,
          name: 'Desenvolvimento de API REST',
        },
      ]);
    });
};
