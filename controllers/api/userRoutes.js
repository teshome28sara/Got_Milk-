const router = require('express').Router();
const { User } = require('../../models');

// router.get('/', async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ['password'] },
//     });
//     res.status(200).json(userData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });



// Return all ingredients created by  this userid
// router.get('/:id', async (req, res) => {
//   try {
//     const userData = await User.findOne({
//       attributes: { exclude: ['password'] },
//       where: { id: req.params.id },
//       include: [
//         {
//           model: Ingredients,
//           attributes: ['id', 'name',  'created_at'],
//         },
//         // {
//         //   model: Groceries_list,
//         //   attributes: ['id', 'name', 'created_at'],
//         //   include: {
//         //     model: Ingredients,
//         //     attributes: ['name'],
//         //   },
//         // },
//         {
//           model: Ingredients,
//           attributes: ['name'],
//         },
//       ],
//     });
//     console.log(userData);
//     if (!userData) {
//       res.status(404).json({ message: `No such user id ${req.params.id}` });
//       return;
//     }
//     res.status(200).json(userData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });
// Create new user

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    console.log(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;
      res
        .status(201)
        .json({ message: `Successfully created ${userData.username}` });
    });
  } catch (err) {
    res.status(400).json(err);
    
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });
    if (!userData) {
    
      res
        .status(400)
        .json({ message: `${req.body.username} is not a valid username` });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', async (req, res) => {
  try {
    if (req.session.logged_in) {
      const userData = await req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
      // somehow you're attempted to logout a session that doesn't exist.
      // This might be because the session timeed out and then the user attempted to log out.
    }
  } catch {
    res.status(400).end();
    // you'd get here if there was a session found but the destroy failed / super rare
  }
});

module.exports = router;









// const router = require('express').Router();
// const { User } = require('../../models');

// // CREATE new user
// router.post('/', async (req, res) => {
//   try {
//     const dbUserData = await User.create({
//       username: req.body.username,
     
//       password: req.body.password,
//     });

//     req.session.save(() => {
//       req.session.loggedIn = true;

//       res.status(200).json(dbUserData);
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // Login
// router.post('/login', async (req, res) => {
//   try {
//     const dbUserData = await User.findOne({
//       where: {
//         username: req.body.username,
     
//       },
//     });

//     if (!dbUserData) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect username or password. Please try again!' });
//       return;
//     }

//     const validPassword = await dbUserData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect username or password. Please try again!' });
//       return;
//     }

//     req.session.save(() => {
//       req.session.loggedIn = true;

//       res
//         .status(200)
//         .json({ user: dbUserData, message: 'You are now logged in!' });
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // Logout
// router.post('/logout', (req, res) => {
//   if (req.session.loggedIn) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

// module.exports = router
