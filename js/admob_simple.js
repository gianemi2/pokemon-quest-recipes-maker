var admobid = {};

// TODO: replace the following ad units with your own
if( /(android)/i.test(navigator.userAgent) ) {
  admobid = { // for Android
    banner: 'ca-app-pub-8441432984375470/3021539966',
    interstitial: 'ca-app-pub-8441432984375470/3707510644',
    rewardvideo: 'ca-app-pub-3940256099942544/5224354917',
  };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
  admobid = { // for iOS
    banner: 'ca-app-pub-8441432984375470/3021539966',
    interstitial: 'ca-app-pub-8441432984375470/3707510644',
    rewardvideo: 'ca-app-pub-3940256099942544/5224354917',
  };
} /*else {
  admobid = { // for Windows Phone
    banner: 'ca-app-pub-8441432984375470/3021539966',
    interstitial: 'ca-app-pub-8441432984375470/3707510644',
    rewardvideo: '',
  };
}*/

function initApp() {
  if (! AdMob ) { alert( 'admob plugin not ready' ); return; }
  createBanner();
}

function createBanner(){
  if(AdMob) AdMob.createBanner( {
    adId:admobid.banner,
    position:AdMob.AD_POSITION.BOTTOM_CENTER,
    autoShow: true
  } );
}

function showFullscreenAd(){
    // this will load a full screen ad on startup
    if(Object.keys(admobid).length > 0){
      AdMob.prepareInterstitial({
        adId: admobid.interstitial,
        autoShow: true
      });
    }
}

if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}

var count = 0;
function casualFullscreenAd(){
  if(count == 1){
    showFullscreenAd();
  } else if(count % 2 == 0){
    if(count != 0){
      var penny = Math.random();
      if(penny > 0.7){
        showFullscreenAd();
        count = 1;
      } else {
        count = 0;
      }
    }
  }
  count++;
}