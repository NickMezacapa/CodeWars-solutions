/* 
Your goal in this kata is to implement a difference function, which subtracts one list(a) from another(b) and returns the result.

It should remove all values from list a, which are present in list b keeping their order. 

If a value is present in list b, all of its occurences must be removed from the other.

Ex:
arrayDiff( [1,2], [1] ) == [2];

arrayDiff( [3,4], [3] ) == [4];

arrayDiff( [1,2,2,2,3], [1,2] ) == [3];

*/

// Solution
const arrayDiff = (a, b) => {
	// Steps:
	// Find which values intersect with both arrays
	// Filter through list a for what is included in list b
	// Return the difference between the two arrays - whatever is not mutually included

	let difference = a.filter((item) => !b.includes(item));
	return difference;
};
