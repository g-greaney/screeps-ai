function RoleHarvester(creep) {
  this.creep = creep;
}

RoleHarvester.prototype.init = function(sourceId) {
  this.remember('role', 'harvester');
  this.remember('sourceId', sourceId);
};

RoleHarvester.prototype.act = function() {
  var source = Game.getObjectById(this.creep.memory.sourceId);
  if (this.creep.carry.energy < this.creep.carryCapacity) {
    if (this.creep.harvest(source) == ERR_NOT_IN_RANGE) {
      this.creep.moveTo(source);
    }
  }
  else if (Game.spawns['Spawn1'].energy < Game.spawns['Spawn1'].energyCapacity) {
    if (this.creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
      this.creep.moveTo(Game.spawns['Spawn1']);
    }
  }
};

module.exports = RoleHarvester;
