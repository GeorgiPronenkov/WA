function isLetter(inputArr) {
	let countNumbers = 0;
	for (let i = 0; i < inputArr.length; i++) {
		if(/\d+/.test(inputArr[i])){
			countNumbers++;
		}
	}
	return countNumbers;
}
console.log(isLetter(['23', 13, 'text']));

//2
const toUpperCase = str => str.split(' ')
				 			  .map(word => word[0].toUpperCase() + word.slice(1)
				 			  .join(' '));
//3
const toUpperRegEx = str => str.replace(/\b\w/g, match => match.toUpperCase());

