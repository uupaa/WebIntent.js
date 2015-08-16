// WebIntent test

require("../lib/WebModule.js");

// publish to global
WebModule.publish = true;


require("./wmtools.js");
require("../lib/WebIntent.js");
require("../release/WebIntent.n.min.js");
require("./testcase.js");

