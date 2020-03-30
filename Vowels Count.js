function getCount(input) {
	//let match = /[aeiou]/gi;
	// return input
	// 	   .replace(/[^aeiou]/gi, '')//replace with nothing
	// 	   .length; 
	
	//2
	const matches = input.match(/[aeiou]/gi);
	return matches ? matches.length : 0; // ternary operator, if no matches - null is returned
}
console.log(getCount('abracadabra'));
