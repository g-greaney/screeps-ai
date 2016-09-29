var SpawnManager = require('spawn-manager');
var DepositManager = require('deposit-manager');
var CreepFactory = require('creep-factory');

function RoomManager(room) {
  this.room = room;
  this.spawnManager = new SpawnManager(this.room);
  this.depositManager = new DepositManager(this.room);
}

RoomManager.prototype.act = function() {
  var creeps = CreepFactory.loadCreeps();
  for (var i = 0; i < creeps.length; i++) {
    creeps[i].act();
  }
};

RoomManager.prototype.manageCreeps = function() {
  if (this.depositManager.needsHarvesters()) {
    var memory = {
      'sourceId': this.depositManager.assignHarvesterSource()
    };
    this.spawnManager.spawnCreep('harvester', memory);
  }
};

module.exports = RoomManager;
