function getCount(input) {

	let match = /[aeiou]/gi;
	return input
		.replace(/[^aeiou]/gi, '')
		.length; //replace with nothing
	// const matches = str.match(/[aeiou]/g);
	//return matches ? matches.length : 0; // ternary operator, if no matches - null is returned
}
console.log(getCount('abracadabra'));
