// client side views
// interacts with handelbar and prints content to user 

// routes.get("/")
// for homepage

// routes.get("/login")

// routes.get("/saved items")

// routes.get("/ingrdients/add")

const sequelize = require('../config/connection');
const { Ingredients, User } = require('../models');
const router = require('express').Router();
const withAuth = require('../utils/auth');
<<<<<<< HEAD
=======


>>>>>>> 823ead35ac8935fc3df40efac26b97307d9fd889
router.get('/', withAuth, async (req, res) => {
    try {
      const userData = await User.findAll({
        attributes: { exclude: ['password'] },
        order: [['name', 'ASC']],
      });
  
      const users = userData.map((project) => project.get({ plain: true }));
  

      res.render('homepage', {
        users,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;

// router.get('/', (req, res) => {
//   Ingredients.findAll({
//     attributes: ['id', 'name',  'created_at'],
//     // include: [
//       // {
//       //   model: Groceries_list,
//       //   attributes: ['id', 'name', 'ingredients_id', 'user_id', 'created_at'],
//       //   include: {
//       //     model: User,
//       //     attributes: ['username'],
//       //   },
//       // },
//     //   {
// //         model: User,
// //         attributes: ['username'],
// //       },
// //     ],
// //   })
// //     .then((dbIngredientsData) => {
// //       const ingredient= dbIngredientsData.map((ingredients) => post.get({ plain: true }));
// //       res.render('dashboard', {
// //         ingredient,
// //         logged_in: req.session.logged_in,
// //         username: req.session.username,
// //       });
// //     })
// //     .catch((err) => {
// //       console.log(err);
// //       res.status(500).json(err);
// //     });
// // });


// router.get('/login', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }
//   res.render('login');
// });

// router.get('/signup', (req, res) => {
//   res.render('signup');
// });

// router.get('/ingredients/:id', (req, res) => {
//   Ingredients.findOne({
//     where: {
//       id: req.params.id,
//     },
//     attributes: ['id', 'name',  'created_at'],
//     include: [
//       {
//         model: Groceries_list,
//         attributes: ['id', 'name', 'ingredients_id', 'user_id', 'created_at'],
//         include: {
//           model: User,
//           attributes: ['username'],
//         },
//       },
//       {
//         model: User,
//         attributes: ['username'],
//       },
//     ],
//   })
// //     .then((dbIngredientsData) => {
// //       if (!dbIngredientsData) {
// //         res.status(404).json({ message: 'No ingredients found with this id' });
// //         return;
// //       }
// //       const ingredients = dbIngredientsData.get({ plain: true });
// //       res.render('single-ingredients', {
// //         ingredients,
// //         logged_in: req.session.logged_in,
// //         username: req.session.username,
// //       });
// //     })
// //     .catch((err) => {
// //       console.log(err);
// //       res.status(500).json(err);
// //     });
// // });
// // router.get('/ingredients-groceries_list', (req, res) => {
// //   Ingredients.findOne({
// //     where: {
// //       id: req.params.id,
// //     },
// //     attributes: ['id',  'name', 'created_at'],
// //     include: [
// //       // {
// //       //   model: Groceries_list,
// //       //   attributes: ['id', 'name', 'ingredients_id', 'user_id', 'created_at'],
// //       //   include: {
// //       //     model: User,
// //       //     attributes: ['username'],
// //       //   },
// //       // },
// //       {
// //         model: User,
// //         attributes: ['username'],
// //       },
// //     ],
// //   })
// //     .then((dbIngredientsData) => {
// //       if (!dbIngredientsData) {
// //         res.status(404).json({ message: 'No ingredients found with this id' });
// //         return;
// //       }
// //       const ingredients = dbIngredientsData.get({ plain: true });

// //       res.render('ingredients-groceries_list', {
// //         ingredients,
// //         logged_in: req.session.logged_in,
// //         username: req.session.username,
// //       });
// //     })
// //     .catch((err) => {
// //       console.log(err);
// //       res.status(500).json(err);
// //     });
// // });

// module.exports = router;