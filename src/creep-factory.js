var Utils = require('utils');
var RoleHarvester = require('role-harvester');
var RoleBase = require('role-base');

var CreepFactory = {};

CreepFactory.buildCreep = function(name) {
  var creep = Game.creeps[name];
  var loadedCreep = null;
  if (creep.memory.role == 'harvester') {
    loadedCreep = new RoleHarvester(creep);
  }
  if (loadedCreep !== null) {
    Utils.extend(loadedCreep, RoleBase);
    return loadedCreep;
  }
  return null;
};

CreepFactory.loadCreepsB = function() {
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

CreepFactory.loadCreeps = function(room, role) {
  if (room === undefined && role === undefined) {
    return CreepFactory.loadCreepsB();
  }
  var creeps = [];
  for (var i = 0; i < room.find(FIND_MY_CREEPS).length; i++) {
    var basicCreep = room.find(FIND_MY_CREEPS)[i];
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

CreepFactory.cleanup = function() {
  for (var name in Memory.creeps) {
    if (!Game.creeps[name]) {
      delete Memory.creeps[name];
    }
  }
};

module.exports = CreepFactory;
