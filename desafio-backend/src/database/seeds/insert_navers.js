const uuids = require('./mock/mock_uuids');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('navers')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('navers').insert([
        {
          id: uuids.navers.thiago,
          name: 'Thiago Afonso',
          job_role: 'Estagiário Back-end',
          birthdate: new Date('02/27/2003'),
          admission_date: new Date('03/20/2021'),
        },
        {
          id: uuids.navers.daniel,
          name: 'Daniel Souza',
          job_role: 'Back-end Developer',
          birthdate: new Date('10/30/1994'),
          admission_date: new Date('10/01/2016'),
        },
        {
          id: uuids.navers.juliano,
          name: 'Juliano Reis',
          job_role: 'Front-end Developer',
          birthdate: new Date('05/14/1995'),
          admission_date: new Date('02/04/2018'),
        },
      ]);
    });
};
