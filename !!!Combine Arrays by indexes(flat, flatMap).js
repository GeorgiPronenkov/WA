const nums = [1,2,3];
const strings = ['one','two','three'];
const mapped = nums.map((val, index) => [ val, strings[index]]);

console.log(mapped); //[1, "one", 2, "two", 3, "three"] -flatMap
console.log(mapped); //[ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ] - flat

//
var array1 = [1, 2, 3, 4];
var array2 = ["a", "b", "c", "d"];
var array3 = ["f", "d", "s", "a"];

var newArray = array1.map(function(value, index) {
  return value + array2[index] + array3[index];
});
console.log(newArray);  //["1af","2bd","3cs","4da"]