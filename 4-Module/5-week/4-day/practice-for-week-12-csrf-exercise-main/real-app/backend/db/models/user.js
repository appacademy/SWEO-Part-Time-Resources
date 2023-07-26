'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    toSafeObject() {
      const { id, username, email } = this; // context will be the User instance
      return { id, username, email };
    }

    async validatePassword(password) {
      return await bcrypt.compare(password, this.hashedPassword.toString());
    }

    static getCurrentUserById(id) {
      return User.scope("currentUser").findByPk(id);
    }

    static async login({ username, password }) {
      const user = await User.scope({ method: ['loginUser', username] }).findOne();
      if (user && await user.validatePassword(password)) {
        return await User.scope('currentUser').findByPk(user.id);
      }
      return null;
    }

    static async signup(data) {
      const user = User.build(data);
      const { password } = data;
      user.hashedPassword = await bcrypt.hash(password);
      await user.save();
      return await User.scope('currentUser').findByPk(user.id);
    }

    static associate(models) {
      User.hasMany(models.Tweet, { foreignKey: 'authorId' });
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING(30),
      unique: true,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        len: [5, 30]
      }
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
    defaultScope: {
      attributes: {
        exclude: [
          'hashedPassword',
          'createdAt',
          'updatedAt'
        ]
      }
    },
    scopes: {
      loginUser(username) {
        return {
          where: {
            username
          }, 
          attributes: [
            'id',
            'username',
            'hashedPassword'
          ],
          limit: 1
        }
      },
      currentUser: {
        attributes: {
          exclude: [
            'hashedPassword'
          ]
        },
        limit: 1
      }
    }
  });
  return User;
};