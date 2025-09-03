//  Left Rotate an Array by 1 Positions

// let arr = [1, 2, 3, 4, 5]
// Ouput should be [2,3,4,5,1]
//  let copy = arr[0]
// for (let i = 0; i < arr.length; i++) {

//   if (i <= arr.length - 2) {
//     arr[i] = arr[i + 1]
//   } else{
//     arr[arr.length-1] = copy;
//   }
// }
// console.log(arr);

// Right Rotate an Array by 1 Positions
// [1, 2, 3, 4, 5] [5, 1, 2, 3, 4]

// let arr = [1, 2, 3, 4, 5]
// let copy = arr[arr.length - 1]
// for (let i = arr.length - 1; i > 0; i--) {
//     // i=4, i=3, i=2, i=1
//   arr[i] = arr[i - 1]
//   // arr[4] = 4, arr[3] = 3, arr[2] = 2, arr[1] = 1,
// }
// arr[0] = copy;
// // console.log(arr)

/*

📌 Question: Left Rotate an Array by k Positions
Problem Statement:
You are given an array arr of length n and an integer k. 
Perform a left rotation on the array by k steps.

In a single left rotation, 
the first element of the array moves to the end of the array,
 and all other elements shift one position to the left.

Your task is to return the array after performing k left rotations.
*/

let arr = [1, 2, 3, 4, 5]
// by 1 => [2, 3, 4, 5, 1] and by 2 => [3, 4, 5, 1, 2]
let k = 2;
k = k % arr.length
let firstTwoElem = arr.slice(0, k)

for (let i = 0; i < arr.length; i++) {
  if (i < arr.length - k) {
    arr[i] = arr[i + k]
  } else {
    arr[i] = firstTwoElem[i - (arr.length - k)]
  }
}
console.log(arr) // [ 3, 4, 5, 1, 2 ]
