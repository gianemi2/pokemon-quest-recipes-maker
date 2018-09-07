document.addEventListener('deviceready', initializeStore, false);

function initializeStore() {
    // Let's set a pretty high verbosity level, so that we see a lot of stuff                
    // in the console (reassuring us that something is happening).                
    store.verbosity = store.QUIET;
    // We register a dummy product. It's ok, it shouldn't                
    // prevent the store "ready" event from firing.  "remove_ads"  is the current id                 
    store.register({
        id: "remove_ads",
        alias: "no ads",
        type: store.NON_CONSUMABLE
    });

    store.when("remove_ads").owned(function() {
        disableADS(); // custom function triggered
    });

    store.when("remove_ads").approved(function(product) {
        product.finish();
	});
    // After we've done our setup, we tell the store to do                
    // it's first refresh. Nothing will happen if we do not call store.refresh()                
    store.refresh();
}

function restorePurchases (){            
    store.refresh();
    store.when("remove_ads").approved(function(product) {
        disableADS();
        product.finish();
    });
}

function buyADS(){   
	store.order('remove_ads');
}

function disableADS(){
	//ads status = false no ads inside app
	window.localStorage.setItem("premiumUser", "true");
    loadAdsPage();
}