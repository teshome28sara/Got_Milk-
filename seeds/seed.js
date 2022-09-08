const sequelize = require('../config/connection');
const { User, Ingredients, Meal } = require('../models');

const userData = require('./userData.json');
const ingredientsData = require('./ingredientsData.json');
const mealData = require('./mealData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const user = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const ingredients = await Ingredients.bulkCreate(ingredientsData, {
    individualHooks: true,
    returning: true,
  });

  const meal = await Meal.bulkCreate(mealData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();