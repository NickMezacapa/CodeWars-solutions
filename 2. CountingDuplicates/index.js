/* 

Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

EX:
"abcde" => 0 - no characters repeat more than once

"aabbcde" => 2 - "a" and "b" repeat

"aAbBcde" => 2 - "a" and "b" repeat

"Aa11" => 2 - "a" and 1 are repeating

"indivisibility" => 1 - 'i' occurs 6 times

*/

const duplicateCount = (text) => {
	// Steps:
	// Sort array of parameters text and group same letters
	// Make array using regex; regex exp. making array same as string
	// Get length of array
	return (
		text
			.toLowerCase()
			.split("")
			.sort()
			.join("")
			.match(/([^])\1+/g) || []
	).length;
};
