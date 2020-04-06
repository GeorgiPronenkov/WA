function dublicate(input) {
	let resultInput = input.split(' ');

	return ([...new Set(resultInput)].join(' '));
}
console.log(dublicate('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));

function dublicate(arrNumbers) {
	let sortArr = arrNumbers.sort();
	// let newArr = [];
	// for (let i = 0; i < arrNumbers.length; i++) {
	// 	if (arrNumbers[i] === arrNumbers[i + 1]) {
	// 	    newArr.push(arrNumbers[i]);
	// 	}
	// }
	//return newArr;
	
	//2nd variant
	let uniq = [...new Set(sortArr)];
	return uniq;
}
console.log(dublicate([1,3,2,5,4,5,7,6,7])); //5