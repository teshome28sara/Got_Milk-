const { UUIDV4, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ingredients extends Model {}

Ingredients.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      
    },
    is_purchased: {
      type: DataTypes. BOOLEAN,
      
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
    modelName: 'ingredients',
  }
);

module.exports = Ingredients;