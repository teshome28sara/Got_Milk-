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

 

  for (const ingredients of ingredientsData) {
    await Ingredients.create({
      ...ingredients,
      user_id: user[Math.floor(Math.random() * user.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
