const mongoose = require('mongoose');
const reviewSchema= new mongoose.Schema({
rating:{
	type: Number,
    required: true
},
description:{
	type: String,
    required: true
}
});

const recipesSchema = new mongoose.Schema({
name: { 
    type: String,
    required: true,
    minlength: 3
    },
type: {
   type: String,
    required: true
    },
category:{
	type: String,
    required: true
},
preparationTime:{
	type: String,
    required: true
},
ingredients:[String],
nutrition:[String],
reviews:[reviewSchema]
});

module.exports=mongoose.model('Recipe',recipesSchema);
    
    
