/* 

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/

const isPangram = (string) => {
	// Use indexOf method to know if Array has Index Value
	// Initialize alphabet string
	// Use split method to separate into arrays
	// Find X Index in string parameter
	// If return value is -1, string doesnt have every letter in alphabet

	string = string.toLowerCase();
	return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
		return string.indexOf(x) !== -1;
	});
};
