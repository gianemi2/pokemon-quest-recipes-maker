var recipeDB = databaseRecipes.m_datas.Array;
var allRecipesDB = databaseAllRecipes;
var ingredientsDB = databaseIngredients.m_datas.Array;

function getRecipeMeta(id){
	var targetRecipe = false;
	$.each(recipeDB, function(index, recipe){
		if(targetRecipe == false){
			if(recipe.m_no == id){
				targetRecipe = recipe;
			}
		}
	})
	return targetRecipe;
}

function getTargetRecipesMeta(id){
	var targetRecipes = false;
	$.each(allRecipesDB, function(i, value){
		if(targetRecipes == false){
			if(value.id == id){
				targetRecipes = value.recipes;
			}
		}
	})
	return targetRecipes;
}

function getIngredientMeta(id){
	var targetIngredient = false;
	$.each(ingredientsDB, function(i, v){
		if(targetIngredient == false){
			if(v.m_no == id){
				targetIngredient = v;
			}
		}
	})
	return targetIngredient;
}

function buildRecipesStructure(){
	var elements = '';
	$.each(recipeDB, function(key, recipe){
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
		});
		availablePkmn = availablePkmn.split(', ');
		availablePkmn = removeDuplicates(availablePkmn);
		availablePkmn = availablePkmn.join(', ');
		elements += '<div class="recipe" data-recipe="' + recipe.m_no + '">';
		elements += '<div class="recipe-image"><img src="assets/recipes-image/'+recipe.m_iconPath+'.jpg"></div>'; 
		elements += '<div class="recipe-name">'+recipe.__name+'</div>';
		elements += '<div class="recipe-target">'+recipe._poke+'</div>';
		elements += '<div class="recipe-pkmn">'+availablePkmn+'</div>';
		elements += '</div>';
	});
	return elements;
}

function buildIngredientsStructure(){
	var elements = '';
	$.each(ingredientsDB, function(key, ingredient){
		elements += '<label for="'+ingredient.m_no+'">'+ingredient.__name+'<input id="'+ingredient.m_no+'" type="number" name="'+ingredient.m_no+'" value="15"></label>';
	});
	return elements;
}

function getAvailableRecipes(recipeId){
	var availableRecipes = [];
	targetRecipes = getTargetRecipesMeta(recipeId);
	var index = 0;
	var limit = 100;
	$.each(targetRecipes, function(i, currentRecipe){
		var isAvailable = true;
		if(index < limit){
			$.each(currentRecipe.m_itemNo, function(j, ingredientsId){
				if(isAvailable == true){
					required = parseInt(currentRecipe.m_itemNoCount[j])*3;
					var available = $('input#'+ingredientsId).val();
					if(required > available){
						isAvailable = false;
					}
				}
			})
			index++;
			if(isAvailable == true){
				availableRecipes.push(currentRecipe);
			}
		}
	})
	var htmlRecipes = showCurrentRecipe(availableRecipes, recipeId);
	$('.filtered-recipe-list').html(htmlRecipes);
	setFrontPage('filtered-recipe-page');
}

function showCurrentRecipe(recipes, recipeId){
	$.each(recipes, function(index, elements){
		if (typeof elements.sum == 'undefined'){
			var sum = 0;
			$.each(elements.m_itemNo, function(i, ingredientValue){
				ingredientValue = getIngredientMeta(ingredientValue).m_itemPrice;
				sum = sum + (ingredientValue * elements.m_itemNoCount[i]);
			})
			if(sum > 10){
				sum = 10;
			}
			elements.sum = sum;
		}
	})
	recipes.sort(compare);
	var output = '';
	$.each(recipes, function(index, elements){
		output += '<div class="filtered-recipe">';
		output += '<div class="recipe-ingredients">';
		var sum = elements.sum;
		var pkmnObjHook = 'total'+sum;
		$.each(elements.m_itemNo, function(i, ingredientId){
			var recipeIngredient = getIngredientMeta(ingredientId).__name;
			if(i > 0){
				output += ', ';
			}
			output += recipeIngredient+' x'+elements.m_itemNoCount[i];
		})
		var pokemonList = getRecipeMeta(recipeId).pokemon[pkmnObjHook];
		output += '</div><div class="sum">'+elements.sum+'</div>';
		output += '<div class="available-pkmn">'+pokemonList+'</div>';
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
	if(index !== undefined){
		getAvailableRecipes(index);
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