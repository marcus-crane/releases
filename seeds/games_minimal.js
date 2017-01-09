exports.seed = function(knex, Promise) {
  return knex('games').del()
    .then(function () {
      return Promise.all([
        knex('games').insert({ title: 'Dragon Quest VIII: Journey of the Cursed King', bgcover: '/img/bgcover/dragon_quest_viii.jpg', releaseDate: 'January 20, 2017' }),
        knex('games').insert({ title: 'Gravity Rush 2', bgcover: '/img/bgcover/gravity_rush_2.jpg', releaseDate: 'January 20, 2017' }),
        knex('games').insert({ title: 'Kingdom Hearts HD 2.8 Final Chapter Prologue', bgcover: '/img/bgcover/kingdom_hearts_hd_2.8.jpg', releaseDate: 'January 24, 2017' }),
        knex('games').insert({ title: 'Resident Evil 7: Biohazard', bgcover: '/img/bgcover/resident_evil_7.jpg', releaseDate: 'January 24, 2017' }),
        knex('games').insert({ title: 'Tales of Berseria', bgcover: '/img/bgcover/tales_of_berseria.jpg', releaseDate: 'January 24, 2017' }),
        knex('games').insert({ title: 'Yakuza 0', bgcover: '/img/bgcover/yakuza_0.jpg', releaseDate: 'January 24, 2017' }),
        knex('games').insert({ title: 'Nioh', bgcover: '/img/bgcover/nioh.jpg', releaseDate: 'February 9, 2017' }),
        knex('games').insert({ title: 'For Honor', bgcover: '/img/bgcover/for_honor.jpg', releaseDate: 'February 14, 2017' }),
        knex('games').insert({ title: 'Horizon: Zero Dawn', bgcover: '/img/bgcover/horizon_zero_dawn.jpg', releaseDate: 'February 28, 2017' }),
        knex('games').insert({ title: 'NieR: Automata', bgcover: '/img/bgcover/nier_automata.jpg', releaseDate: 'March 7, 2017' }),
        knex('games').insert({ title: 'Tom Clancy\'s Ghost Recon: Wildlands', bgcover: '/img/bgcover/tom_clancys_ghost_recon_wildlands.jpg', releaseDate: 'March 7, 2017' }),
        knex('games').insert({ title: 'Mass Effect: Andromeda', bgcover: '/img/bgcover/mass_effect_andromeda.jpg', releaseDate: 'March 23, 2017' }),
        knex('games').insert({ title: 'Persona 5', bgcover: '/img/bgcover/mass_effect_andromeda.jpg', releaseDate: 'March 23, 2017' }),
        knex('games').insert({ title: 'Yooka-Laylee', bgcover: '/img/bgcover/yooka_laylee.jpg', releaseDate: 'April 11, 2017' }),
        knex('games').insert({ title: 'Dragon Quest Heroes II', bgcover: '/img/bgcover/dragon_quest_heroes_2.jpg', releaseDate: 'April 25, 2017' }),

      ]);
    });
}
