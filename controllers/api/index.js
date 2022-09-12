const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./ingredientRoutes');

router.use('/users', userRoutes);
router.use('/ingredients', ingredientRoutes);

module.exports = router;
