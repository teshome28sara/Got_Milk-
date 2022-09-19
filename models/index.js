const User = require("./User");

const Ingredient = require("./Ingredient");

User.hasMany(Ingredient, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Ingredient.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Ingredient };
