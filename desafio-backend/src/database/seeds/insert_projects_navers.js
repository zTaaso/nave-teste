const uuids = require('./mock/mock_uuids');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects_navers')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('projects_navers').insert([
        {
          id: 1,
          naver_id: uuids.navers.thiago,
          project_id: uuids.projects.api,
        },
        {
          id: 2,
          naver_id: uuids.navers.daniel,
          project_id: uuids.projects.api,
        },
        {
          id: 3,
          naver_id: uuids.navers.juliano,
          project_id: uuids.projects.website,
        },
      ]);
    });
};
