function remove(input) {

	//return input.filter(Boolean);    //object.value
	let clean = Object.values(input);
	return clean;
}
remove([[1, 2, ,,,,,,3, ,,,,,, 4,  null, undefined]]);
