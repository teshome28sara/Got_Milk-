const sequelize = require('../config/connection');
const { User, Ingredients  } = require('../models');

const userData = require('./userData.json');
const ingredientsData = require('./ingredientsData.json');


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

 

  process.exit(0);
};

seedDatabase();