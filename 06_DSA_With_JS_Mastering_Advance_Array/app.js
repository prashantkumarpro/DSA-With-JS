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
Left Rotation and Right Rotation by k element
📌 Question: Left Rotate an Array by k Positions
Problem Statement:
You are given an array arr of length n and an integer k. 
Perform a left rotation on the array by k steps.

In a single left rotation, 
the first element of the array moves to the end of the array,
 and all other elements shift one position to the left.

Your task is to return the array after performing k left rotations.
*/
// let arr = [1, 2, 3, 4, 5]

// // Brute force means trying all possible
// // solutions one by one until you find the
// // correct answer
// let copy = new Array(arr.length)
// let k = 7
// k = k % arr.length
// for (let j = 0; j < k; j++) {
//   let temp = arr[0]
//   for (let i = 0; i < arr.length - 1; i++) {
//     copy[i] = arr[i + 1]
//   }
//   copy[arr.length - 1] = temp
//   arr = [...copy]
// }
// console.log(copy)

// Different method

// for (let i = 0; i < arr.length; i++) {
//   copy[i] = arr[(i + k) % arr.length]
// }
// console.log(copy);

// 2nd method : Using my mind
// by 1 => [2, 3, 4, 5, 1] and by 2 => [3, 4, 5, 1, 2]
// let k = 2;
// k = k % arr.length
// let firstTwoElem = arr.slice(0, k)

// for (let i = 0; i < arr.length; i++) {
//   if (i < arr.length - k) {
//     arr[i] = arr[i + k]
//   } else {
//     arr[i] = firstTwoElem[i - (arr.length - k)]
//   }
// }
// console.log(arr) // [ 3, 4, 5, 1, 2 ]

// Right Rotate an Array by k Positions

// let arr = [1, 2, 3, 4, 5]

// Brute force means trying all possible
// solutions one by one until you find the
// correct answer
// let copy = new Array(arr.length)
// let k = 2
// k = k % arr.length

//  [1, 2, 3, 4, 5] => [5, 1, 2, 3, 4] => [4, 5, 1, 2, 3]
// for (let j = 0; j < k; j++) {
//   let temp = arr[arr.length - 1] //5 4
//   for (let i = arr.length - 1; i > 0; i--) {
//     copy[i] = arr[i - 1]
//   }
//   copy[0] = temp
//   arr = [...copy]
// }
// console.log(copy)

// for (let i = arr.length - 1; i >=0; i--) {
//   copy[i] = arr[(i - k + arr.length) % arr.length] // [,1,2,3,4]
// }
// console.log(copy)

// for (let i = 0; i < arr.length; i++) {
//   copy[(i + k) % arr.length] = arr[i] // [,1,2,3,4]
// }
// console.log(copy)

// let arr = [1, 2, 3, 4, 5]
// left rotate by 1
// [1, 2, 3, 4, 5] left by 1 => [2, 3, 4, 5, 1]
// [1, 2, 3, 4, 5] left by 2 => [3, 4, 5, 1, 2]

/* [1, 2, 3, 4, 5] [2, 3, 4, 5, 1] [3, 4, 5, 1, 2]
   [ 2, 1, 3, 4, 5 ] => reverse 1, 2
    [ 2, 1, 5, 4, 3 ] => reverse 3, 4, 5,
     [ 3, 4, 5, 1, 2 ] => reverse  2, 1, 5, 4, 3
*/

// 🔥 Bravo! You just nailed the reverse algorithm for array rotation 
// — and you did it with the optimized solution (O(n) time, O(1) space).

// This is how we done Left rotation by k elem without extra space and without n square time compexility

let arr = [1, 2, 3, 4, 5]
let i = 0
let k = 7
k = k % arr.length

reverse(i, k - 1)
reverse(k, arr.length - 1)
reverse(i, arr.length - 1)
console.log(arr)

function reverse (i, j) {
  while (i < j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    i++
    j--
  }
  //   console.log(arr)
}

