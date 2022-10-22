'use strict';

// BONUS

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Match extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Match.belongsTo(models.Team, { foreignKey: 'homeTeamId', as: 'HomeTeam' });
      Match.belongsTo(models.Team, { foreignKey: 'awayTeamId', as: 'AwayTeam' });
      Match.belongsTo(models.Team, { foreignKey: 'winnerId', as: 'Winner' });
    }
  }
  Match.init({
    homeTeamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    awayTeamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    matchDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Match',
  });
  return Match;
};