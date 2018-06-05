var recipes = database.recipes;
var ingredients = database.ingredients;

function buildRecipesStructure(){
	var elements = '';
	$.each(recipes, function(key, recipe){
		elements += '<div class="recipe-name" data-recipe="' + key + '"><img src="assets/recipes-image/'+recipe.design.image+'"></div>'; 
	});
	return elements;
}

function buildIngredientsStructure(){
	var elements = '';
	$.each(ingredients, function(key, ingredient){
		elements += '<label for="'+ingredient.id+'">'+ingredient.name+'<input id="'+ingredient.id+'" type="number" name="'+key+'" value="15"></label>';
	});
	return elements;
}

function getAvailableRecipes(targetRecipes){
	for(var i = 0; i < targetRecipes.length; i++){
		var currentRecipe = targetRecipes[i];
		var availableRecipe = true;
		$.each(currentRecipe, function(ingredient, required) {
			if(availableRecipe == true){
				required = parseInt(required)*3;
				var available = $('input[name="'+ingredient+'"]').val();
				//console.log(ingredient+' required: '+required+' available: '+available);
				if(required > available){
					availableRecipe = false;
				}
			}
		});
		if(availableRecipe == true){
			showCurrentRecipe(currentRecipe);
		}
	}
	console.log('Fine ricette disponibili');
}

function showCurrentRecipe(currentRecipe){
	console.log(currentRecipe);
}

$(document).on('click', '.recipe-name', function(){
	var index = $(this).data('recipe');
	var targetRecipes = recipes[index].unique;
	getAvailableRecipes(targetRecipes);
})

//Build HTML layout
$('.recipes').append(buildRecipesStructure);
$('.ingredients').append(buildIngredientsStructure);