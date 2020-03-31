function concatReverse(arr) {
	let allStrings = arr.toString();
	let chars = Array.from(allStrings);
	let revChars = chars.reverse();
	let revString = revChars.join('');
	console.log(revString);
}

concatReverse(['I' , 'am', 'No4']); //4oN,ma,I
