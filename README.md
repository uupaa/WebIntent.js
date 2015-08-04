# WebIntent.js [![Build Status](https://travis-ci.org/uupaa/WebIntent.js.svg)](https://travis-ci.org/uupaa/WebIntent.js)

[![npm](https://nodei.co/npm/uupaa.webintent.js.svg?downloads=true&stars=true)](https://nodei.co/npm/uupaa.webintent.js/)

WebIntent implement.

- Please refer to [Spec](https://github.com/uupaa/WebIntent.js/wiki/) and [API Spec](https://github.com/uupaa/WebIntent.js/wiki/WebIntent) links.
- The WebIntent.js is made of [WebModule](https://github.com/uupaa/WebModule).

## Browser and NW.js(node-webkit)

```js
<script src="<module-dir>/lib/WebModule.js"></script>
<script src="<module-dir>/lib/WebIntent.js"></script>
<script>
if (0) {
    // # Open the Google Play store.
    var packageName = "com.android.vending";           // Google Play
    var url         = "https://play.google.com/store"; // Google Play
    var intentURL   = WebIntent.build(packageName, url);

    WebIntent.redirect( intentURL );
}

if (0) {
    // # Open the page of Caniuse.com in Chrome for Android.
    var packageName = "com.android.chrome";               // Chrome for Android package name
    var url         = "http://caniuse.com/#search=webgl"; // Caniuse.com
    var intentURL   = WebIntent.build(packageName, url);

    WebIntent.redirect( intentURL );
}
</script>
```

