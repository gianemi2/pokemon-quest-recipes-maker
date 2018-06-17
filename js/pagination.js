$('.sidenav li a').click(function(e){
	e.preventDefault();
})

function setPageTitle(title = ''){
	if(title == ''){
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
		$('#navigation').prepend('<a href="#" class="sidenav-btn" id="backButton"><i class="material-icons">arrow_back</i></a>');
	} else {
		$('#navigation').prepend('<a href="#" id="homeButton" data-target="slide-out" class="sidenav-trigger sidenav-btn"><i class="material-icons">menu</i></a>');
	}
}

function setFrontPage(page, runAd = true){
	if(runAd){
		casualFullscreenAd();
	}
	$('#app-body').find('.active-section').removeClass('active-section').addClass('old-section');
	$('#app-body').find('#'+page).addClass('active-section');
	setPageTitle();
	setMenuButton(page);
}

function backNavigation(page = ''){
	if(page == ''){
		page = $('#app-body').find('.old-section').attr('id');
	}
	setFrontPage(page, false);
}

$(document).on('click', '.sidenav a', function(){
	var page = $(this).attr('href').replace('#', '');
	setFrontPage(page);
})

$(document).on('click', '#backButton', function(){
	backNavigation();
});

setMenuButton('homepage');


