/* jshint node: true */
/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

var app = new EmberAddon();
/*
  This Brocfile specifes the options for the dummy test app of this
  addon, located in `/tests/dummy`

  This Brocfile does *not* influence how the addon or the app using it
  behave. You most likely want to be modifying `./index.js` or app's Brocfile
*/

//app.import(app.bowerDirectory + '/select2/dist/css/select2.css');
//app.import(app.bowerDirectory + '/select2/dist/js/select2.js');
//app.import(app.bowerDirectory + '/pikaday/pikaday.js');
//app.import(app.bowerDirectory + '/pikaday/css/pikaday.css');

module.exports = app.toTree();
