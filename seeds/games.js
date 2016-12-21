exports.seed = function(knex, Promise) {
  return knex('games').del()
    .then(function () {
      return Promise.all([
        knex('games').insert({ id: 1, gb_id: '3030-41355', title: 'The Legend of Zelda: Breath of the Wild', description: 'The first original installment of the Zelda series in HD on the Wii U and NX goes back to open world design with a focus on free exploration of a large scale environment and dangerous enemies.', boxart: '/img/boxart/breath_of_the_wild.jpg', bgcover: '/img/bgcover/breath_of_the_wild.jpg', developer: 'Nintendo EPD', publisher: 'Nintendo', releaseYear: 2017 }),
        knex('games').insert({ id: 2, gb_id: '3030-46631', title: 'Mass Effect: Andromeda', description: 'The next installment of the Mass Effect franchise is in development at BioWare Montreal.', boxart: '/img/boxart/mass_effect_andromeda.jpg', bgcover: '/img/bgcover/mass_effect_andromeda.jpg', developer: 'BioWare', publisher: 'Electronic Arts', releaseMonth: 'March', releaseYear: 2017 }),
        knex('games').insert({ id: 3, gb_id: '3030-49968', title: 'South Park: The Fractured but Whole', description: 'South Park takes on superheroes in this follow up to The Stick of Truth.', boxart: '/img/boxart/south_park_the_fractured_but_whole.jpg', bgcover: '/img/bgcover/south_park_the_fractured_but_whole.jpg', developer: 'Ubisoft', publisher: 'Ubisoft', releaseQuarter: 'Q1', releaseYear: 2017 })
      ]);
    });
}
