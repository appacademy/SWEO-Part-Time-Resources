//one to many
//MODEL MANY in 1-many
//associate many table
            Band.hasMany(
        models.Musician, {
          foreignKey: 'bandId',
          onDelete: 'CASCADE'
      });
    //   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//MODEL ONE in 1-many
//associate 1 table
      Musician.belongsTo(
        models.Band,
        { foreignKey: 'bandId' }
      );

//init add bandId
        Musician.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    //includes new id
    bandId: {
        type: DataTypes.INTEGER,
        allowNull: false
        }
  }, {
    sequelize,
    modelName: 'Musician',
  });
    //   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//MIGRATION ONE TO MANY
//up
await queryInterface.addColumn(
    'Musicians',
    'bandId',
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'Bands' },
      onDelete: 'CASCADE'
    }
  );
  //down
  await queryInterface.removeColumn('Musicians', 'bandId');




      //   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//MANY TO MANY
//MODEL MANY2MANY
class MusicianInstrument extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MusicianInstrument.init({

    //IDs for many to many
    musicianId: DataTypes.INTEGER,
    instrumentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MusicianInstrument',
  });

//MIGRATION MANY TO MANY
await queryInterface.createTable('MusicianInstruments', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    musicianId: {
      type: Sequelize.INTEGER,
      references: { model: 'Musicians' },
      onDelete: 'CASCADE',

    },
    instrumentId: {
      type: Sequelize.INTEGER,
      references: { model: 'Instruments' },
      onDelete: 'CASCADE',
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
//MODELs associate Many to Many through

Musician.belongsToMany(
    models.Instrument,
    { through: models.MusicianInstrument }
  );


  Instrument.belongsToMany(
    models.Musician,
    { through: models.MusicianInstrument }
  );
