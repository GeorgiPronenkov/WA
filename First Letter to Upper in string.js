function toUpper(str) {
	// const toUppercase = str
	// 				  	.split(' ')
	// 	 			  	.map(word => word[0].toUpperCase() + word.slice(1))
	// 		  		  	.join(' ');
	//  console.log(toUppercase);
	// return toUppercase;
	 
	//2
	const regexToUpper = str => str.replace(/\b\w/g, match =>
								match.toUpperCase());
	return regexToUpper;					
						
}
toUpper('the quick brown fox');
