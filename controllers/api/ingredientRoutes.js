const router = require('express').Router();
const Ingredients = require('../../models/Ingredients');

//get all ingredients
router.get('/', async (req, res) => {
    // find all ingredients in the db and set the data equal to ingredientsData
    const ingredientsData = await Ingredients.findAll().catch((err) => { 
        res.json(err);
    });
    // We use map() to iterate over ingredientsData and serialize each object
    const ingredients = ingredientsData.map((ingredients) => ingredients.get({ plain: true }));
    // We render the template, 'all', passing in ingredients, a new array of serialized objects
    res.render('all', { ingredients });
});


module.exports = router;