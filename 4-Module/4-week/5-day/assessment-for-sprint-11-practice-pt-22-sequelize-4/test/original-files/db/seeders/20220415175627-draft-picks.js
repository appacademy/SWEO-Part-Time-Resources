'use strict';

const { DraftPick, Fan, Player } = require('../models');

const drafts = [
  {
    fan: "FootballFan",
    player: {
      firstName: "Tom",
      lastName: "Brady",
      number: 12,
    }
  },
  {
    fan: "FootballFan",
    player: {
      firstName: "Rob",
      lastName: "Gronkowski",
      number: 87,
    },
  },
  {
    fan: "BasketballFan",
    player: {
      firstName: "Paul",
      lastName: "George",
      number: 13,
    },
  },
  {
    fan: "BasketballFan",
    player: {
      firstName: "Kevin",
      lastName: "Durant",
      number: 7,
    },
  },
  {
    fan: "BasketballFan",
    player: {
      firstName: "Anthony",
      lastName: "Davis",
      number: 3,
    },
  },
  {
    fan: "BasketballFan",
    player: {
      firstName: "Kyrie",
      lastName: "Irving",
      number: 11,
    },
  },
];

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      for (let draftInfo of drafts) {
        const { player, fan } = draftInfo;
        const foundPlayer = await Player.findOne({
          where: player
        });
        const foundFan = await Fan.findOne({
          where: { username: fan }
        });
        await DraftPick.create({
          playerId: foundPlayer.id,
          fanId: foundFan.id,
        });
      }
    } catch(err) {
      console.error(err);
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('DraftPicks', {}, {});
  }
};
