function sum(number) {
	let sum = 0;
	for (let i = number; i > 0; i--) {
		sum += i;
	}
	return sum

	//2nd variant
	const summation = (n => n * (n + 1) / 2);

}
console.log(sum(8));  //summation(8) => 36


function solve(number) {
    let numAsString = number.toString();
    let sum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        let digit = Number(numAsString.charAt(i));
        sum += digit;
    }
    console.log(sum);
 }

 solve(245678); //32
