exports.seed = function(knex, Promise) {
  return knex('games').del()
    .then(function () {
      return Promise.all([
        // knex('games').insert({ title: 'Gravity Rush 2', bgcover: 'http://files.thingsima.de/img/bgcover/gravity_rush_2.jpg', releaseDate: 'January 18 2017' }),
        knex('games').insert({ title: 'Dragon Quest VIII: Journey of the Cursed King', bgcover: 'http://files.thingsima.de/img/bgcover/dragon_quest_viii.jpg', releaseDate: 'January 21 2017' }),
        knex('games').insert({ title: 'Kingdom Hearts HD 2.8 Final Chapter Prologue', bgcover: 'http://files.thingsima.de/img/bgcover/kingdom_hearts_hd_2.8.jpg', releaseDate: 'January 24 2017' }),
        knex('games').insert({ title: 'Resident Evil 7: Biohazard', bgcover: 'http://files.thingsima.de/img/bgcover/resident_evil_7.jpg', releaseDate: 'January 24 2017' }),
        knex('games').insert({ title: 'Yakuza 0', bgcover: 'http://files.thingsima.de/img/bgcover/yakuza_0.jpg', releaseDate: 'January 24 2017' }),
        knex('games').insert({ title: 'Digimon World: Next Order', bgcover: 'http://files.thingsima.de/img/bgcover/digimon_world_next_order.jpg', releaseDate: 'January 27 2017' }),
        knex('games').insert({ title: 'Tales of Berseria', bgcover: 'http://files.thingsima.de/img/bgcover/tales_of_berseria.jpg', releaseDate: 'January 27 2017' }),
        knex('games').insert({ title: 'Nioh', bgcover: 'http://files.thingsima.de/img/bgcover/nioh.jpg', releaseDate: 'February 8 2017' }),
        knex('games').insert({ title: 'For Honor', bgcover: 'http://files.thingsima.de/img/bgcover/for_honor.jpg', releaseDate: 'February 14 2017' }),
        knex('games').insert({ title: 'Sniper Elite 4', bgcover: 'http://files.thingsima.de/img/bgcover/sniper_elite_4.jpg', releaseDate: 'February 14 2017' }),
        knex('games').insert({ title: 'Dragon Ball Fusions', bgcover: 'http://files.thingsima.de/img/bgcover/dragon_ball_fusions.jpg', releaseDate: 'February 17 2017' }),
        knex('games').insert({ title: 'Halo Wars 2', bgcover: 'http://files.thingsima.de/img/bgcover/halo_wars_2.jpg', releaseDate: 'February 21 2017' }),
        knex('games').insert({ title: 'LEGO Worlds', bgcover: 'http://files.thingsima.de/img/bgcover/lego_worlds.jpg', releaseDate: 'February 22 2017' }),
        knex('games').insert({ title: 'Berserk and the Band of the Hawk', bgcover: 'http://files.thingsima.de/img/bgcover/berserk_and_the_band_of_the_hawk.jpg', releaseDate: 'February 24 2017' }),
        knex('games').insert({ title: 'South Park: The Fractured But Whole', bgcover: 'http://files.thingsima.de/img/bgcover/south_park_the_fractured_but_whole.jpg', releaseDate: 'February 24 2017' }),
        knex('games').insert({ title: 'Torment: Tides of Numenera', bgcover: 'http://files.thingsima.de/img/bgcover/torment_tides_of_numenera.jpg', releaseDate: 'February 28 2017' }),
        knex('games').insert({ title: 'Horizon: Zero Dawn', bgcover: 'http://files.thingsima.de/img/bgcover/horizon_zero_dawn.jpg', releaseDate: 'March 1 2017' }),
        knex('games').insert({ title: 'Nintendo Switch', bgcover: 'http://files.thingsima.de/img/bgcover/switch.jpg', releaseDate: 'March 3 2017' }),
        knex('games').insert({ title: 'The Legend of Zelda: Breath of the Wild', bgcover: 'http://files.thingsima.de/img/bgcover/the_legend_of_zelda_breath_of_the_wild.jpg', releaseDate: 'March 3 2017'}),
        knex('games').insert({ title: 'Tom Clancy\'s Ghost Recon: Wildlands', bgcover: 'http://files.thingsima.de/img/bgcover/tom_clancys_ghost_recon_wildlands.jpg', releaseDate: 'March 7 2017' }),
        knex('games').insert({ title: 'NieR: Automata', bgcover: 'http://files.thingsima.de/img/bgcover/nier_automata.jpg', releaseDate: 'March 10 2017' }),
        knex('games').insert({ title: 'Danganronpa 1 & 2 Reload', bgcover: 'http://files.thingsima.de/img/bgcover/danganronpa_1_2_reload.jpg', releaseDate: 'March, 17 2017' }),
        knex('games').insert({ title: 'Mass Effect: Andromeda', bgcover: 'http://files.thingsima.de/img/bgcover/mass_effect_andromeda.jpg', releaseDate: 'March 23 2017' }),
        knex('games').insert({ title: 'Kingdom Hearts HD 1.5 + 2.5 ReMIX', bgcover: 'http://files.thingsima.de/img/bgcover/kingdom_hearts_hd_remix.jpg', releaseDate: 'March 31 2017' }),
        knex('games').insert({ title: 'Persona 5', bgcover: 'http://files.thingsima.de/img/bgcover/persona_5.jpg', releaseDate: 'April 4 2017' }),
        knex('games').insert({ title: 'Yooka-Laylee', bgcover: 'http://files.thingsima.de/img/bgcover/yooka_laylee.jpg', releaseDate: 'April 11 2017' }),
        knex('games').insert({ title: 'The Silver Case', bgcover: 'http://files.thingsima.de/img/bgcover/the_silver_case.jpg', releaseDate: 'April 21 2017' }),
        knex('games').insert({ title: 'Dragon Quest Heroes II', bgcover: 'http://files.thingsima.de/img/bgcover/dragon_quest_heroes_2.jpg', releaseDate: 'April 28 2017' }),
      ]);
    });
}
