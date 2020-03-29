function isPalindrome(str) {
    str = str.replace(/\W/g, '')
             .toLowerCase(); //gets a lowercase string
    let string = str.split('')
                    .reverse()
                    .join(''); //reverses the string
    //checks if the string and the reversed strings are the same
    if(string == str)
        return "A palindrome";
    else
        return "Not a palindrome";
}
console.log(isPalindrome("level"));
console.log(isPalindrome("levels"));
