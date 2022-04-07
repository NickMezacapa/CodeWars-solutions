/* 

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Ex:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => 
returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!

*/

const createPhoneNumber = (numbers) => {
	// Steps:
	// Initialize a string that contains an empty open and close parenthesis
	// Initialize an empty string to represent space b/tw nums
	// Initialize string for "-" part of phone number
	// Initialize strings for 2nd and third set of nums
	// Ex: (first) second-third

	// Use slice method to select respective parts of array
	// Use join method to convert to a string
	// Use string template literal to bring all variables together

	let parenthesis1 = "(";
	let parenthesis2 = ")";
	let firstSet = "";
	let secondSet = "";
	let thirdSet = "";
	let space = " ";
	let dash = "-";

	firstSet = numbers.slice(0, 3).join("");
	secondSet = numbers.slice(3, 6).join("");
	thirdSet = numbers.slice(6, 10).join("");

	let finalNumber = `${parenthesis1}${firstSet}${parenthesis2}${space}${secondSet}${dash}${thirdSet}`;

	return finalNumber;
};

///////////////////////////////////////////////
//  Refactored Code Below, CLEANER SOLUTION  //
//////////////////////////////////////////////

const createPhoneNumber2 = (numbers) => {
	// Steps:
	// Initialize the format of the phone number using 'x' to represent a number
	/* Loop over numbers.length, use replace method to substitute 'x' for numbers[i], representing the numbers of the phone number */

	let format = "(xxx) xxx-xxxx";
	for (let i = 0; i < numbers.length; i++) {
		format = format.replace("x", numbers[i]);
	}
	return format;
};
