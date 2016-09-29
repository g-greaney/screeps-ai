var CreepFactory = require('creep-factory');


/** @param {Room} room */
function DepositManager(room) {
  this.room = room;
  this.sources = this.room.find(FIND_SOURCES);
  this.maxHarvesters = 3;
}

DepositManager.prototype.assignHarvesterSource = function() {
  var harvesters = CreepFactory.loadCreeps(this.room, 'harvester');
  for (var i = 0; i < this.sources.length; i++) {
    var assigned = 0;
    for (var n = 0; n < harvesters.length; n++) {
      if (harvesters[n].creep.sourceId == this.sources[i].id) {
        i++;
      }
    }
    if (assigned < this.maxHarvesters) {
      return this.sources[i].id;
    }
  }
  return null;
};

DepositManager.prototype.needsHarvesters = function() {
  var creeps = CreepFactory.loadCreeps();
  var assigned = 0;
  for (var i = 0; i < creeps.length; i++) {
    if (creeps[i].remember('role') == 'harvester') {
      assigned++;
    }
  }
  if (assigned < this.maxHarvesters) {
    return true;
  }
  return false;
};

module.exports = DepositManager;
