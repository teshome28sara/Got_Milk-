
const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');
class Groceries_list extends Model {}

Groceries_list.init(
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
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    
  ingredients_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'ingredients',
          key: 'id',
        }
      }
    
    },
  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Groceries_list'
  
  }
);

module.exports = Groceries_list;
