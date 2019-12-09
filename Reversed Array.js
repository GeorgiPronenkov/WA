/**
 * Convert number to reversed array of digits
 *
 * 348597 => [7,9,5,8,4,3]
 */
//string-split-reduceRight

function reverced(number) {
	let nums = number.toString();
	let newin = Array
		.from(nums)
		.map(Number)
		.reverse();
	return  newin;
}
console.log(reverced(348597));
