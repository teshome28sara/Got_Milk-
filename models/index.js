const User = require('./User');

const Ingredient = require('./Ingredient');



// user can have many ingredients

User.hasMany(Ingredient, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

Ingredient.belongsTo(User, {
  foreignKey: 'user_id',
});



//  ingredients has one groceries list
// Ingredients.hasOne(Groceries_list, {
//   foreignKey: 'ingredients_id',
//   onDelete: 'SET NULL',
// });
// Groceries_list.belongsTo(Ingredients, {
//   foreignKey: 'ingredients_id',
// });

// user has one groceries list created
// User.hasOne(Groceries_list, {
//   foreignKey: 'user_id',
//   onDelete: 'SET NULL',
// });
// Groceries_list.belongsTo(User ,{
//   foreignKey: "user_id"
// })

module.exports = { User, Ingredient };