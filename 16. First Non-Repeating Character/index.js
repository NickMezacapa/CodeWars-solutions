/* 

Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None.

*/

// Solution:

const first_non_repeating_letter = (s) => {
	for (let i = 0; i < s.length; i++) {
		if (
			s.toLowerCase().indexOf(s[i].toLowerCase()) ===
			s.toLowerCase().lastIndexOf(s[i].toLowerCase())
		) {
			return s[i];
		}
	}
	return "";
};

/////////////////////////////////////
//      Explanation Below         //
///////////////////////////////////

/* 

The solution above iterates through the string input, checking if each character occurs only once in the string. It does this by converting the string to lowercase and using the indexOf and lastIndexOf methods to check if the character's index is the same as the last index of that character. If so, it returns the character. If no such character is found, the function returns an empty string.

*/
