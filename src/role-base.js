var RoleBase = {};

RoleBase.remember = function(key, value) {
  if (value === undefined) {
    return this.creep.memory[key];
  }
  this.creep.memory[key] = value;
  return value;
};

RoleBase.forget = function(key) {
  delete this.creep.memory[key];
};

module.exports = RoleBase;
