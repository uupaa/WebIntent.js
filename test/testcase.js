var ModuleTestWebIntent = (function(global) {

global["BENCHMARK"] = false;

var test = new Test("WebIntent", {
        disable:    false, // disable all tests.
        browser:    true,  // enable browser test.
        worker:     true,  // enable worker test.
        node:       true,  // enable node test.
        nw:         true,  // enable nw.js test.
        button:     true,  // show button.
        both:       true,  // test the primary and secondary modules.
        ignoreError:false, // ignore error.
        callback:   function() {
        },
        errorback:  function(error) {
        }
    }).add([
        // generic test
        testWebIntent_build,
    ]);

if (IN_BROWSER || IN_NW) {
    if ( /Android/.test(navigator.userAgent) ) {
        if ( confirm("Do you want to redirect?") ) {
            test.add([
                testWebIntent_redirect,
            ]);
        }
    }
} else if (IN_WORKER) {
    test.add([
        // worker test
    ]);
} else if (IN_NODE) {
    test.add([
        // node.js and io.js test
    ]);
}

// --- test cases ------------------------------------------
function testWebIntent_build(test, pass, miss) {
    var url         = "https://play.google.com/store"; // Google Play
    var packageName = "com.android.vending";           // Google Play
    var intentURL   = WebIntent.build(packageName, url);
    var valid = "intent://play.google.com/store#Intent;package=com.android.vending;action=android.intent.action.VIEW;scheme=https;end";

    console.log( intentURL );
    if (intentURL === valid) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testWebIntent_redirect(test, pass, miss) {
    if (0) {
        // # Open the page of Caniuse.com in Chrome for Android.
        var packageName = "com.android.chrome";               // Chrome for Android package name
        var url         = "http://caniuse.com/#search=webgl"; // Caniuse.com
        var intentURL   = WebIntent.build(packageName, url);

        WebIntent.redirect( intentURL );
    }
    if (1) {
        // # Open the page of Caniuse.com in Chrome for Android.
        var packageName = "com.android.chrome";               // Chrome for Android package name
        var url         = "http://caniuse.com/#search=webgl"; // Caniuse.com
        var intentURL   = WebIntent.build(packageName, url);

        WebIntent.redirect( intentURL );
    }
}

return test.run();

})(GLOBAL);

