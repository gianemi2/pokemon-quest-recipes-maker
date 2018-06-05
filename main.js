var recipes = database.recipes;
var ingredients = database.ingredients;

function buildRecipesStructure(){
	var elements = '';
	$.each(recipes, function(index, value){
		elements += '<div class="recipe-name" data-recipe="' + index + '"><img src="assets/recipes-image/'+value.design.image+'"></div>'; 
	});
	return elements;
}

$(document).on('click', '.recipe-name', function(){
	var index = $(this).data('recipe');
	var targetRecipe = recipes[index].unique;
	for(var i = 0; i < targetRecipe.length; i++){
		var currentRecipe = targetRecipe[i];
		console.log(currentRecipe);
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
			//console.log(currentRecipe);
		}
	}
	console.log('Fine ricette disponibili');
})

//Build HTML layout
$('.recipes').append(buildRecipesStructure);