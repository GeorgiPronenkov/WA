/**
 Write a function that receives two characters and prints on a single line all the characters in between them
 according to the ASCII code. Keep in mind that the second character code might be before the first one inside the ASCII table.
*/

function solve(char1, char2) {
   let code1 = char1.charCodeAt(0);
   let code2 = char2.charCodeAt(0); //'ABC'.charCodeAt(0) = 65, 'ABC'.charCodeAt(1) = 66

   let begin = Math.min(code1, code2);
   let end = Math.max(code1, code2);

   let chars = [];
   for (let i = begin + 1; i < end; i++) {
      let currChar = String.fromCharCode(i);  //String.fromCharCode(65, 66, 67);   // returns "ABC"
      
      chars.push(currChar);  //добавя в масива
   }
   console.log(chars.join(' '));
}

solve('C', '#'); //$ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B
