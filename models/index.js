const User = require('./User');
const Meal = require('./Groceries_list');
const Ingredients = require('./Ingredients');



// user can have many ingredients

User.hasMany(Ingredients, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

Ingredients.belongsTo(User, {
  foreignKey: 'user_id',
});



//  ingredients can have many meal
Ingredients.hasMany(Meal, {
  foreignKey: 'ingredients_id',
  onDelete: 'SET NULL',
});
Meal.belongsTo(Ingredients, {
  foreignKey: 'ingredients_id',
});

// user has one meal created
User.hasOne(Meal, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});
Meal.belongsTo(User ,{
  foreignKey: "user_id"
})

module.exports = { User, Meal, Ingredients };