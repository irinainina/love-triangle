module.exports = function getLoveTrianglesCount(arr) {
  var count = 0;
  for(let i = 0; i < arr.length; i++) {
    var one = arr[i]; 
    var two = arr[one - 1]; 
    var three = arr[two - 1]; 
    if(one === i + 1) continue;
    if(three === i + 1) count++;
  }
  return count / 3;
};