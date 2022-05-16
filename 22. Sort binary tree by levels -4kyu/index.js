/* 

You are given a binary tree:

class Node { 
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left  = left;
    this.right = right;
  }
}
Your task is to return the list with elements from tree sorted by levels, which means the root element goes first, then root children (from left to right) are second and third, and so on.

Return empty array if root is null.



Example 1 - following tree:

                 2
            8        9
          1  3     4   5

Should return following list:
[2,8,9,1,3,4,5]


Example 2 - following tree:

                 1
            8        4
              3        5
                         7

Should return following list:
[1,8,4,3,5,7]


*/
const treeByLevels = (root) => {
	if (!root) return []; // if root is null return empty array
	let result = [];
	let queue = [root];
	while (queue.length) {
		let current = queue.shift(); // get first element from queue
		result.push(current.value); // push value to result
		if (current.left) queue.push(current.left); // if left child exist push it to queue
		if (current.right) queue.push(current.right); // if right child exist push it to queue
	}
	return result;
};
