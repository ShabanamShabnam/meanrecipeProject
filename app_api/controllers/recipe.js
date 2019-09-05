const mongoose = require('mongoose');
const Recipe = mongoose.model('Recipe');
const getRecipes = function(req, res){
	Recipe.find().exec(function(err,recipedata){
		if(err){
			 res
			 .status(404)
			 .json(err)
			 return;
	}
	res
	.status(200)
	.json(recipedata);
 });
    
};

const createRecipe = function(req, res){
    Recipe.create({
		name: req.body.name,
		type: req.body.type,
		category: req.body.category,
		preparationTime: req.body.preparationTime,
		ingredients: req.body.ingredients,
		nutrition: req.body.nutrition
	}, (err, recipedata)=>{
		if(err){
			res
			.status(400)
			.json(err);
		} else{
			 res
			.status(201)
			.json(recipedata);
		}
	});
};

const getSingleRecipe = function(req, res){
    Recipe.findById(req.params.recipeid)
	.exec((err,recipedata) =>{
		if(!recipedata){
			return res
				.json(404)
				.status({
				"message": "recipeid not found"
			});
		} else if(err){
			return res
				.status(400)
				.json(err);
		}
	   res
	   .status(200)
	   .json(recipedata);
   });
};

const updateRecipe = function(req, res){
    if(!req.params.recipeid){
		res
		.status(404)
		.json({
			"Message": "Not found, recipeid is required"
		});
		return;
	}
	Food.findById(req.params.recipeid)
	.exec((err,recipedata) =>{
		if(!recipedata){
			res
			.json(404)
			.status({
				"message": "recipeid not found"
			});
			return;
		} else if(err){
			res
			.status(400)
			.json(err);
			return;
		}
		recipedata.name = req.body.name;
		recipedata.type = req.body.type;
		recipedata.category = req.body.category;
		recipedata.preparationTime = req.body.preparationTime;
		recipedata.ingredients = req.body.ingredients;
		recipedata.nutrition = req.body.nutrition;
		
		recipedata.save((err,recipedata) =>{
			if(err){
				res
				.status(404)
				.json(err);
			} else{
				res
				.status(200)
				.json(recipedata);
			}
		});
	});
};

const deleteRecipe = function(req, res){
     const foodid = req.params.recipeid;
	if(recipeid){
		recipe
		.findByAndRemove(recipeid)
		.exec((err,recipedata) =>{
			if(err){
				res
				.status(404)
				.json(err);
				return;
			}
			res
			.status(204)
			.json(null);
		});
	} else{
		res
		.status(404)
		.json({"message": "No recipeid"});
	}
};

module.exports = {
    getRecipes,
    createRecipe,
    getSingleRecipe,
    updateRecipe,
    deleteRecipe
};