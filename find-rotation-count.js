const { getRotatedStartInd } = require('./util');  

function findRotationCount(arr) {
  return getRotatedStartInd(arr, 0, arr.length - 1); 
}

module.exports = findRotationCount;