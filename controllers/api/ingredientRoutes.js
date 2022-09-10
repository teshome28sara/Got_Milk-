const router = require('express').Router();
const Ingredients = require('../../models/Ingredients');
const withAuth = require('../../utils/auth');

// // GET all ingredients
// router.get('/', async (req, res) => {
//     const ingredientsData = await Ingredients.findAll().catch((err) => { 
//         res.json(err);
//     });
//     // We use map() to iterate over ingredientsData and serialize each object
//     const ingredients = ingredientsData.map((ingredients) => ingredients.get({ plain: true }));
//     res.render('all', { ingredients });
// });

// POST create new ingredient
router.post('/', withAuth, async (req, res) => {
    try {
        const newIngredient = await Ingredients.create({
            ...req.body,
            user_id: res.session.user_id,
        });

        res.status(200).json(newIngredient);
    } catch (err) {
        res.status(400).json(err);
    }
});

// DELETE ingredient
router.delete('/:id', async (req, res) => {
    try {
        const ingredientsData = await ingredients.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!ingredientsData) {
            res.status(404).json({ message: 'No ingredient found with that id!' });
            return;
        }

        res.status(200).json(ingredientsData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;