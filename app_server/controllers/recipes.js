const request = require('request');
const apiOptions = {
    server : 'http://localhost:3000'
};
const _renderHomepage = function(req, res, responseBody){
    res.render('list_display',{
        recipes:responseBody
    });

};
const homelist = function(req,res){
    const path = '/api/recipes';
    const requestOptions = {
        url:apiOptions.server + path, method :'GET',
        json:{}
    };
    request(
        requestOptions,
            (err, response, body) =>{
            _renderHomepage(req,res, body);
        });
    };


const _renderDetailPage = function (req,res, responseBody){
    res.render('details', {
        currentRecipe: responseBody
    });
};

const recipeinfo = function(req,res){
    const path = `/api/recipes/${req.params.recipeid}`;
    const requestOptions = {
        url:apiOptions.server + path,
        method: 'GET',
        json:{}
    };
    request(
    requestOptions,
    (err, reponse, body) => {
        _renderDetailPage(req, res, body);
    });
};

const _renderCreatePage = function(req,res){
    res.render('create',{
        title:"create New Recipe"
    });
};
    
    const addNewRecipe = function(req, res){
        _renderCreatePage(req,res);
    };
    const doAddNewRecipe = function(req,res){
        const path ='/api/recipes';
        const postdata ={
            name:req.body.name,
            type:req.body.type,
			category:req.body.category,
			preparationTime:req.body.preparationTime,
			ingredients:req.body.ingredients,
			nutrition:req.body.nutrition
			
        };
        const requestOptions = {
            url:apiOptions.server+path,
            method:'POST',
            json: postdata
        };
        request(
        requestOptions,
        (err, response, body) =>{
            if(response.statusCode ===201){
                res.redirect('/');
            }
        });
    };
module.exports = {
       homelist,
    recipeinfo,
    doAddNewRecipe,
    addNewRecipe
     
};
