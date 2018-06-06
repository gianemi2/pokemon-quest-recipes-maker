var recipesDB = database.recipes;
var ingredientsDB = database.ingredients;

function buildRecipesStructure(){
	var elements = '';
	$.each(recipesDB, function(key, recipe){
		var availablePkmn = '';
		var skipComma = false;
		$.each(recipe.pokemon, function(key, pkmn){
			if(pkmn != "Unknown"){
				if(key != 'total5' && skipComma == false){
					availablePkmn += ', ';
				}
				availablePkmn += pkmn;
				skipComma = false;
			} else {
				skipComma = true;
			}
		})
		availablePkmn = availablePkmn.split(', ');
		availablePkmn = removeDuplicates(availablePkmn);
		availablePkmn = availablePkmn.join(', ');
		elements += '<div class="recipe" data-recipe="' + key + '">';
		elements += '<div class="recipe-image"><img src="assets/recipes-image/'+recipe.design.image+'"></div>'; 
		elements += '<div class="recipe-name">'+recipe.design.name+'</div>';
		elements += '<div class="recipe-target">'+recipe.design.description+'</div>';
		elements += '<div class="recipe-pkmn">'+availablePkmn+'</div>';
		elements += '</div>';
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
	var htmlRecipes = showCurrentRecipe(availableRecipes, recipeId);
	$('.filtered-recipe-list').html(htmlRecipes);
	setFrontPage('filtered-recipe-page');
}

function showCurrentRecipe(recipes, recipeId){
	$.each(recipes, function(index, elements){
		if (typeof elements.sum == 'undefined'){
			var sum = 0;
			$.each(elements, function(recipeIngredient, quantity){
				sum = sum + (ingredientsDB[recipeIngredient].value * quantity);
			})
			elements.sum = sum;
		}
	})
	recipes.sort(compare);
	var output = '';
	$.each(recipes, function(index, elements){
		output += '<div class="filtered-recipe">';
		output += '<div class="recipe-ingredients">';
		var i = 0;
		var sum = elements.sum;
		var pkmnObjHook = 'total'+sum;
		$.each(elements, function(recipeIngredient, quantity){
			if(recipeIngredient != 'sum'){
				if(i > 0){
					output += ', ';
				}
				recipeIngredient = ingredientsDB[recipeIngredient].name;
				output += recipeIngredient+' x'+quantity;
				i++;
			}
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

function removeDuplicates(list) {
	var result = [];
	$.each(list, function(i, e) {
		if ($.inArray(e, result) == -1) result.push(e);
	});
	return result;
}

$(document).on('click', '.recipe', function(){
	var index = $(this).data('recipe');
	if(index){
		var targetRecipes = recipesDB[index].unique;
		getAvailableRecipes(targetRecipes, index);
	}
})

$(document).on('click', '.recipe-element', function(){

})

$(document).on('click', '.backToHomepage', function(){
	setFrontPage('homepage');
});

//Build HTML layout
$('.recipes').append(buildRecipesStructure);
$('.ingredients').append(buildIngredientsStructure);

