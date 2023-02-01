'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    // Step 3 - Abstraction method (Option 1 - easy to read and extensible)
    getImageable(options) {
      switch (this.imageableType) {
        case 'BlogPost':
          return this.getBlogPost(options);
        case 'UserProfile':
          return this.getUserProfile(options);
        default:
          return Promise.resolve(null);
      }
    }

    // Step 3 - Abstraction method (Option 2 - most basic)
    // getImageable(options) {
    //   if (this.imageableType === 'BlogPost')
    //     return this.getBlogPost(options);
    //   else if (this.imageableType === 'UserProfile')
    //     return this.getUserProfile(options);
    //   else
    //     return Promise.resolve(null);
    // }

    // Step 3 - Abstraction method (Option 3 - copied from Sequelize docs)
    // WARNING: Make sure student understands ALL of this code if they use it
    // getImageable(options) {
    //   const uppercaseFirst = str => `${str[0].toUpperCase()}${str.substr(1)}`;
    //
    //   if (!this.imageableType) return Promise.resolve(null);
    //   const mixinMethodName = `get${uppercaseFirst(this.imageableType)}`;
    //   return this[mixinMethodName](options);
    // }

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Step 2 - define polymorphic associations
      Image.belongsTo(models.UserProfile, {
        foreignKey: 'imageableId',
        constraints: false,
      });
      Image.belongsTo(models.BlogPost, {
        foreignKey: 'imageableId',
        constraints: false,
      });
    }
  };

  Image.init({
    url: {
      type: DataTypes.STRING,
      // Step 1 - constraint to require url
      allowNull: false,
    },
    imageableId: DataTypes.INTEGER,
    imageableType: DataTypes.ENUM('BlogPost', 'UserProfile')
  }, {
    sequelize,
    modelName: 'Image',
  });

  // Bonus Step (optional) - Hook for eager loading
  Image.addHook("afterFind", findResult => {
    // Handle single results (e.g. findByPk) as well as lists (e.g. findAll)
    if (!Array.isArray(findResult)) findResult = [findResult];

    for (const instance of findResult) {
      const iType = instance.get('imageableType');

      // Abstraction method (Option 1 - easy to read and extensible)
      if (iType === 'BlogPost') {
        instance.imageable = instance.get('BlogPost');
      } else if (iType === 'UserProfile') {
        instance.imageable = instance.get('UserProfile');
      } else {
        instance.imageable = null;
      }

      // Abstraction method (Option 2 - assumes imageable is the name of the
        // association)
      // instance.imageable = iType ? instance.get(iType) : null;

      // instance.dataValues.imageable = instance.imageable;

      // To prevent mistake in calling code
      delete instance.UserProfile;
      delete instance.BlogPost;
      delete instance.dataValues.UserProfile;
      delete instance.dataValues.BlogPost;
    }
  });

  return Image;
};