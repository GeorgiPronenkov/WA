function longestWord(str) {
	 const longest = str.split(' ')
	 					.sort((a, b) => b.length - a.length)[0];
	 return longest;
}
longestWord('Web Development Tutorial');
