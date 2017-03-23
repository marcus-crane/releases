'use strict'

exports.up = function (r, connection) {
  return Promise.all([
    r.table('games').insert([
            { title: 'Gravity Rush 2', releaseDate: '2017-01-18' },
            { title: 'Dragon Quest VIII: Journey of the Cursed King', releaseDate: '2017-01-21' },
            { title: 'Kingdom Hearts HD 2.8 Final Chapter Prologue', releaseDate: '2017-01-24' },
            { title: 'Resident Evil 7: Biohazard', releaseDate: '2017-01-24' },
            { title: 'Yakuza 0', releaseDate: '2017-01-24' },
            { title: 'Digimon World: Next Order', releaseDate: '2017-01-27' },
            { title: 'Tales of Berseria', releaseDate: '2017-01-27' },
            { title: 'Nioh', releaseDate: '2017-02-08' },
            { title: 'For Honor', releaseDate: '2017-02-14' },
            { title: 'Sniper Elite 4', releaseDate: '2017-02-14' },
            { title: 'Dragon Ball Fusions', releaseDate: '2017-02-17' },
            { title: 'Halo Wars 2', releaseDate: '2017-02-21' },
            { title: 'LEGO Worlds', releaseDate: '2017-02-22' },
            { title: 'Berserk and the Band of the Hawk', releaseDate: '2017-02-24' },
            { title: 'South Park: The Fractured But Whole', releaseDate: '2017-02-24' },
            { title: 'Torment: Tides of Numenera', releaseDate: '2017-02-28' },
            { title: 'Horizon: Zero Dawn', releaseDate: '2017-03-01' },
            { title: 'Nintendo Switch', releaseDate: '2017-03-03' },
            { title: 'The Legend of Zelda: Breath of the Wild', releaseDate: '2017-03-03' },
            { title: 'Tom Clancy\'s Ghost Recon: Wildlands', releaseDate: '2017-03-07' },
            { title: 'NieR: Automata', releaseDate: '2017-03-10' },
            { title: 'Danganronpa 1 & 2 Reload', releaseDate: '2017-03-17' },
            { title: 'Mass Effect: Andromeda', releaseDate: '2017-03-23' },
            { title: 'Kingdom Hearts HD 1.5 + 2.5 ReMIX', releaseDate: '2017-03-31' },
            { title: 'Persona 5', releaseDate: '2017-04-04' },
            { title: 'Yooka-Laylee', releaseDate: '2017-04-11' },
            { title: 'The Silver Case', releaseDate: '2017-04-21' },
            { title: 'Dragon Quest Heroes II', releaseDate: '2017-04-28' }
    ]).run(connection)
  ])
}

exports.down = function (r, connection) {
  return Promise.all([
    r.table('games').delete().run(connection)
  ])
}
