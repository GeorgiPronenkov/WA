function concatReverse(arr) {
	let allStrings = arr.toString(); // .join === I,am,No4
	let chars = Array.from(allStrings); //  ["I", ",", "a", "m", ",", "N", "o", "4"]
	let revChars = chars.reverse();
	let revString = revChars.join('');
	console.log(revString);
}

concatReverse(['I' , 'am', 'No4']); //4oN,ma,I
