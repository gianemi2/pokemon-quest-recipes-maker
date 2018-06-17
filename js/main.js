var recipeDB = databaseRecipes;
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

function startPkmnSearch(pkmnName){
	casualFullscreenAd();
	var recipes = searchPkmnInDB(pkmnName);
	var output = '';
	$.each(recipes, function(i, v){
		var medium = v.recipe_total / 5;
		if(medium == 2){
			medium = 2.01;
		}
		var recipe = getRecipeMeta(v.recipe_id);
		var ingredients = getRecipesByMeta(recipes[i].recipe_id, 'm_itemPriceAverage', [medium], 3);
	    output += '<ul class="collection with-header with-image">';
		output += '<li class="collection-header">';
		output += '<img src="assets/recipes-image/'+recipe.m_iconPath+'.jpg" class="circle"><h6>'+recipe.__name+'</h5>';
		output += '</li>';
		$.each(ingredients[medium], function(i, currentRecipe){
			insideItem = '<div>';
			$.each(currentRecipe.m_itemNo, function(i, ingredientId){
				var recipeIngredient = getIngredientMeta(ingredientId).__name;
				if(i > 0){
					insideItem += '<br>';
				}
				insideItem += recipeIngredient+' x'+currentRecipe.m_itemNoCount[i];
			})
			insideItem += '</div>';
			output += '<li class="collection-item">'+insideItem+'</li>';
		})
		output += '</ul>';
	})
	$('#pokemon-search .collection-container').html(output);
}

function searchPkmnInDB(pkmnName){
	var recipesInfo = [];
	$.each(recipeDB, function(i,v){
		$.each(v.pokemon, function(index, pkmnList){
			if(pkmnList.includes(pkmnName)){
				var info = {};
				info.recipe_id = v.m_no;
				info.recipe_total = index;
				recipesInfo.push(info);
			}
		})
	});
	return recipesInfo;
}

function getRecipesByMeta(id, meta, metaValue, index = 5){
	var metaCount = {};
	var availableRecipes = {};
	for(var i = 0; i < metaValue.length; i++){
		metaCount[metaValue[i]] = 0;
		availableRecipes[metaValue[i]] = [];
	}
	var recipes = getTargetRecipesMeta(id);
	$.each(recipes, function(i,v){
		for(var k = 0; k < metaValue.length; k++){
			if(v[meta] == metaValue[k]){
				metaCount[metaValue[k]]++;
				availableRecipes[metaValue[k]].push(v);
				if(metaCount[metaValue[k]] == index){
					metaValue[k] = null;
				}
			}
		}
	})
	return availableRecipes;
}

function buildRecipesStructure(){
	var elements = '';
	$.each(recipeDB, function(key, recipe){
		if(recipe.m_no != 17){
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
			elements += '<div class="collection-item avatar recipe">';
			elements += '<img src="assets/recipes-image/'+recipe.m_iconPath+'.jpg" class="circle">'; 
			elements += '<span class="title">'+recipe.__name+'</span>';
			elements += '<p class="recipe-target">'+recipe._poke+'</p>';
			elements += '<a data-recipe="' + recipe.m_no + '" class="waves-effect waves-light btn-small get-recipes-btn">Get recipes</a><a href="#modal'+recipe.m_no+'" class="waves-effect waves-light btn-small get-pkmn-btn modal-trigger">Get Pokémon</a>';
			elements += '</div>';
			elements += '<div id="modal'+recipe.m_no+'" class="modal bottom-sheet">';
			elements += '<ul class="collection with-header">';
			elements += '<li class="collection-header"><h6>Available Pokémon in '+recipe.__name+'</h6></li>';
			$.each(availablePkmn, function(i,v){
				elements += '<li class="collection-item">'+v+'</li>';
			})
			elements += '</ul>';
			elements += '</div>';
		}
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
	var htmlRecipes = showCurrentRecipe(recipeId);
	var recipeName = getRecipeMeta(recipeId).__name;
	$('.filtered-recipe-list ul').html(htmlRecipes);
	$('#recipes').data('title',recipeName);
	setFrontPage('recipes');
}

function showCurrentRecipe(recipeId){
	var output = '';
	var recipes = getRecipesByMeta(recipeId, 'm_itemPriceAverage', [1,1.2,1.4,1.6,1.8,2.01]);
	$.each(recipes, function(index, elements){
		if(elements.length > 0){
			output += '<li>';
			var pkmnObjHook = elements[0].m_itemPriceAverage*5;
			if(pkmnObjHook > 10 && recipeId != 17){
				pkmnObjHook = 10;
			}
			var pokemonList = getRecipeMeta(recipeId).pokemon[pkmnObjHook];

			output += '<div class="collapsible-header"><span class="title">'+pokemonList+'</span><a class="waves-effect waves-light btn-small get-recipes-btn">Show recipes</a></div>';
			var ingredients = '';
			$.each(elements, function(i, currentRecipe){
				ingredients += '<div>';
				$.each(currentRecipe.m_itemNo, function(i, ingredientId){
					var recipeIngredient = getIngredientMeta(ingredientId).__name;
					if(i > 0){
						ingredients += '<br>';
					}
					ingredients += recipeIngredient+' x'+currentRecipe.m_itemNoCount[i];
				})
				ingredients += '</div>';
			})
			output += '<div class="collapsible-body">'+ingredients+'</div>';
			output += '</li>';
		}
	})
	return output;
}

function compare(a,b) {
	if (a.m_itemPriceAverage > b.m_itemPriceAverage)
		return 1;
	if (a.m_itemPriceAverage < b.m_itemPriceAverage)
		return -1;
	return 0;
}

var count = 0;

function removeDuplicates(list) {
	var result = [];
	$.each(list, function(i, e) {
		if ($.inArray(e, result) == -1) result.push(e);
		});
		return result;
	}

	$(document).on('click', '.recipe .get-recipes-btn', function(){
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
//$('.ingredients').append(buildIngredientsStructure);