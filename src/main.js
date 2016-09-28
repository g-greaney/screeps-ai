var SpawnManager = require('spawn-manager');

var spawnManager = new SpawnManager();

module.exports.loop = function() {
  spawnManager.spawnCreep('harvester');
};
