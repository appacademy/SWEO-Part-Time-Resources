'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tweet = sequelize.define(
    'Tweet',
    {
      message: {
        type: DataTypes.STRING(280),
        allowNull: false
      }
    },
    {}
  );

  return Tweet;
};
