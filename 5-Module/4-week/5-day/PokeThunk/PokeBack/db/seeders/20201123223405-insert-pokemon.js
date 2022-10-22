'use strict';
const { Pokemon } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Pokemon.bulkCreate([
      {
        number: 1,
        imageUrl: '/images/pokemon_snaps/1.svg',
        name: 'Bulbasaur',
        attack: 49,
        defense: 49,
        type: 'grass',
        moves: [
          'tackle',
          'vine whip'
        ],
        captured: true
      },
      {
        number: 2,
        imageUrl: '/images/pokemon_snaps/2.svg',
        name: 'Ivysaur',
        attack: 62,
        defense: 63,
        type: 'grass',
        moves: [
          'tackle',
          'vine whip',
          'razor leaf'
        ],
        captured: true
      },
      {
        number: 3,
        imageUrl: '/images/pokemon_snaps/3.svg',
        name: 'Venusaur',
        attack: 82,
        defense: 83,
        type: 'grass',
        moves: [
          'tackle',
          'vine whip',
          'razor leaf'
        ],
        captured: true
      },
      {
        number: 4,
        imageUrl: '/images/pokemon_snaps/4.svg',
        name: 'Charmander',
        attack: 52,
        defense: 43,
        type: 'fire',
        moves: [
          'scratch',
          'ember',
          'metal claw'
        ],
        captured: true
      },
      {
        number: 5,
        imageUrl: '/images/pokemon_snaps/5.svg',
        name: 'Charmeleon',
        attack: 64,
        defense: 58,
        type: 'fire',
        moves: [
          'scratch',
          'ember',
          'metal claw',
          'flamethrower'
        ],
        captured: true
      },
      {
        number: 6,
        imageUrl: '/images/pokemon_snaps/6.svg',
        name: 'Charizard',
        attack: 84,
        defense: 78,
        type: 'fire',
        moves: [
          'flamethrower',
          'wing attack',
          'slash',
          'metal claw'
        ],
        captured: true
      },
      {
        number: 7,
        imageUrl: '/images/pokemon_snaps/7.svg',
        name: 'Squirtle',
        attack: 48,
        defense: 65,
        type: 'water',
        moves: [
          'tackle',
          'bubble',
          'water gun'
        ],
        captured: true
      },
    ]);
    await Pokemon.bulkCreate([
      {
        number: 8,
        imageUrl: '/images/pokemon_snaps/8.svg',
        name: 'Wartortle',
        attack: 63,
        defense: 80,
        type: 'water',
        moves: [
          'tackle',
          'bubble',
          'water gun',
          'bite'
        ],
      },
      {
        number: 9,
        imageUrl: '/images/pokemon_snaps/9.svg',
        name: 'Blastoise',
        attack: 83,
        defense: 100,
        type: 'water',
        moves: [
          'hydro pump',
          'bubble',
          'water gun',
          'bite'
        ],
      },
      {
        number: 10,
        imageUrl: '/images/pokemon_snaps/10.svg',
        name: 'Caterpie',
        attack: 30,
        defense: 35,
        type: 'bug',
        moves: [
          'tackle'
        ],
      },
      {
        number: 12,
        imageUrl: '/images/pokemon_snaps/12.svg',
        name: 'Butterfree',
        attack: 45,
        defense: 50,
        type: 'bug',
        moves: [
          'confusion',
          'gust',
          'psybeam',
          'silver wind'
        ],
      },
      {
        number: 13,
        imageUrl: '/images/pokemon_snaps/13.svg',
        name: 'Weedle',
        attack: 35,
        defense: 30,
        type: 'bug',
        moves: [
          'poison sting'
        ],
      },
      {
        number: 16,
        imageUrl: '/images/pokemon_snaps/16.svg',
        name: 'Pidgey',
        attack: 45,
        defense: 40,
        type: 'normal',
        moves: [
          'tackle',
          'gust'
        ],
      },
      {
        number: 17,
        imageUrl: '/images/pokemon_snaps/17.svg',
        name: 'Pidgeotto',
        attack: 60,
        defense: 55,
        type: 'normal',
        moves: [
          'tackle',
          'gust',
          'wing attack'
        ],
      },
      {
        number: 18,
        imageUrl: '/images/pokemon_snaps/18.svg',
        name: 'Pidgeot',
        attack: 80,
        defense: 75,
        type: 'normal',
        moves: [
          'tackle',
          'gust',
          'wing attack'
        ],
      },
      {
        number: 19,
        imageUrl: '/images/pokemon_snaps/19.svg',
        name: 'Rattata',
        attack: 56,
        defense: 35,
        type: 'normal',
        moves: [
          'tackle',
          'hyper fang'
        ],
      },
      {
        number: 20,
        imageUrl: '/images/pokemon_snaps/20.svg',
        name: 'Raticate',
        attack: 81,
        defense: 60,
        type: 'normal',
        moves: [
          'tackle',
          'hyper fang'
        ],
      },
      {
        number: 21,
        imageUrl: '/images/pokemon_snaps/21.svg',
        name: 'Spearow',
        attack: 60,
        defense: 30,
        type: 'normal',
        moves: [
          'peck'
        ],
      },
      {
        number: 22,
        imageUrl: '/images/pokemon_snaps/22.svg',
        name: 'Fearow',
        attack: 90,
        defense: 65,
        type: 'normal',
        moves: [
          'peck',
          'drill peck'
        ],
      },
      {
        number: 23,
        imageUrl: '/images/pokemon_snaps/23.svg',
        name: 'Ekans',
        attack: 60,
        defense: 44,
        type: 'poison',
        moves: [
          'poison sting',
          'bite'
        ],
      },
      {
        number: 24,
        imageUrl: '/images/pokemon_snaps/24.svg',
        name: 'Arbok',
        attack: 85,
        defense: 69,
        type: 'poison',
        moves: [
          'poison sting',
          'bite',
          'acid'
        ],
      },
      {
        number: 25,
        imageUrl: '/images/pokemon_snaps/25.svg',
        name: 'Pikachu',
        attack: 55,
        defense: 40,
        type: 'electric',
        moves: [
          'growl',
          'electro ball',
          'feint'
        ]
      },
      {
        number: 26,
        imageUrl: '/images/pokemon_snaps/26.svg',
        name: 'Raichu',
        attack: 90,
        defense: 55,
        type: 'electric',
        moves: [
          'thundershock',
          'thunderbolt'
        ],
      },
      {
        number: 27,
        imageUrl: '/images/pokemon_snaps/27.svg',
        name: 'Sandshrew',
        attack: 75,
        defense: 85,
        type: 'ground',
        moves: [
          'scratch',
          'poison sting'
        ],
      },
      {
        number: 28,
        imageUrl: '/images/pokemon_snaps/28.svg',
        name: 'Sandslash',
        attack: 100,
        defense: 110,
        type: 'ground',
        moves: [
          'scratch',
          'poison sting',
          'slash',
          'swift'
        ],
      },
      {
        number: 29,
        imageUrl: '/images/pokemon_snaps/29.svg',
        name: 'Nidorana',
        attack: 47,
        defense: 52,
        type: 'poison',
        moves: [
          'scratch'
        ],
      },
      {
        number: 31,
        imageUrl: '/images/pokemon_snaps/31.svg',
        name: 'Nidoqueen',
        attack: 82,
        defense: 87,
        type: 'poison',
        moves: [
          'scratch',
          'poison sting',
          'body slam',
          'superpower'
        ],
      },
      {
        number: 32,
        imageUrl: '/images/pokemon_snaps/32.svg',
        name: 'Nidoran',
        attack: 57,
        defense: 40,
        type: 'poison',
        moves: [
          'peck'
        ],
      },
      {
        number: 34,
        imageUrl: '/images/pokemon_snaps/34.svg',
        name: 'Nidoking',
        attack: 92,
        defense: 77,
        type: 'poison',
        moves: [
          'peck',
          'poison sting',
          'megahorn'
        ],
      },
      {
        number: 38,
        imageUrl: '/images/pokemon_snaps/38.svg',
        name: 'Ninetales',
        attack: 76,
        defense: 75,
        type: 'fire',
        moves: [
          'ember'
        ],
      },
      {
        number: 41,
        imageUrl: '/images/pokemon_snaps/41.svg',
        name: 'Zubat',
        attack: 45,
        defense: 35,
        type: 'poison',
        moves: [
          'astonish',
          'bite',
          'wing attack'
        ],
      },
      {
        number: 42,
        imageUrl: '/images/pokemon_snaps/42.svg',
        name: 'Golbat',
        attack: 80,
        defense: 70,
        type: 'poison',
        moves: [
          'poison fang',
          'bite',
          'wing attack',
          'air cutter'
        ],
      },
      {
        number: 46,
        imageUrl: '/images/pokemon_snaps/46.svg',
        name: 'Paras',
        attack: 70,
        defense: 55,
        type: 'bug',
        moves: [
          'scratch'
        ],
      },
      {
        number: 47,
        imageUrl: '/images/pokemon_snaps/47.svg',
        name: 'Parasect',
        attack: 95,
        defense: 80,
        type: 'bug',
        moves: [
          'scratch',
          'slash'
        ],
      },
      {
        number: 48,
        imageUrl: '/images/pokemon_snaps/48.svg',
        name: 'Venonat',
        attack: 55,
        defense: 50,
        type: 'bug',
        moves: [
          'tackle',
          'confusion'
        ],
      },
      {
        number: 49,
        imageUrl: '/images/pokemon_snaps/49.svg',
        name: 'Venomoth',
        attack: 65,
        defense: 60,
        type: 'bug',
        moves: [
          'psybeam',
          'psychic',
          'confusion',
          'gust'
        ],
      },
      {
        number: 50,
        imageUrl: '/images/pokemon_snaps/50.svg',
        name: 'Diglett',
        attack: 55,
        defense: 25,
        type: 'ground',
        moves: [
          'scratch'
        ],
      },
      {
        number: 51,
        imageUrl: '/images/pokemon_snaps/51.svg',
        name: 'Dugtrio',
        attack: 80,
        defense: 50,
        type: 'ground',
        moves: [
          'scratch',
          'slash',
          'earthquake'
        ],
      },
      {
        number: 52,
        imageUrl: '/images/pokemon_snaps/52.svg',
        name: 'Meowth',
        attack: 45,
        defense: 35,
        type: 'normal',
        moves: [
          'scratch',
          'bite'
        ],
      },
      {
        number: 53,
        imageUrl: '/images/pokemon_snaps/53.svg',
        name: 'Persian',
        attack: 70,
        defense: 60,
        type: 'normal',
        moves: [
          'scratch',
          'bite',
          'slash'
        ],
      },
      {
        number: 54,
        imageUrl: '/images/pokemon_snaps/54.svg',
        name: 'Psyduck',
        attack: 52,
        defense: 48,
        type: 'water',
        moves: [
          'scratch',
          'confusion'
        ],
      },
      {
        number: 55,
        imageUrl: '/images/pokemon_snaps/55.svg',
        name: 'Golduck',
        attack: 82,
        defense: 78,
        type: 'water',
        moves: [
          'scratch',
          'confusion',
          'hydro pump'
        ],
      },
      {
        number: 56,
        imageUrl: '/images/pokemon_snaps/56.svg',
        name: 'Mankey',
        attack: 80,
        defense: 35,
        type: 'fighting',
        moves: [
          'scratch',
          'low kick',
          'karate chop'
        ],
      },
      {
        number: 57,
        imageUrl: '/images/pokemon_snaps/57.svg',
        name: 'Primeape',
        attack: 105,
        defense: 60,
        type: 'fighting',
        moves: [
          'scratch',
          'low kick',
          'karate chop',
          'cross chop'
        ],
      },
      {
        number: 59,
        imageUrl: '/images/pokemon_snaps/59.svg',
        name: 'Arcanine',
        attack: 110,
        defense: 80,
        type: 'fire',
        moves: [
          'bite',
          'ember'
        ],
      },
      {
        number: 60,
        imageUrl: '/images/pokemon_snaps/60.svg',
        name: 'Poliwag',
        attack: 50,
        defense: 40,
        type: 'water',
        moves: [
          'bubble',
          'water gun'
        ],
      },
      {
        number: 62,
        imageUrl: '/images/pokemon_snaps/62.svg',
        name: 'Poliwrath',
        attack: 85,
        defense: 95,
        type: 'water',
        moves: [
          'water gun'
        ],
      },
      {
        number: 65,
        imageUrl: '/images/pokemon_snaps/65.svg',
        name: 'Alakazam',
        attack: 50,
        defense: 45,
        type: 'psychic',
        moves: [
          'confusion',
          'psybeam',
          'psychic'
        ],
      },
      {
        number: 66,
        imageUrl: '/images/pokemon_snaps/66.svg',
        name: 'Machop',
        attack: 80,
        defense: 50,
        type: 'fighting',
        moves: [
          'low kick',
          'karate chop'
        ],
      },
      {
        number: 68,
        imageUrl: '/images/pokemon_snaps/68.svg',
        name: 'Machamp',
        attack: 130,
        defense: 80,
        type: 'fighting',
        moves: [
          'low kick',
          'karate chop',
          'cross chop',
          'dynamicpunch'
        ],
      },
      {
        number: 69,
        imageUrl: '/images/pokemon_snaps/69.svg',
        name: 'Bellsprout',
        attack: 75,
        defense: 35,
        type: 'grass',
        moves: [
          'vine whip'
        ],
      },
      {
        number: 71,
        imageUrl: '/images/pokemon_snaps/71.svg',
        name: 'Victreebel',
        attack: 105,
        defense: 65,
        type: 'grass',
        moves: [
          'vine whip',
          'razor leaf'
        ],
      },
      {
        number: 72,
        imageUrl: '/images/pokemon_snaps/72.svg',
        name: 'Tentacool',
        attack: 40,
        defense: 35,
        type: 'water',
        moves: [
          'poison sting',
          'constrict',
          'acid',
          'bubblebeam'
        ],
      },
      {
        number: 73,
        imageUrl: '/images/pokemon_snaps/73.svg',
        name: 'Tentacruel',
        attack: 70,
        defense: 65,
        type: 'water',
        moves: [
          'hydro pump',
          'constrict',
          'acid',
          'bubblebeam'
        ],
      },
      {
        number: 74,
        imageUrl: '/images/pokemon_snaps/74.svg',
        name: 'Geodude',
        attack: 80,
        defense: 100,
        type: 'rock',
        moves: [
          'tackle',
          'rock throw'
        ],
      },
      {
        number: 76,
        imageUrl: '/images/pokemon_snaps/76.svg',
        name: 'Golem',
        attack: 110,
        defense: 130,
        type: 'rock',
        moves: [
          'tackle',
          'rock throw',
          'earthquake'
        ],
      },
      {
        number: 77,
        imageUrl: '/images/pokemon_snaps/77.svg',
        name: 'Ponyta',
        attack: 85,
        defense: 55,
        type: 'fire',
        moves: [
          'ember',
          'stomp'
        ],
      },
      {
        number: 78,
        imageUrl: '/images/pokemon_snaps/78.svg',
        name: 'Rapidash',
        attack: 100,
        defense: 70,
        type: 'fire',
        moves: [
          'ember',
          'stomp',
          'fire blast'
        ],
      },
      {
        number: 79,
        imageUrl: '/images/pokemon_snaps/79.svg',
        name: 'Slowpoke',
        attack: 65,
        defense: 65,
        type: 'water',
        moves: [
          'tackle',
          'water gun',
          'confusion',
          'headbutt'
        ],
      },
      {
        number: 80,
        imageUrl: '/images/pokemon_snaps/80.svg',
        name: 'Slowbro',
        attack: 75,
        defense: 110,
        type: 'water',
        moves: [
          'psychic',
          'water gun',
          'confusion',
          'headbutt'
        ],
      },
      {
        number: 81,
        imageUrl: '/images/pokemon_snaps/81.svg',
        name: 'Magnemite',
        attack: 35,
        defense: 70,
        type: 'electric',
        moves: [
          'tackle',
          'thundershock',
          'spark'
        ],
      },
      {
        number: 82,
        imageUrl: '/images/pokemon_snaps/82.svg',
        name: 'Magneton',
        attack: 60,
        defense: 95,
        type: 'electric',
        moves: [
          'tackle',
          'thundershock',
          'spark',
          'zap cannon'
        ],
      },
      {
        number: 83,
        imageUrl: '/images/pokemon_snaps/83.svg',
        name: 'Farfetch\'d',
        attack: 65,
        defense: 55,
        type: 'normal',
        moves: [
          'peck',
          'slash'
        ],
      },
      {
        number: 84,
        imageUrl: '/images/pokemon_snaps/84.svg',
        name: 'Doduo',
        attack: 85,
        defense: 45,
        type: 'normal',
        moves: [
          'peck'
        ],
      },
      {
        number: 85,
        imageUrl: '/images/pokemon_snaps/85.svg',
        name: 'Dodrio',
        attack: 110,
        defense: 70,
        type: 'normal',
        moves: [
          'peck',
          'drill peck'
        ],
      },
      {
        number: 86,
        imageUrl: '/images/pokemon_snaps/86.svg',
        name: 'Seel',
        attack: 45,
        defense: 55,
        type: 'water',
        moves: [
          'headbutt',
          'icy wind',
          'aurora beam'
        ],
      },
      {
        number: 87,
        imageUrl: '/images/pokemon_snaps/87.svg',
        name: 'Dewgong',
        attack: 70,
        defense: 80,
        type: 'water',
        moves: [
          'ice beam',
          'headbutt',
          'icy wind',
          'aurora beam'
        ],
      },
      {
        number: 88,
        imageUrl: '/images/pokemon_snaps/88.svg',
        name: 'Grimer',
        attack: 80,
        defense: 50,
        type: 'poison',
        moves: [
          'pound',
          'sludge'
        ],
      },
      {
        number: 89,
        imageUrl: '/images/pokemon_snaps/89.svg',
        name: 'Muk',
        attack: 105,
        defense: 75,
        type: 'poison',
        moves: [
          'pound',
          'sludge',
          'sludge bomb'
        ],
      },
      {
        number: 91,
        imageUrl: '/images/pokemon_snaps/91.svg',
        name: 'Cloyster',
        attack: 95,
        defense: 180,
        type: 'water',
        moves: [
          'aurora beam'
        ],
      },
      {
        number: 92,
        imageUrl: '/images/pokemon_snaps/92.svg',
        name: 'Gastly',
        attack: 35,
        defense: 30,
        type: 'ghost',
        moves: [
          'tackle',
          'lick'
        ],
      },
      {
        number: 94,
        imageUrl: '/images/pokemon_snaps/94.svg',
        name: 'Gengar',
        attack: 65,
        defense: 60,
        type: 'ghost',
        moves: [
          'tackle',
          'lick',
          'shadow punch',
          'shadow ball'
        ],
      },
      {
        number: 95,
        imageUrl: '/images/pokemon_snaps/95.svg',
        name: 'Onix',
        attack: 45,
        defense: 160,
        type: 'rock',
        moves: [
          'iron tail',
          'rock throw',
          'dragonbreath',
          'slam'
        ],
      },
      {
        number: 96,
        imageUrl: '/images/pokemon_snaps/96.svg',
        name: 'Drowzee',
        attack: 48,
        defense: 45,
        type: 'psychic',
        moves: [
          'pound',
          'confusion',
          'headbutt'
        ],
      },
      {
        number: 97,
        imageUrl: '/images/pokemon_snaps/97.svg',
        name: 'Hypno',
        attack: 73,
        defense: 70,
        type: 'psychic',
        moves: [
          'pound',
          'confusion',
          'headbutt',
          'psychic'
        ],
      },
      {
        number: 98,
        imageUrl: '/images/pokemon_snaps/98.svg',
        name: 'Krabby',
        attack: 105,
        defense: 90,
        type: 'water',
        moves: [
          'bubble',
          'vicegrip',
          'mud shot',
          'stomp'
        ],
      },
      {
        number: 99,
        imageUrl: '/images/pokemon_snaps/99.svg',
        name: 'Kingler',
        attack: 130,
        defense: 115,
        type: 'water',
        moves: [
          'stomp',
          'crabhammer',
          'vicegrip',
          'mud shot'
        ],
      },
      {
        number: 100,
        imageUrl: '/images/pokemon_snaps/100.svg',
        name: 'Voltorb',
        attack: 30,
        defense: 50,
        type: 'electric',
        moves: [
          'tackle',
          'spark'
        ],
      },
      {
        number: 101,
        imageUrl: '/images/pokemon_snaps/101.svg',
        name: 'Electrode',
        attack: 50,
        defense: 70,
        type: 'electric',
        moves: [
          'tackle',
          'spark',
          'swift'
        ],
      },
      {
        number: 103,
        imageUrl: '/images/pokemon_snaps/103.svg',
        name: 'Exeggutor',
        attack: 95,
        defense: 85,
        type: 'grass',
        moves: [
          'confusion',
          'stomp',
          'egg bomb'
        ],
      },
      {
        number: 104,
        imageUrl: '/images/pokemon_snaps/104.svg',
        name: 'Cubone',
        attack: 50,
        defense: 95,
        type: 'ground',
        moves: [
          'bone club',
          'headbutt'
        ],
      },
      {
        number: 105,
        imageUrl: '/images/pokemon_snaps/105.svg',
        name: 'Marowak',
        attack: 80,
        defense: 110,
        type: 'ground',
        moves: [
          'bone club',
          'headbutt'
        ],
      },
      {
        number: 106,
        imageUrl: '/images/pokemon_snaps/106.svg',
        name: 'Hitmonlee',
        attack: 120,
        defense: 53,
        type: 'fighting',
        moves: [
          'rolling kick'
        ],
      },
      {
        number: 107,
        imageUrl: '/images/pokemon_snaps/107.svg',
        name: 'Hitmonchan',
        attack: 105,
        defense: 79,
        type: 'fighting',
        moves: [
          'mega punch',
          'ice punch',
          'fire punch',
          'sky uppercut'
        ],
      },
      {
        number: 108,
        imageUrl: '/images/pokemon_snaps/108.svg',
        name: 'Lickitung',
        attack: 55,
        defense: 75,
        type: 'normal',
        moves: [
          'lick',
          'stomp',
          'slam'
        ],
      },
      {
        number: 109,
        imageUrl: '/images/pokemon_snaps/109.svg',
        name: 'Koffing',
        attack: 65,
        defense: 95,
        type: 'poison',
        moves: [
          'tackle',
          'smog',
          'sludge'
        ],
      },
      {
        number: 110,
        imageUrl: '/images/pokemon_snaps/110.svg',
        name: 'Weezing',
        attack: 90,
        defense: 120,
        type: 'poison',
        moves: [
          'tackle',
          'smog',
          'sludge'
        ],
      },
      {
        number: 111,
        imageUrl: '/images/pokemon_snaps/111.svg',
        name: 'Rhyhorn',
        attack: 85,
        defense: 95,
        type: 'ground',
        moves: [
          'horn attack',
          'stomp'
        ],
      },
      {
        number: 112,
        imageUrl: '/images/pokemon_snaps/112.svg',
        name: 'Rhydon',
        attack: 130,
        defense: 120,
        type: 'ground',
        moves: [
          'horn attack',
          'stomp',
          'earthquake',
          'megahorn'
        ],
      },
      {
        number: 113,
        imageUrl: '/images/pokemon_snaps/113.svg',
        name: 'Chansey',
        attack: 5,
        defense: 5,
        type: 'normal',
        moves: [
          'pound',
          'egg bomb'
        ],
      },
      {
        number: 114,
        imageUrl: '/images/pokemon_snaps/114.svg',
        name: 'Tangela',
        attack: 55,
        defense: 115,
        type: 'grass',
        moves: [
          'constrict',
          'vine whip',
          'slam'
        ],
      },
      {
        number: 115,
        imageUrl: '/images/pokemon_snaps/115.svg',
        name: 'Kangaskhan',
        attack: 95,
        defense: 80,
        type: 'normal',
        moves: [
          'bite',
          'mega punch',
          'dizzy punch'
        ],
      },
      {
        number: 116,
        imageUrl: '/images/pokemon_snaps/116.svg',
        name: 'Horsea',
        attack: 40,
        defense: 70,
        type: 'water',
        moves: [
          'bubble',
          'water gun',
          'twister'
        ],
      },
      {
        number: 117,
        imageUrl: '/images/pokemon_snaps/117.svg',
        name: 'Seadra',
        attack: 65,
        defense: 95,
        type: 'water',
        moves: [
          'bubble',
          'water gun',
          'twister',
          'hydro pump'
        ],
      },
      {
        number: 118,
        imageUrl: '/images/pokemon_snaps/118.svg',
        name: 'Goldeen',
        attack: 67,
        defense: 60,
        type: 'water',
        moves: [
          'peck',
          'horn attack'
        ],
      },
      {
        number: 119,
        imageUrl: '/images/pokemon_snaps/119.svg',
        name: 'Seaking',
        attack: 92,
        defense: 65,
        type: 'water',
        moves: [
          'peck',
          'horn attack',
          'waterfall',
          'megahorn'
        ],
      },
      {
        number: 121,
        imageUrl: '/images/pokemon_snaps/121.svg',
        name: 'Starmie',
        attack: 75,
        defense: 85,
        type: 'water',
        moves: [
          'water gun',
          'swift'
        ],
      },
      {
        number: 122,
        imageUrl: '/images/pokemon_snaps/122.svg',
        name: 'Mr. mime',
        attack: 45,
        defense: 65,
        type: 'psychic',
        moves: [
          'confusion',
          'magical leaf',
          'psybeam',
          'psychic'
        ],
      },
      {
        number: 123,
        imageUrl: '/images/pokemon_snaps/123.svg',
        name: 'Scyther',
        attack: 110,
        defense: 80,
        type: 'bug',
        moves: [
          'wing attack',
          'slash'
        ],
      },
      {
        number: 124,
        imageUrl: '/images/pokemon_snaps/124.svg',
        name: 'Jynx',
        attack: 50,
        defense: 35,
        type: 'ice',
        moves: [
          'body slam',
          'blizzard',
          'powder snow',
          'ice punch'
        ],
      },
      {
        number: 125,
        imageUrl: '/images/pokemon_snaps/125.svg',
        name: 'Electabuzz',
        attack: 83,
        defense: 57,
        type: 'electric',
        moves: [
          'thunderpunch',
          'swift',
          'thunderbolt',
          'thunder'
        ],
      },
      {
        number: 126,
        imageUrl: '/images/pokemon_snaps/126.svg',
        name: 'Magmar',
        attack: 95,
        defense: 57,
        type: 'fire',
        moves: [
          'fire blast',
          'smog',
          'fire punch',
          'flamethrower'
        ],
      },
      {
        number: 127,
        imageUrl: '/images/pokemon_snaps/127.svg',
        name: 'Pinsir',
        attack: 125,
        defense: 100,
        type: 'bug',
        moves: [
          'vicegrip'
        ],
      },
      {
        number: 128,
        imageUrl: '/images/pokemon_snaps/128.svg',
        name: 'Tauros',
        attack: 100,
        defense: 95,
        type: 'normal',
        moves: [
          'tackle',
          'horn attack'
        ],
      },
      {
        number: 129,
        imageUrl: '/images/pokemon_snaps/129.svg',
        name: 'Magikarp',
        attack: 10,
        defense: 55,
        type: 'water',
        moves: [
          'tackle'
        ],
      },
      {
        number: 130,
        imageUrl: '/images/pokemon_snaps/130.svg',
        name: 'Gyarados',
        attack: 125,
        defense: 79,
        type: 'water',
        moves: [
          'bite',
          'twister',
          'hydro pump'
        ],
      },
      {
        number: 131,
        imageUrl: '/images/pokemon_snaps/131.svg',
        name: 'Lapras',
        attack: 85,
        defense: 80,
        type: 'water',
        moves: [
          'water gun',
          'body slam',
          'ice beam',
          'hydro pump'
        ],
      },
      {
        number: 133,
        imageUrl: '/images/pokemon_snaps/133.svg',
        name: 'Eevee',
        attack: 55,
        defense: 50,
        type: 'normal',
        moves: [
          'tackle',
          'bite'
        ],
      },
      {
        number: 135,
        imageUrl: '/images/pokemon_snaps/135.svg',
        name: 'Jolteon',
        attack: 65,
        defense: 60,
        type: 'electric',
        moves: [
          'tackle',
          'thundershock',
          'thunder'
        ],
      },
      {
        number: 136,
        imageUrl: '/images/pokemon_snaps/136.svg',
        name: 'Flareon',
        attack: 130,
        defense: 60,
        type: 'fire',
        moves: [
          'flamethrower',
          'ember',
          'bite',
          'smog'
        ],
      },
      {
        number: 137,
        imageUrl: '/images/pokemon_snaps/137.svg',
        name: 'Porygon',
        attack: 60,
        defense: 70,
        type: 'normal',
        moves: [
          'tackle',
          'psybeam',
          'zap cannon'
        ],
      },
      {
        number: 138,
        imageUrl: '/images/pokemon_snaps/138.svg',
        name: 'Omanyte',
        attack: 40,
        defense: 100,
        type: 'rock',
        moves: [
          'constrict',
          'bite',
          'water gun',
          'mud shot'
        ],
      },
      {
        number: 139,
        imageUrl: '/images/pokemon_snaps/139.svg',
        name: 'Omastar',
        attack: 60,
        defense: 125,
        type: 'rock',
        moves: [
          'ancientpower',
          'hydro pump',
          'water gun',
          'mud shot'
        ],
      },
      {
        number: 140,
        imageUrl: '/images/pokemon_snaps/140.svg',
        name: 'Kabuto',
        attack: 80,
        defense: 90,
        type: 'rock',
        moves: [
          'scratch',
          'mud shot'
        ],
      },
      {
        number: 141,
        imageUrl: '/images/pokemon_snaps/141.svg',
        name: 'Kabutops',
        attack: 115,
        defense: 105,
        type: 'rock',
        moves: [
          'scratch',
          'mud shot',
          'slash',
          'ancientpower'
        ],
      },
      {
        number: 142,
        imageUrl: '/images/pokemon_snaps/142.svg',
        name: 'Aerodactyl',
        attack: 105,
        defense: 65,
        type: 'rock',
        moves: [
          'wing attack',
          'bite',
          'ancientpower'
        ],
      },
      {
        number: 143,
        imageUrl: '/images/pokemon_snaps/143.svg',
        name: 'Snorlax',
        attack: 110,
        defense: 65,
        type: 'normal',
        moves: [
          'tackle',
          'headbutt',
          'snore',
          'body slam'
        ],
      },
      {
        number: 144,
        imageUrl: '/images/pokemon_snaps/144.svg',
        name: 'Articuno',
        attack: 85,
        defense: 100,
        type: 'ice',
        moves: [
          'gust',
          'powder snow',
          'ice beam',
          'blizzard'
        ],
      },
      {
        number: 145,
        imageUrl: '/images/pokemon_snaps/145.svg',
        name: 'Zapdos',
        attack: 90,
        defense: 85,
        type: 'electric',
        moves: [
          'peck',
          'thundershock',
          'drill peck',
          'thunder'
        ],
      },
      {
        number: 146,
        imageUrl: '/images/pokemon_snaps/146.svg',
        name: 'Moltres',
        attack: 100,
        defense: 90,
        type: 'fire',
        moves: [
          'wing attack',
          'ember',
          'flamethrower',
          'heat wave'
        ],
      },
      {
        number: 147,
        imageUrl: '/images/pokemon_snaps/147.svg',
        name: 'Dratini',
        attack: 64,
        defense: 45,
        type: 'dragon',
        moves: [
          'twister',
          'slam'
        ],
      },
      {
        number: 148,
        imageUrl: '/images/pokemon_snaps/148.svg',
        name: 'Dragonair',
        attack: 84,
        defense: 65,
        type: 'dragon',
        moves: [
          'twister',
          'slam'
        ],
      },
      {
        number: 149,
        imageUrl: '/images/pokemon_snaps/149.svg',
        name: 'Dragonite',
        attack: 134,
        defense: 95,
        type: 'dragon',
        moves: [
          'twister',
          'slam',
          'wing attack'
        ],
      },
      {
        number: 150,
        imageUrl: '/images/pokemon_snaps/150.svg',
        name: 'Mewtwo',
        attack: 110,
        defense: 90,
        type: 'psychic',
        moves: [
          'confusion',
          'swift',
          'psychic'
        ],
      },
      {
        number: 151,
        imageUrl: '/images/pokemon_snaps/151.svg',
        name: 'Mew',
        attack: 100,
        defense: 100,
        type: 'psychic',
        moves: [
          'pound',
          'mega punch',
          'psychic',
          'ancientpower'
        ],
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Pokemons');
  }
};
