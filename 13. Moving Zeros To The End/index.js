/* 

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/

// Loop through the array, if element of an array is zero, .pop and push to zero holder array
// After the loop is finished push the zero holder array back to the original array

const moveZeros = (arr) => {
    let zeros = arr.filter(element => element === 0).length; // Variable to store the amount of zeros
    let result = arr.filter(element => element !== 0); // return everything that is not zero

    for (let i = 0; i < zeros; i++) {
        result.push(0); 
    }
    return result;
}