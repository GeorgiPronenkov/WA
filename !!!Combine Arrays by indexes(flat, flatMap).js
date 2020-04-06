const nums = [1,2,3];
const strings = ['one','two','three'];
const mapped = nums.map((val, index) => [ val, strings[index]]);

console.log(mapped); //[1, "one", 2, "two", 3, "three"] -flatMap
console.log(mapped); //[ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ] - flat
