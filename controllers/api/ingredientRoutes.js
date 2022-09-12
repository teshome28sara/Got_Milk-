const router = require('express').Router();
const { Ingredient } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newIngredient = await Ingredient.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newIngredient);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const ingredientData = await Ingredient.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!ingredientData) {
      res.status(404).json({ message: 'No ingredient found with this id!' });
      return;
    }

    res.status(200).json(ingredientData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;