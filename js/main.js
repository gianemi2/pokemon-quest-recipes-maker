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

function showNoticeLegendaryRecipe(){
	html = '<div id="modal-noticeLegendaryRecipe" class="modal modal-fixed-footer"><div class="modal-content ">';
	html += '<h6>ATTENTION!</h6>';
	html += '<p>At the moment legendary recipes is still in testing. I cannot guarantee this recipes is the best for find legendary pokemon.</p>';
	html += "<p>Please if you find something wrong in it or you think there's more recipes not listing in do not leave a bad rating on Store.</p>";
	html += "<p><a href='mailto:info@marcogiannini.net'>Send me a mail</a> with what you think should be added and I'll do what I can to implement it as soon as possible.</p>";
	html += "<pThanks for your help!></p>";
	html += '</div><div class="modal-footer">';
	html += '<a href="#!" class="modal-close waves-effect waves-green btn-flat">OK</a>';
	html += '</div></div>';
	$('body').append(html);
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
listInPokedex();

function listInPokedex(pokemon){
	var queriedPokemon = [];
	var isChosen = false;
	if(pokemon == null){
		queriedPokemon = pokemonDB;
	} else {
		isChosen = true;
		var supportArray = [];
		queriedPokemon.push(getPokemonByMeta('name', pokemon));
	}
	if(isChosen){
		for(i = 0; i < queriedPokemon.length; i++){
			var v = queriedPokemon[i];
			var evolveFrom = true;
			var evolveTo = true;
			if($.isEmptyObject(v.evolution.from)){
				evolveFrom = false;
			}
			if($.isEmptyObject(v.evolution.to)){
				evolveTo = false;
			}
			if(evolveFrom){
				if($.inArray(v.evolution.from.id, supportArray) == -1){
					supportArray.push(v.evolution.from.id);
					queriedPokemon.push(getPokemonByMeta('name',v.evolution.from.name));	
				}
			}
			if(evolveTo){
				if($.inArray(v.evolution.to.id, supportArray) == -1){
					supportArray.push(v.evolution.to.id);
					queriedPokemon.push(getPokemonByMeta('name',v.evolution.to.name));
				}
			}
			supportArray.push(v.id);
		};
		queriedPokemon.sort(orderById);
	}
	pokedexTemplate(queriedPokemon, isChosen);
}

function pokedexTemplate(queriedPokemon, isChosen){
	var html = '';
	var modal = '';
	if(!isChosen && !pokedexBuilt){
		pokedexBuilt = true;
		$.each(queriedPokemon, function(i, v){
			var id = ("00" + v.id).slice(-3);
			var classes = '';
			var evolveFrom = true;
			var evolveTo = true;
			if($.isEmptyObject(v.evolution.from)){
				classes = 'first';
				evolveFrom = false;
			}
			if($.isEmptyObject(v.evolution.to)){
				classes = 'last';
				evolveTo = false;
			}
			html += '<div class="pokedex-element active '+classes+' p-id-'+v.id+'">';
			html += '<div class="pokemon-info">';
			html += '<div class="pokemon-evo">';
			html += '<img class="pokemon-image" src="assets/pokemon-image/'+v.image+'">';
			if(evolveTo){
				html += '<div class="evolution"><small>Evolve</small><span><small>Lv. </small>'+v.evolution.to.level+'</span><i class="material-icons keyboard_arrow_down"></i></div>';
			}
			html += '</div>';
			html += '<div class="pokemon-name">';
			html += '<h5>'+v.name+'</h5><h6># '+id+'</h6>';
			html += '<div class="pokemon-actions">';
			html += '<a class="waves-effect waves-light btn-small modal-trigger" href="#modal-moves-'+id+'">Moves</a>';
			if(!evolveFrom){
				html += '<a class="waves-effect waves-light btn-small modal-trigger" href="#modal-recipe-'+id+'">Recipes</a>';
			}		
			html += '</div></div>';
			modal += '<div id="modal-moves-'+id+'" class="modal bottom-sheet modal-moves">';
			modal += '<div class="modal-heading">';
			modal += '<img src="assets/pokemon-image/'+v.image+'"">';
			modal += '<h6>'+v.name+'</h6>';
			modal += '</div>';
			$.each(v.attack, function(count, moves){
				modal += '<div class="moves-div">';
				modal += '<div class="moves-name">';
				modal += '<h6>'+moves.name+'</h6>';
				modal += '<span class="type '+moves.type+'">'+moves.type+'</span>';
				modal += '</div>';
				modal += '<div class="moves-description">';
				modal += '<p>'+moves.description+'</p>';
				modal += '</div>';
				modal += '</div>';
			})
			modal += '</div>';
			if(!evolveFrom){
				var recipes = getEveryRecipeByPkmn(v.name);
				modal += '<div id="modal-recipe-'+id+'" class="modal bottom-sheet modal-recipes">';
				modal += '<div class="modal-heading">';
				modal += '<img src="assets/pokemon-image/'+v.image+'"">';
				modal += '<h6>'+v.name+'</h6>';
				modal += '</div>';
				$.each(recipes, function(a,b){				
					modal += '<div class="recipe-div">';
					$.each(b.m_itemNo, function(j,currentRecipe){
						
						var recipeIngredient = getIngredientMeta(currentRecipe)._image;
						var count = b.m_itemNoCount[j];
						for(j = 0; j < count; j++){
							modal += '<img class="ingredient-image-list" src="assets/ingredient-image/'+recipeIngredient+'">';
						}
					})
					modal += '</div>';
				})
				modal += '<div></div></div>';
			}
			html += '</div></div></div>';
		});
		$('#pokedex .collection-container').html(html);
		$('body .modals').append(modal);
	} else {
		$('.pokedex-element').removeClass('active');
		$.each(queriedPokemon, function(i, v){
			$('.p-id-'+v.id).addClass('active');
		});
	}
}

function getEveryRecipeByPkmn(pkmnName){
	var recipeFormulas = [];
	var recipes = searchPkmnInDB(pkmnName);
	var ingredients = [];
	$.each(recipes, function(i, v){
		var medium = v.recipe_total / 5;
		if(medium == 2){
			medium = 2.01;
		}
		var els = getRecipesByMeta(recipes[i].recipe_id, 'm_itemPriceAverage', [medium], 3);
		els.difficult = Object.keys(els);
		recipeFormulas.push(els);
	})
	recipeFormulas.sort(orderByDifficult);
	var test = [];
	var count = 0;
	$.each(recipeFormulas, function(a,b){
		var hard = b.difficult;
		$.each(b[hard], function(c,d){
			if(count < 4){
			test.push(d);
			count++;
			}
		})
	})
	return test;
}

function searchPkmnInDB(pkmnName){
	var recipesInfo = [];
	$.each(recipeDB, function(i,v){
		$.each(v.pokemon, function(index, pkmnList){
			if($.inArray(pkmnName, pkmnList) != -1){
				var info = {};
				info.recipe_id = v.m_no;
				info.recipe_total = index;
				recipesInfo.push(info);
			}
		})
	});
	return recipesInfo;
}

function getRecipesByMeta(id, meta, metaValue, index){
	if(index === undefined) {
      	index = 5;
   	}
	var metaCount = {};
	var availableRecipes = {};
	var support = {};
	for(var i = 0; i < metaValue.length; i++){
		metaCount[metaValue[i]] = 0;
		availableRecipes[metaValue[i]] = [];
		support[metaValue[i]] = [];
	}
	var recipes = getTargetRecipesMeta(id);
	$.each(recipes, function(i,v){
		for(var k = 0; k < metaValue.length; k++){
			if(v[meta] == metaValue[k]){
				if($.inArray( 10, v.m_itemNo) != -1 || $.inArray( 9, v.m_itemNo) != -1){
					support[metaValue[k]].push(v);
				} else {
					metaCount[metaValue[k]]++;
					availableRecipes[metaValue[k]].push(v);
					if(metaCount[metaValue[k]] == index){
						metaValue[k] = null;
					}
				}
			}
		}
	})
	$.each(metaCount, function(i, v){
		var count = 0;
		while(v < index){
			if(support[i].length > 0){
				if(support[i][count] !== undefined){
					availableRecipes[i].push(support[i][count])
				}
			}
			v++;
			count++;
		}
	})
	return availableRecipes;
}

function getPokemonByMeta(meta, metaValue){
	var found = false;
	$.each(pokemonDB, function(i,v){
		if(!found){
			if(v[meta] == metaValue){
				found = v;
			}
		}
	})
	return found;
}

function buildRecipesStructure(){
	var elements = '';
	$.each(recipeDB, function(key, recipe){
		var availablePkmn = '';
		var skipComma = false;
		$.each(recipe.pokemon, function(key, pkmn){
			if(pkmn != "Unknown"){
				if(key != '5' && skipComma == false){
					availablePkmn += ',';
				}
				availablePkmn += pkmn;
				skipComma = false;
			} else {
				skipComma = true;
			}
		});
		availablePkmn = availablePkmn.split(',');
		availablePkmn = removeDuplicates(availablePkmn);
		elements += '<div class="collection-item avatar recipe">';
		elements += '<img src="assets/recipes-image/'+recipe.m_iconPath+'.jpg" class="circle">'; 
		elements += '<span class="title">'+recipe.__name+'</span>';
		elements += '<p class="recipe-target">'+recipe._poke+'</p>';
		elements += '<a data-recipe="' + recipe.m_no + '" class="waves-effect waves-light btn-small get-recipes-btn">'+translations.recipesBtnText+'</a><a href="#modal'+recipe.m_no+'" class="waves-effect waves-light btn-small get-pkmn-btn modal-trigger">Pokémon</a>';
		elements += '</div>';
		elements += '<div id="modal'+recipe.m_no+'" class="modal bottom-sheet">';
		elements += '<ul class="collection with-header">';
		elements += '<li class="collection-header"><h6>'+translations.pkmnModalTitle+'<b>'+recipe.__name+'</b></h6></li>';
		$.each(availablePkmn, function(i,v){
			elements += '<li class="collection-item"><img src="assets/pokemon-image/'+getPokemonByMeta('name', v).image+'">'+v+'</li>';
		})
		elements += '</ul>';
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
	var htmlRecipes = showCurrentRecipe(recipeId);
	var recipeName = getRecipeMeta(recipeId).__name;
	$('.filtered-recipe-list ul').html(htmlRecipes);
	$('#recipes').data('title',recipeName);
	setFrontPage('recipes');
	if(recipeId == 17 && window.localStorage.getItem('noticeLegendaryRecipe') == null){
		$('#modal-noticeLegendaryRecipe').modal('open');
	}
}

function showCurrentRecipe(recipeId){
	var output = '';
	if(recipeId == 17){
		var recipes = getRecipesByMeta(recipeId, 'm_itemPriceAverage', [3.4, 3.6, 3.8, 4]);
	} else {
		var recipes = getRecipesByMeta(recipeId, 'm_itemPriceAverage', [1,1.2,1.4,1.6,1.8,2.01]);
	}
	$.each(recipes, function(index, elements){
		if(elements.length > 0){
			output += '<li>';
			var pkmnObjHook = elements[0].m_itemPriceAverage*5;
			if(pkmnObjHook > 10 && recipeId != 17){
				pkmnObjHook = 10;
			}
			var pokemonList = getRecipeMeta(recipeId).pokemon[pkmnObjHook];
			output += '<div class="collapsible-header"><div class="pokemon-list-in-recipe">';
			$.each(pokemonList, function(i,v){
				if(getPokemonByMeta('name', v).image === undefined){
					output += '<div class="pokemon-title"><img src="assets/pokemon-image/Unknown.png"><span>'+v+'</span></div>';
				} else {
					output += '<div class="pokemon-title"><img src="assets/pokemon-image/'+getPokemonByMeta('name', v).image+'"><span>'+v+'</span></div>';
				};
			})
			output += '</div><a class="waves-effect waves-light btn-small get-recipes-btn">'+translations.recipesBtnText+'</a></div>';
			var ingredients = '';
			$.each(elements, function(i, currentRecipe){
				ingredients += '<div class="ingredient-list">';
				$.each(currentRecipe.m_itemNo, function(i, ingredientId){
					var recipeIngredient = getIngredientMeta(ingredientId)._image;
					var count = currentRecipe.m_itemNoCount[i];
					for(i = 0; i < count; i++){
						ingredients += '<img class="ingredient-image-list" src="assets/ingredient-image/'+recipeIngredient+'">';
					}
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

function orderById(a,b) {
	if (a.id > b.id)
		return 1;
	if (a.id < b.id)
		return -1;
	return 0;
}

function orderByDifficult(a,b){
	if (a.difficult > b.difficult)
		return 1;
	if (a.difficult < b.difficult)
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

function loadAdsPage(){
	var html = '';
	if(isUserPremium()){
		html += '<h4>Thanks for your help</h4>';
		html += '<p>I really appreciate your help! Please, if you have any suggestions or requests send me a mail to';
		html += '<a href="mailto:gianemi2@gmail.com"> gianemi2@gmail.com</a>. </p>';
		html += '<p>Have a nice day!</p>';
		html += '<p><i>Marco</i></p>';
		html += '<p><small>Restart your app for remove every remaining ads.</small></p>';
	} else if(isUserVideo()) {
		html += "<h4>Sorry for Ads</h4>";
		html += "<p>I know ads is really annoying but is the only way to keep free an app and always gain something back for your work.</p>";
		html += "<p>I hope you can understand. If you want you can buy this application removing every app inside it, if it's so annoying for you.</p>";
		html += '<a id="becomePremium" class="waves-effect waves-light btn-small">Become premium</a>';
	} else {
		html += "<h4>Sorry for Ads</h4>";
		html += "<p>I know ads is really annoying but is the only way to keep free an app and always gain something back for your work.</p>";
		html += "<p>I hope you can understand. If you want you can buy this application removing every app inside it, if it's so annoying for you.</p>";
		html += '<a id="becomePremium" class="waves-effect waves-light btn-small">Become premium</a>';
		html += '<a onclick="store.refresh()" class="waves-effect waves-light btn-flat">';
		html += "Already purchased</a>";
		html += "<h4>Remove fullscreen ADS</h4>";
		html += "<p>If you want you can remove every fullscreen ads by watching 10 videos. That's a sort of donation without spend money.</p>";
		html += "<p><b>Note: </b>Bottom banner will remain.</p>"
		html += '<a onclick="showVideoForRemoveAds()" class="waves-effect waves-light btn-small">Show video</a>';
		html += '<p><small>You have watched '+window.localStorage.getItem("userVideos")+' videos</small></p>';
		html += "<p><small>If button does not load video try later. Maybe there's no ads available or your phone is not supported for this type of ads.</small></p>";
	}
	$('#remove-ads').html(html);
}

$(document).on('click', '.recipe-element', function(){

})

$(document).on('click', '.backToHomepage', function(){
	setFrontPage('homepage');
});

$(document).on('click', '#becomePremium', function(){
	buyADS();
});

$(document).on('click', '.pokemon-actions a', function(){
	casualFullscreenAd(true);
})

$('#autocomplete-input').keyup(function(event) {
	if($(this).val() == ''){
		$('#flushDex').addClass('hidden');
	} else {
		$('#flushDex').removeClass('hidden');
	}
});

$('#flushDex').click(function(event) {
	listInPokedex(null);
	$('#autocomplete-input').val('');
	$('#flushDex').addClass('hidden');
});

//Build HTML layout
$('.recipes').append(buildRecipesStructure);
//$('.ingredients').append(buildIngredientsStructure);
