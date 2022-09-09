// Gather up all the different api routes 
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const ingredientRoutes = require('./ingredientRoutes');
const groceriesRoute= require('./groceriesRoutes');

router.use('/users', userRoutes);
router.use('/ingredients', ingredientRoutes);
router.use('/groceries', groceriesRoute);

module.exports = router;