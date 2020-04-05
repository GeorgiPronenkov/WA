/**
 * Given a string of space separated numbers, return the highest and lowest number. * highAndLow("1 2 3 4 5"); // return "5 1"
 */

function numbers(inputStr) {
	let arr = inputStr
		      .split(' ')
		      .map(Number);

	return `${Math.min(...arr)} ${Math.max(...arr)}`;

}
console.log(numbers('1 9 3 4 -5')); //-5 9

//min number in array
function min(arr) {
	return arr.reduce((a, b) => a < b ? a:b)
  }
  console.log(min([4, 2, 1, -13, 9])); //-13

// min and max  
  function numbers(arr) {
	return [Math.min(...arr), Math.max(...arr)];
}
console.log(numbers([2334454, 5])); // [5, 2334454]
