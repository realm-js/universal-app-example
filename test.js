var realm = require("realm-js");
require('./build/backend.js');
require('./build/universal.js');

realm.start('app.Application');
