/*jshint node:true*/

var EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'dashboard',
  lazyLoading: true,

  isDevelopingAddon: function() {
    return true;
  }
});
