document.addEventListener('deviceready', setupAppInformation, false);
function setupAppInformation(){
	if(window.localStorage.getItem("userVideos") == null){
		window.localStorage.setItem("userVideos", 0);
	};

	if(window.localStorage.getItem("premiumUser") == null){
		window.localStorage.setItem("premiumUser", false);
	};

	if(window.localStorage.getItem("userLanguage") == null){
		window.localStorage.setItem("userLanguage", 'EN');
	};

	if(window.localStorage.getItem("userVoteInteraction") == null){
		window.localStorage.setItem("userVoteInteraction", false);
	};

	var language = window.localStorage.getItem("userLanguage");
	setLanguage(language);

	var platformId = window.cordova.platformId;
	if (platformId) {
		document.body.classList.add('is-' + platformId);
	}

	loadAdsPage();
	listInPokedex();
	AppRate.preferences = {
		storeAppURL : {
			ios: '1400898872',
			android: 'market://details?id=net.marcogiannini.pokemonquestcompanion'
		},
		customLocale: {
			title: "Do you like Pokemon Quest Companion?",
			message: "Mind giving us some feedback? It won’t take more than a minute and helps to promote our app. Thanks for your support!",
			cancelButtonLabel: "Nope, thanks!",
			laterButtonLabel: "Remind Me Later",
			rateButtonLabel: "YEEEP!",
			yesButtonLabel: "YEEEP!",
			noButtonLabel: "Not really",
			appRatePromptTitle: 'Do you like using %@',
			feedbackPromptTitle: 'Mind giving us some feedback?',
		},
		simpleMode: true,
		callbacks: {
			handleNegativeFeedback: function(){
				console.log('feedback negative');
			},
			onRateDialogShow: function(callback){
				console.log(callback);
				console.log('dialog show');
			},
			onButtonClicked: function(buttonIndex){
				//Don't want to vote
				if(buttonIndex == 1 || buttonIndex == 3){
					window.localStorage.setItem("userVoteInteraction", 'true');
				}
			}
		}
	}
}
var pokedexBuilt = false;
setLanguage('EN');

function setLanguage(language){
	recipeDB = databaseRecipes[language];
	allRecipesDB = databaseAllRecipes;
	ingredientsDB = databaseIngredients[language].m_datas.Array;	
	translations = databaseStrings[language];
	pokemonDB = pokemonDatabase[language];
}

