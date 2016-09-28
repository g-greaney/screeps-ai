function RoleHarvester(creep) {
  this.creep = creep;
}

RoleHarvester.prototype.init = function(sourceId) {
  this.remember('role', 'harvester');
  this.remember('sourceId', sourceId);
};

module.exports = RoleHarvester;
