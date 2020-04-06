//n! = n × (n−1)!
 
 function factorial(number) {
	if (number <= 1) {
	    return 1;
	}
	else {
	    return (number * (number -1));
	 }
}
console.log(factorial(4));

//with for Loop
function factorial(number) {
	if (number <= 1) {
		return 1;
	}
	for (let i = number-1; i >= 1; i--) {
		number *= i;
	}
	return number;
}
console.log(factorial(4));

//=>
 const factorial = n => {
  if (n <= 1)
  	return 1;
  return n * factorial(n - 1);
 };
 console.log(factorial(4));


 //with tern.operator
 function factorial(number){
    return (number < 2) ? 1:factorial(number-1) * number;
 }
 console.log(factorial(4));


//  Example: How many different ways can 7 people come 1st, 2nd and 3rd?
//  The list is quite long, if the 7 people are called a,b,c,d,e,f and g then the list includes:
 
//  abc, abd, abe, abf, abg, acb, acd, ace, acf, ... etc.
 
//  The formula is  7!(7-3)!  =  7!4! 
 
//  Let us write the multiplies out in full:
 
//  7 × 6 × 5 × 4 × 3 × 2 × 14 × 3 × 2 × 1   =  7 × 6 × 5
 
//  That was neat. The 4 × 3 × 2 × 1 "cancelled out", leaving only 7 × 6 × 5. And:
 
//  7 × 6 × 5  =  210
 
//  So there are 210 different ways that 7 people could come 1st, 2nd and 3rd.

