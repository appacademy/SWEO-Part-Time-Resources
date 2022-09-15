'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Color extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Color.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [2,20],
          msg: 'name must be between 2 and 20 characters'
        },
        noEndingInY(value) {
			    if(value.slice(-1) === 'y') {
				    throw new Error('name must not end in \'y\'');
			    }
		    }
      }
    }
  }, {
    sequelize,
    modelName: 'Color',
  });
  return Color;
};