$(document).ready(function(){
	showNoticeVideoPremium();
	showNoticeLegendaryRecipe();
	$('.tabs').tabs();
	$('.modal').modal();
	$('#modal-noticeVideoPremium').modal({
		onCloseEnd: function(){
			window.localStorage.setItem("noticeVideoPremium", 'true');
		}
	});
	$('#modal-noticeLegendaryRecipe').modal({
		onCloseEnd: function(){
			window.localStorage.setItem("noticeLegendaryRecipe", 'true');
		}
	});
	$('.collapsible').collapsible();
	$('.sidenav').sidenav();
	$('input.pkmn-autocomplete').autocomplete({ 
		data: {
			"Bulbasaur" : "assets/pokemon-image/Bulbasaur.png",
			"Ivysaur" : "assets/pokemon-image/Ivysaur.png",
			"Venusaur" : "assets/pokemon-image/Venusaur.png",
			"Charmander" : "assets/pokemon-image/Charmander.png",
			"Charmeleon" : "assets/pokemon-image/Charmeleon.png",
			"Charizard" : "assets/pokemon-image/Charizard.png",
			"Squirtle" : "assets/pokemon-image/Squirtle.png",
			"Wartortle" : "assets/pokemon-image/Wartortle.png",
			"Blastoise" : "assets/pokemon-image/Blastoise.png",
			"Caterpie" : "assets/pokemon-image/Caterpie.png",
			"Metapod" : "assets/pokemon-image/Metapod.png",
			"Butterfree" : "assets/pokemon-image/Butterfree.png",
			"Weedle" : "assets/pokemon-image/Weedle.png",
			"Kakuna" : "assets/pokemon-image/Kakuna.png",
			"Beedrill" : "assets/pokemon-image/Beedrill.png",
			"Pidgey" : "assets/pokemon-image/Pidgey.png",
			"Pidgeotto" : "assets/pokemon-image/Pidgeotto.png",
			"Pidgeot" : "assets/pokemon-image/Pidgeot.png",
			"Rattata" : "assets/pokemon-image/Rattata.png",
			"Raticate" : "assets/pokemon-image/Raticate.png",
			"Spearow" : "assets/pokemon-image/Spearow.png",
			"Fearow" : "assets/pokemon-image/Fearow.png",
			"Ekans" : "assets/pokemon-image/Ekans.png",
			"Arbok" : "assets/pokemon-image/Arbok.png",
			"Pikachu" : "assets/pokemon-image/Pikachu.png",
			"Raichu" : "assets/pokemon-image/Raichu.png",
			"Sandshrew" : "assets/pokemon-image/Sandshrew.png",
			"Sandslash" : "assets/pokemon-image/Sandslash.png",
			"Nidoran♀" : "assets/pokemon-image/Nidoran♀.png",
			"Nidorina" : "assets/pokemon-image/Nidorina.png",
			"Nidoqueen" : "assets/pokemon-image/Nidoqueen.png",
			"Nidoran♂" : "assets/pokemon-image/Nidoran♂.png",
			"Nidorino" : "assets/pokemon-image/Nidorino.png",
			"Nidoking" : "assets/pokemon-image/Nidoking.png",
			"Clefairy" : "assets/pokemon-image/Clefairy.png",
			"Clefable" : "assets/pokemon-image/Clefable.png",
			"Vulpix" : "assets/pokemon-image/Vulpix.png",
			"Ninetales" : "assets/pokemon-image/Ninetales.png",
			"Jigglypuff" : "assets/pokemon-image/Jigglypuff.png",
			"Wigglytuff" : "assets/pokemon-image/Wigglytuff.png",
			"Zubat" : "assets/pokemon-image/Zubat.png",
			"Golbat" : "assets/pokemon-image/Golbat.png",
			"Oddish" : "assets/pokemon-image/Oddish.png",
			"Gloom" : "assets/pokemon-image/Gloom.png",
			"Vileplume" : "assets/pokemon-image/Vileplume.png",
			"Paras" : "assets/pokemon-image/Paras.png",
			"Parasect" : "assets/pokemon-image/Parasect.png",
			"Venonat" : "assets/pokemon-image/Venonat.png",
			"Venomoth" : "assets/pokemon-image/Venomoth.png",
			"Diglett" : "assets/pokemon-image/Diglett.png",
			"Dugtrio" : "assets/pokemon-image/Dugtrio.png",
			"Meowth" : "assets/pokemon-image/Meowth.png",
			"Persian" : "assets/pokemon-image/Persian.png",
			"Psyduck" : "assets/pokemon-image/Psyduck.png",
			"Golduck" : "assets/pokemon-image/Golduck.png",
			"Mankey" : "assets/pokemon-image/Mankey.png",
			"Primeape" : "assets/pokemon-image/Primeape.png",
			"Growlithe" : "assets/pokemon-image/Growlithe.png",
			"Arcanine" : "assets/pokemon-image/Arcanine.png",
			"Poliwag" : "assets/pokemon-image/Poliwag.png",
			"Poliwhirl" : "assets/pokemon-image/Poliwhirl.png",
			"Poliwrath" : "assets/pokemon-image/Poliwrath.png",
			"Abra" : "assets/pokemon-image/Abra.png",
			"Kadabra" : "assets/pokemon-image/Kadabra.png",
			"Alakazam" : "assets/pokemon-image/Alakazam.png",
			"Machop" : "assets/pokemon-image/Machop.png",
			"Machoke" : "assets/pokemon-image/Machoke.png",
			"Machamp" : "assets/pokemon-image/Machamp.png",
			"Bellsprout" : "assets/pokemon-image/Bellsprout.png",
			"Weepinbell" : "assets/pokemon-image/Weepinbell.png",
			"Victreebel" : "assets/pokemon-image/Victreebel.png",
			"Tentacool" : "assets/pokemon-image/Tentacool.png",
			"Tentacruel" : "assets/pokemon-image/Tentacruel.png",
			"Geodude" : "assets/pokemon-image/Geodude.png",
			"Graveler" : "assets/pokemon-image/Graveler.png",
			"Golem" : "assets/pokemon-image/Golem.png",
			"Ponyta" : "assets/pokemon-image/Ponyta.png",
			"Rapidash" : "assets/pokemon-image/Rapidash.png",
			"Slowpoke" : "assets/pokemon-image/Slowpoke.png",
			"Slowbro" : "assets/pokemon-image/Slowbro.png",
			"Magnemite" : "assets/pokemon-image/Magnemite.png",
			"Magneton" : "assets/pokemon-image/Magneton.png",
			"Farfetch'd" : "assets/pokemon-image/Farfetch-d.png",
			"Doduo" : "assets/pokemon-image/Doduo.png",
			"Dodrio" : "assets/pokemon-image/Dodrio.png",
			"Seel" : "assets/pokemon-image/Seel.png",
			"Dewgong" : "assets/pokemon-image/Dewgong.png",
			"Grimer" : "assets/pokemon-image/Grimer.png",
			"Muk" : "assets/pokemon-image/Muk.png",
			"Shellder" : "assets/pokemon-image/Shellder.png",
			"Cloyster" : "assets/pokemon-image/Cloyster.png",
			"Gastly" : "assets/pokemon-image/Gastly.png",
			"Haunter" : "assets/pokemon-image/Haunter.png",
			"Gengar" : "assets/pokemon-image/Gengar.png",
			"Onix" : "assets/pokemon-image/Onix.png",
			"Drowzee" : "assets/pokemon-image/Drowzee.png",
			"Hypno" : "assets/pokemon-image/Hypno.png",
			"Krabby" : "assets/pokemon-image/Krabby.png",
			"Kingler" : "assets/pokemon-image/Kingler.png",
			"Voltorb" : "assets/pokemon-image/Voltorb.png",
			"Electrode" : "assets/pokemon-image/Electrode.png",
			"Exeggcute" : "assets/pokemon-image/Exeggcute.png",
			"Exeggutor" : "assets/pokemon-image/Exeggutor.png",
			"Cubone" : "assets/pokemon-image/Cubone.png",
			"Marowak" : "assets/pokemon-image/Marowak.png",
			"Hitmonlee" : "assets/pokemon-image/Hitmonlee.png",
			"Hitmonchan" : "assets/pokemon-image/Hitmonchan.png",
			"Lickitung" : "assets/pokemon-image/Lickitung.png",
			"Koffing" : "assets/pokemon-image/Koffing.png",
			"Weezing" : "assets/pokemon-image/Weezing.png",
			"Rhyhorn" : "assets/pokemon-image/Rhyhorn.png",
			"Rhydon" : "assets/pokemon-image/Rhydon.png",
			"Chansey" : "assets/pokemon-image/Chansey.png",
			"Tangela" : "assets/pokemon-image/Tangela.png",
			"Kangaskhan" : "assets/pokemon-image/Kangaskhan.png",
			"Horsea" : "assets/pokemon-image/Horsea.png",
			"Seadra" : "assets/pokemon-image/Seadra.png",
			"Goldeen" : "assets/pokemon-image/Goldeen.png",
			"Seaking" : "assets/pokemon-image/Seaking.png",
			"Staryu" : "assets/pokemon-image/Staryu.png",
			"Starmie" : "assets/pokemon-image/Starmie.png",
			"Mr. Mime" : "assets/pokemon-image/Mr.Mime.png",
			"Scyther" : "assets/pokemon-image/Scyther.png",
			"Jynx" : "assets/pokemon-image/Jynx.png",
			"Electabuzz" : "assets/pokemon-image/Electabuzz.png",
			"Magmar" : "assets/pokemon-image/Magmar.png",
			"Pinsir" : "assets/pokemon-image/Pinsir.png",
			"Tauros" : "assets/pokemon-image/Tauros.png",
			"Magikarp" : "assets/pokemon-image/Magikarp.png",
			"Gyarados" : "assets/pokemon-image/Gyarados.png",
			"Lapras" : "assets/pokemon-image/Lapras.png",
			"Ditto" : "assets/pokemon-image/Ditto.png",
			"Eevee" : "assets/pokemon-image/Eevee.png",
			"Jolteon" : "assets/pokemon-image/Jolteon.png",
			"Vaporeon" : "assets/pokemon-image/Vaporeon.png",
			"Flareon" : "assets/pokemon-image/Flareon.png",
			"Porygon" : "assets/pokemon-image/Porygon.png",
			"Omanyte" : "assets/pokemon-image/Omanyte.png",
			"Omastar" : "assets/pokemon-image/Omastar.png",
			"Kabuto" : "assets/pokemon-image/Kabuto.png",
			"Kabutops" : "assets/pokemon-image/Kabutops.png",
			"Aerodactyl" : "assets/pokemon-image/Aerodactyl.png",
			"Snorlax" : "assets/pokemon-image/Snorlax.png",
			"Articuno" : "assets/pokemon-image/Articuno.png",
			"Zapdos" : "assets/pokemon-image/Zapdos.png",
			"Moltres" : "assets/pokemon-image/Moltres.png",
			"Dratini" : "assets/pokemon-image/Dratini.png",
			"Dragonair" : "assets/pokemon-image/Dragonair.png",
			"Dragonite" : "assets/pokemon-image/Dragonite.png",
			"Mewtwo" : "assets/pokemon-image/Mewtwo.png",
			"Mew" : "assets/pokemon-image/Mew.png"
		},
		onAutocomplete: function(pkmnName){
			listInPokedex(pkmnName);
		}
	})
});

