$('.sidenav li a').click(function(e){
	e.preventDefault();
})

function onBackKeyDown() {
    if($('#app-body').find('.active-section').hasClass('sub-page')){
    	backNavigation();
    } else {
    	setFrontPage('homepage');
    }
}

function setPageTitle(title){
	if(title === undefined){
		title = $(getCurrentPage()).data('title');
	}
	$('#navigation h1').text(title);
}

function getCurrentPage(){
	return $('#app-body').find('.active-section');
}

function setMenuButton(pageId){
	$('.sidenav-btn').remove();
	if($('#'+pageId).hasClass('sub-page')){
		$('#navigation').prepend('<a href="#" id="backButton" class="sidenav-btn"><i class="material-icons arrow_back"></i></a>');
	} else {
		$('#navigation').prepend('<a href="#" id="homeButton" data-target="slide-out" class="sidenav-trigger sidenav-btn"><i class="material-icons">menu</i></a>');
	}
}

function setFrontPage(page, runAd){
	if(runAd === undefined) {
      	runAd = true;
   	}
	if(page != 'homepage'){
		document.addEventListener("backbutton", onBackKeyDown, false);
	} else {
		document.removeEventListener("backbutton", onBackKeyDown);
	}
	var ads = $('#app-body').find('#'+page).data('ads');
	if(ads == undefined){
		ads = true;
	} else {
		ads = false;
	}
	if(runAd || ads){
		casualFullscreenAd();
	}
	window.scrollTo(0, 0); 
	$('#app-body').find('.active-section').removeClass('old-section');
	$('#app-body').find('.active-section').removeClass('active-section').addClass('old-section');
	$('#app-body').find('#'+page).addClass('active-section');
	setPageTitle();
	setMenuButton(page);
}

function backNavigation(page){
	if(page === undefined){
		page = $('#app-body').find('.old-section').attr('id');
	}
	setFrontPage(page, false);
}

$(document).on('click', '.navigation-link', function(){
	var page = $(this).attr('href').replace('#', '');
	setFrontPage(page);
})

$(document).on('click', '#backButton', function(){
	backNavigation();
});

setMenuButton('homepage');
