exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('games', (table) => {
    table.increments('id').primary();
    table.string('gb_id').unique().notNullable();
    table.string('title').unique().notNullable();
    table.string('description');
    table.string('boxart');
    table.string('bgcover');
    table.string('developer');
    table.string('publisher');
    table.string('releaseQuarter');
    table.integer('releaseDay');
    table.string('releaseMonth');
    table.integer('releaseYear');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('games');
}