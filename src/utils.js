var Utils = {};

Utils.extend = function(target, source) {
  for (var n in source) {
    if (!source.hasOwnProperty(n)) {
      continue;
    }
    if(target.hasOwnProperty(n)) {
      continue;
    }
    target[n] = source[n];
  }
};

module.exports = Utils;
