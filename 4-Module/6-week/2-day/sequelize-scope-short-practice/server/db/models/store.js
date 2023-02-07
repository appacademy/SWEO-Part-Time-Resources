'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Store.hasMany(models.Instrument, { foreignKey: 'storeId' });
    }
  }
  Store.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Store',
    //!!START SILENT
    // This is a default scope
    defaultScope: {
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      }
    },
   //!!END
  });
  return Store;
};
