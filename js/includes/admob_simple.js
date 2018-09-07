var admobid = {};

// TODO: replace the following ad units with your own
if (/(android)/i.test(navigator.userAgent)) {
    admobid = { // for Android
        banner: 'ca-app-pub-8441432984375470/3021539966',
        interstitial: 'ca-app-pub-8441432984375470/3707510644',
        rewardvideo: 'ca-app-pub-8441432984375470/7607252850',
    };
} else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: 'ca-app-pub-8441432984375470/6928859337',
        interstitial: 'ca-app-pub-8441432984375470/3037839490',
        rewardvideo: 'ca-app-pub-8441432984375470/6374449270',
    };
}
/*else {
  admobid = { // for Windows Phone
    banner: 'ca-app-pub-8441432984375470/3021539966',
    interstitial: 'ca-app-pub-8441432984375470/3707510644',
    rewardvideo: '',
  };
}*/

function initApp() {
    if (!AdMob) {
        alert('admob plugin not ready');
        return;
    }
    if(!isUserPremium()){
        createBanner();
    }
}

function createBanner() {
    if(!isUserPremium()){
        if (AdMob) AdMob.createBanner({
            adId: admobid.banner,
            position: AdMob.AD_POSITION.BOTTOM_CENTER,
            autoShow: true
        });
    }
}

function showFullscreenAd() {
    if(!isUserPremium()){
        // this will load a full screen ad on startup
        if (Object.keys(admobid).length > 0) {
            AdMob.prepareInterstitial({
                adId: admobid.interstitial,
                autoShow: true
            });
        }
    }
}

function showVideoForRemoveAds(){
    if (Object.keys(admobid).length > 0) {
        AdMob.prepareRewardVideoAd({
            adId: admobid.rewardvideo,
            autoShow: true,
            fail: function(){
                alert("At the moment there's no video ads available. Please try again later.");
            }
        });
    }
}

document.addEventListener('onAdPresent', function(data){ 
    var watchedVideo = parseInt(window.localStorage.getItem("userVideos"));
    if(data.adType == 'rewardvideo') { 
        watchedVideo++;
        window.localStorage.setItem("userVideos", watchedVideo);
        loadAdsPage();
    } 
});

if ((/(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent))) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}

var count = 0;
var limit = 4;
var showAdvice = false;
function casualFullscreenAd(isModal) {
    if(count == 4){
        if(window.localStorage.getItem("userVoteInteraction") == 'false'){
            AppRate.promptForRating();
        };
    }
    if(isUserPremium() || isUserVideo()){
        console.log('no ads for you today');
    } else {
        if(isModal == undefined){
            isModal = false;
        }
        if(count != 0){
            console.log('Count: '+count+' Limit: '+limit+' isModal:' +isModal+' ShowAdvice: '+showAdvice);
            if(count % limit == 0){
                showFullscreenAd();
                limit = limit + 2;
                count = 0;
            }
            if(showAdvice == false){
                if(count == 5){
                    showAdvice = true;
                } 
            }
            if(window.localStorage.getItem("noticeVideoPremium") == null){
                if(showAdvice && !isModal){
                    $('.modal').modal('close');
                    $('#modal-noticeVideoPremium').modal('open');
                }
            }
        }
        count++;
    }
}