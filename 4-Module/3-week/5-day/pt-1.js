// npx sequelize model:generate --name Airplane --attributes airlineCode:string,flightNumber:string,inService:boolean,maxNumPassengers:integer,currentNumPassengers:integer,firstFlightDate:date
//MODEL~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airplane.init({
    airlineCode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2,2],
        isUppercase: true,
      }
    },
    flightNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 4],
        isNumeric: true
      }
    },
    inService: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    },
    maxNumPassengers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 2,
        max: 853
      }
    },
    currentNumPassengers: {
     type: DataTypes.INTEGER,
     validate: {
      min: 0,
      max: 853,
      checkMaxFunc(value){
        if(value > this.maxNumPassengers){
          throw new Error("test")
        }
      },
      checkInServiceFunc(value){
        if(value !== null && this.inService === false){
          throw new Error("test")
        }
      }
    },
    },
    firstFlightDate: {
      type: DataTypes.DATE,
      validate: {
        isBefore: '2022-01-01',
        isAfter: '2019-12-31'
      }
    },
  }, {
    sequelize,
    modelName: 'Airplane'
  });
  return Airplane;
};

//Migration~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Airplanes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      airlineCode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      flightNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      inService: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },
      maxNumPassengers: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      currentNumPassengers: {
        type: Sequelize.INTEGER
      },
      firstFlightDate: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });

    await queryInterface.addIndex("Airplanes",
    ['airlineCode', 'flightNumber'],
    {
      unique: true
    }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Airplanes');
  }
};
