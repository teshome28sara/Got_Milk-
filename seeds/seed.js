const sequelize = require("../config/connection");
const { User, Ingredient } = require("../models");

const userData = require("./userData.json");
const ingredientData = require("./ingredientData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const ingredient of ingredientData) {
    await Ingredient.create({
      ...ingredient,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
