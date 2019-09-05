var express = require('express');
var router = express.Router();

const ctrlRecipes = require('../controllers/recipes');
const ctrlAbout= require('../controllers/about');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home food Recipes' });
});
router.get('/about',ctrlAbout.about);
router.get('/recipes',ctrlRecipes.homelist);
router.get('/recipes/:recipeid',ctrlRecipes.recipeinfo);
router.route('/new')
    .get(ctrlRecipes.addNewRecipe)
    .post(ctrlRecipes.doAddNewRecipe);

module.exports = router;
