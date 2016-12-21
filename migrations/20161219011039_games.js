exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('games', (table) => {
    table.increments('id').primary();
    table.integer('gb_id').unique().notNullable();
    table.string('title').unique().notNullable();
    table.string('description');
    table.string('cover_art');
    table.string('background_art');
    table.string('developer');
    table.string('publisher');
    table.integer('releaseDay');
    table.integer('releaseMonth');
    table.integer('releaseYear');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('games');
};
