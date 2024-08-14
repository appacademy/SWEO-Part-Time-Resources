'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Puppy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Puppy.belongsTo(models.Breed, { foreignKey: 'breedId'})
    }
  }
  Puppy.init({
    breedId: {
      type: DataTypes.INTEGER,
      allowNull: false,

    }
  }, {
    sequelize,
    modelName: 'Puppy',
  });
  return Puppy;
};



'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Breed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Breed.hasMany(models.Puppy, { foreignKey: 'breedId'})
    }
  }
  Breed.init({

  //columns blah blah blah
  
  }, {
    sequelize,
    modelName: 'Puppy',
  });
  return Breed;
};