const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ingredient extends Model {}

Ingredient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // description: {
    //   type: DataTypes.STRING,
    // },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    is_purchased: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ingredient',
  }
);

module.exports = Ingredient;