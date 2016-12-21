exports.seed = function(knex, Promise) {
  return knex('games').del()
    .then(function () {
      return Promise.all([
        knex('games').insert({id: 1, gb_id: '', title: '', description: '', cover_art: '', background_art: '', developer: '', publisher: '', releaseDay: '', releaseMonth: '', releaseYear: ''}),
        knex('games').insert({id: 2, gb_id: '', title: '', description: '', cover_art: '', background_art: '', developer: '', publisher: '', releaseDay: '', releaseMonth: '', releaseYear: ''}),
        knex('games').insert({id: 3, gb_id: '', title: '', description: '', cover_art: '', background_art: '', developer: '', publisher: '', releaseDay: '', releaseMonth: '', releaseYear: ''})
      ]);
    });
};
