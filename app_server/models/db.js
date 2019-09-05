const mongoose = require('mongoose');

const dbURI ='';

              
mongoose.connect(dbURI,{dbName:'recipesDb',useNewUrlParser: true}, function(err){
                                if(err) console.log(err);
                                else console.log('connected');
});

require('./recipe.js');