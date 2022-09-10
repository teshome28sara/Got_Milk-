// client side views
// interacts with handelbar and prints content to user 

// routes.get("/")
// for homepage

// routes.get("/login")

// routes.get("/saved items")

// routes.get("/ingrdients/add")

const router = require('express').Router();
const { Groceries_list, Ingredients } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all groceries list  for homepage
router.get('/', async (req, res) => {
  try {
    const dbGroceriesData = await Groceries_list.findAll({
      include: [
        {
          model: Ingredients,
          attributes: ['id', 'name' , 'user_id'],
        },
      ],
    });

    const grocery = dbGroceriesData.map((groceries) =>
      groceries.get({ plain: true })
    );

    res.render('homepage', {
      grocery,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one grocery list
// Use the custom middleware before allowing the user to access the gallery
router.get('/groceries/:id', withAuth, async (req, res) => {
  try {
    const dbGroceriesData = await Groceries_list.findByPk(req.params.id, {
      include: [
        {
          model: Ingredients,
          attributes: [
            'id',
            'name',
            'user_idt',
           
          ],
        },
      ],
    });

    const groceries = dbGroceriesData.get({ plain: true });
    res.render('groceries', { groceries, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one ingredient
// Use the custom middleware before allowing the user to access the painting
router.get('/ingredients/:id', withAuth, async (req, res) => {
  try {
    const dbIngredientsData = await Ingredients.findByPk(req.params.id);

    const ingredients = dbIngredientsData.get({ plain: true });

    res.render('ingredients', { ingredients, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
