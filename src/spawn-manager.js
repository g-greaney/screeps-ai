var CreepFactory = require('creep-factory');

function SpawnManager(room) {
  this.room = room;
  this.spawns = this.room.find(FIND_MY_STRUCTURES, {
    filter: {structureType: STRUCTURE_SPAWN}
  });
}

SpawnManager.prototype.spawnCreep = function(role, memory) {
  var parts = [WORK, CARRY, MOVE];
  var canSpawn = this.spawns[0].canCreateCreep(parts, undefined, {'role': role});
  if (canSpawn !== 0) {
    return null;
  }
  var name = this.spawns[0].createCreep(parts, undefined, {'role': role});
  var loadedCreep = CreepFactory.buildCreep(name);
  loadedCreep.init(loadedCreep.creep.room.find(FIND_SOURCES)[0].id);
  return loadedCreep;
};

module.exports = SpawnManager;
