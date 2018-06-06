var recipesDB = database.recipes;
var ingredientsDB = database.ingredients;

function buildRecipesStructure(){
	var elements = '';
	$.each(recipesDB, function(key, recipe){
		elements += '<div class="recipe-name" data-recipe="' + key + '"><img src="assets/recipes-image/'+recipe.design.image+'"></div>'; 
	});
	return elements;
}

function buildIngredientsStructure(){
	var elements = '';
	$.each(ingredientsDB, function(key, ingredient){
		elements += '<label for="'+ingredient.id+'">'+ingredient.name+'<input id="'+ingredient.id+'" type="number" name="'+key+'" value="15"></label>';
	});
	return elements;
}

function getAvailableRecipes(targetRecipes, recipeId){
	var availableRecipes = [];
	for(var i = 0; i < targetRecipes.length; i++){
		var currentRecipe = targetRecipes[i];
		var isAvailable = true;
		$.each(currentRecipe, function(ingredient, required) {
			if(isAvailable == true){
				required = parseInt(required)*3;
				var available = $('input[name="'+ingredient+'"]').val();
				if(required > available){
					isAvailable = false;
				}
			}
		});
		if(isAvailable == true){
			availableRecipes.push(currentRecipe);
		}
	}
	$('.recipes-list').append(showCurrentRecipe(availableRecipes, recipeId));
	setFrontPage('recipe-page');
}

function showCurrentRecipe(recipes, recipeId){
	$.each(recipes, function(index, elements){
		var sum = 0;
		$.each(elements, function(recipeIngredient, quantity){
			sum = sum + (ingredientsDB[recipeIngredient].value * quantity);
		})
		elements.sum = sum;
	})
	recipes.sort(compare);
	var output = '';
	$.each(recipes, function(index, elements){
		output += '<div class="recipe">';
		output += '<div class="recipe-ingredients">';
		var i = 0;
		var sum = elements.sum;
		var pkmnObjHook = 'total'+sum;
		$.each(elements, function(recipeIngredient, quantity){
			if(i > 0){
				output += ', ';
			}
			output += recipeIngredient+' x'+quantity;
			i++;
		})
		output += '</div><div class="sum">'+elements.sum+'</div>';
		output += '<div class="available-pkmn">'+recipesDB[recipeId].pokemon[pkmnObjHook]+'</div>';
		output += '</div>';
	})
	return output;
}

function compare(a,b) {
  if (a.sum > b.sum)
    return -1;
  if (a.sum < b.sum)
    return 1;
  return 0;
}

function setFrontPage(page){
	$('body section').removeClass('old-page');
	$('body section.active').addClass('old-page');
	$('body section').removeClass('active');
	$('.'+page).addClass('active');
}

$(document).on('click', '.recipe-name', function(){
	var index = $(this).data('recipe');
	var targetRecipes = recipesDB[index].unique;
	getAvailableRecipes(targetRecipes, index);
})

$(document).on('click', '.recipe-element', function(){

})

//Build HTML layout
$('.recipes').append(buildRecipesStructure);
$('.ingredients').append(buildIngredientsStructure);