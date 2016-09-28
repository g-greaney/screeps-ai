var Utils = require('utils');
var RoleHarvester = require('role-harvester');
var RoleBase = require('role-base');

function SpawnManager() {
  this.spawn = 'Spawn1';
}

SpawnManager.prototype.spawnCreep = function(role) {
  var parts = [WORK, CARRY, MOVE];
  var canSpawn = Game.spawns[this.spawn].canCreateCreep(parts, undefined, {'role': role});
  if (canSpawn !== 0) {
    return;
  }
  var name = Game.spawns[this.spawn].createCreep(parts, undefined, {'role': role});
  var basicCreep = Game.creeps[name];
  var loadedCreep = new RoleHarvester(basicCreep);
  Utils.extend(loadedCreep, RoleBase);
  loadedCreep.init(basicCreep.find(FIND_SOURCES)[0].id);
  this.creeps.push(loadedCreep);
};

SpawnManager.prototype.loadCreeps = function() {
  var creeps = [];
  for (var name in Game.creeps) {
    var basicCreep = Game.creeps[name];
    var loadedCreep = null;
    if (basicCreep.memory.role == 'harvester') {
      loadedCreep = new RoleHarvester(basicCreep);
    }
    if (loadedCreep !== null) {
      Utils.extend(loadedCreep, RoleBase);
      creeps.push(loadedCreep);
    }
  }
  return creeps;
};

module.exports = SpawnManager;
