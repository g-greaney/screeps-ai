var RoomManager = require('room-manager');
var CreepFactory = require('creep-factory');

var roomManager = new RoomManager(Game.spawns.Spawn1.room);

module.exports.loop = function() {
  CreepFactory.cleanup();
  roomManager.manageCreeps();
  roomManager.act();
};
