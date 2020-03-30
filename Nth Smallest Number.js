/**
 * Given an array of integers, find the Nth smallest element in this array
 */
function solve(arr,nth) {

	return arr.sort((a, b) => a - b)[nth-1]; //?
}
console.log(solve([6,1,2,5,8,4],3)); //4 // {3,1,2} ,2) ==> return (2)
