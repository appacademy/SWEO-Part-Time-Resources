'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Team.belongsTo(
        models.Sport,
        { foreignKey: 'sportId' }
      );

      Team.hasMany(
        models.Player, {
          foreignKey: 'currentTeamId',
          as: 'TeamRoster'
          // onDelete: 'CASCADE'
      });
    }
  }
  Team.init({
    name: {
      type: DataTypes.STRING,
    },
    homeCity: {
      type: DataTypes.STRING,
    },
    sportId: {
      type: DataTypes.INTEGER,
      allowNull: false
      }
  }, {
    sequelize,
    modelName: 'Team',
  });
  return Team;
};
