'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superhero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Superhero.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isUppercase: true,
        len: [4, 25]
      }
    },
    alias: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        len: [5, 30]
      }
    },
    affiliation: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isValidAffiliation(value) {
          const validAffiliations = ['Avengers', 'X-Men', 'Justice League'];
          if (!validAffiliations.includes(value)) {
            throw new Error("Affiliation is not a valid organization");
          }
        }
      }
    },
    heightCm: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 140,
        max: 210,
      }
    },
    isMutant: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      validate: {
        isHuman(value) {
          if (value === true && this.race !== 'human') {
            throw new Error('Mutants must be human');
          }
        }
      }
    },
    race: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isLowercase: true,
        isAlpha: true,
        notEmpty: true,
        isSingleWord(value) {
          if (value.split(' ').length > 1) {
            throw new Error('Race can only be one word');
          }
        }
      },
    },
    universe: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
        isMarvelOrDC(value) {
          if (value !== 'Marvel' && value !== 'DC') {
            throw new Error("Universe must be 'Marvel' or 'DC'");
          }
        },
        matchesAffiliation(value) {
          const affiliationUniverses = {
            'Avengers': 'Marvel',
            'X-Men': 'Marvel',
            'Justice League': 'DC'
          };
          const correctUniverse = affiliationUniverses[this.affiliation];
          if (correctUniverse !== value) {
            throw new Error(`Universe must be '${correctUniverse}' if affiliated with '${this.affiliation}'`)
          }
        }
      }
    },
    releaseYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1938,
        max: 2022,
      }
    },
  }, {
    sequelize,
    modelName: 'Superhero',
    indexes: [
      {
        unique: true,
        fields: ['universe', 'releaseYear'],
      }
    ]
  });
  return Superhero;
};