function isUserPremium(){
	var premium = window.localStorage.getItem("premiumUser");
	if(premium == "true"){
		$('#removeAdsLink .is-premium').show();
		$('#removeAdsLink .is-free').hide();
		return true;
	} else {
		$('#removeAdsLink .is-free').show();
		$('#removeAdsLink .is-premium').hide();
		return false;
	}
}

function isUserVideo(){
	var videos = window.localStorage.getItem("userVideos");
	if(videos < 10){
		$('#removeAdsLink .is-premium').hide();
		return false;
	} else {
		$('#removeAdsLink .is-premium').hide();
		return true;
	}
}

function showNoticeVideoPremium(){
	html = '<div id="modal-noticeVideoPremium" class="modal"><div class="modal-content">';
	html += '<h6>You can remove ads for free</h6>';
	html += '<p>Hi! I hope you are enjoing this app! If this is your first try I just want to let you know that you can remove ads for free watching ten ad videos.</p>';
	html += '<p>I know ads are annoying, but is the best way to release an app as free.</p>';
	html += '<p>I will not bother you any more! Have a nice day!</p>';
	html += '</div><div class="modal-footer">';
	html += '<a href="#!" class="modal-close" style="color: #E63934">Nope thanks</a><a href="#remove-ads" class="modal-close waves-effect waves-green btn-flat navigation-link" style="color: #27A69A;">Bring me here</a>';
	html += '</div></div>';
	$('body').append(html);
}

function removePremium(){
	window.localStorage.removeItem('premiumUser');
	isUserPremium();
}

function removeVideos(){
	window.localStorage.removeItem('userVideos');	
}