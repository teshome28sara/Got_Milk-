const sequelize = require('../config/connection');
const { User, Ingredients, Groceries_list  } = require('../models');

const userData = require('./userData.json');
const ingredientsData = require('./ingredientsData.json');
const groceriesData = require('./groceriesData.json');

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

  const groceries = await Groceries_list.bulkCreate(groceriesData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();