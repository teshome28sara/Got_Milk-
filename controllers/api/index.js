const router = require('express').Router();
const userRoutes = require('./userRoutes');
const ingredientRoutes = require('./ingredientRoutes');
const groceriesRoutes= require('./groceriesRoutes');

router.use('/users', userRoutes);
router.use('/ingredients', ingredientRoutes);
router.use('/groceries', groceriesRoutes);

module.exports = router;