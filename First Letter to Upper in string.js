function toUpper(str) {
	const toUppercase = str
		 .split(' ')
		 .map( word => word[0].toUpperCase() + word.slice(1))
			  .join(' ');
	 console.log(toUppercase);
	return toUppercase;
	 
	//2nd
	const words = str.split(' ');
	const result = words.map( word => word[0].toUpperCase() + word.slice(1)).join(' ');
	console.log(result);
	return result;
	 
	//3rd
	const toRegExtoUpper = str => str.replace(/\b\w/g, match =>
		 match.toUpperCase());
}
toUpper('the quick brown fox');
