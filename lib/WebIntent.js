(function moduleExporter(name, closure) {
"use strict";

var entity = GLOBAL["WebModule"]["exports"](name, closure);

if (typeof module !== "undefined") {
    module["exports"] = entity;
}
return entity;

})("WebIntent", function moduleClosure(/* global */) {
"use strict";

// --- dependency modules ----------------------------------
// --- define / local variables ----------------------------
// --- class / interfaces ----------------------------------
var WebIntent = {
    "build":        WebIntent_build,    // WebIntent.build(packageName:PackageNameString, url:URLString):WebIntentURLString
    "redirect":     WebIntent_redirect, // WebIntent.redirect(intentURL:WebIntentURLString):void
    "repository":   "https://github.com/uupaa/WebIntent.js",
};

// --- implements ------------------------------------------
function WebIntent_build(packageName, // @arg PackageNameString - com.example.app
                         url) {       // @arg URLString - reopen url.
    var scheme = /^https/.test(url) ? "https" : "http";

    url = url.replace(/^https?\:\/\//, ""); // strip scheme

    // https://developer.chrome.com/multidevice/android/intents
    return  "intent://" + url + // URL is not necessary to encodeURIComponentencode.
            "#Intent;" +
                "package=" + packageName + ";" +
                "action=android.intent.action.VIEW;" +
                "scheme=" + scheme + ";" +
            "end";
}

function WebIntent_redirect(intentURL) { // @arg WebIntentURLString - Redirect WebIntent URL
    location.href = intentURL;
}

return WebIntent; // return entity

});

