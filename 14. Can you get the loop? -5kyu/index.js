/* 

You are given a node that is the beginning of a linked list. This list always contains a tail and a loop. Your objective is to determine the length of the loop.

// Use the `getNext' method or 'next' property to get the following node.
node.getNext()
node.next

*/

function loop_size(node) {
	let size = 1;
	let seenNode = getNodeInLoop(node);
	let pointer = seenNode.next;

	while (pointer !== seenNode) {
		size++;
		pointer = pointer.next;
	}

	return size;
}

function getNodeInLoop(node) {
	let slow = node;
	let fast = node.next;

	while (slow !== fast) {
		slow = slow.next; //move by 1
		fast = fast.next.next; //move by 2
	}

	return slow;
}
