exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('games', (table) => {
    table.increments('id').primary();
    table.string('title').unique().notNullable();
    table.string('bgcover');
    table.string('releaseDate');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('games');
}