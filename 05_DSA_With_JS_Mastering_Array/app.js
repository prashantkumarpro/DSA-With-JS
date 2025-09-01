// Array =  Arey
// let arr = [1, 'Hi', null, {}, undefined, [], Boolean()]
// arr.pop()
// console.log(arr);

// let arr = [];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;

// arr[7] = 9;
// console.log(arr);

// let arr = new Array(3)
// arr[0] = 1
// arr[1] = 5
// arr[2] = 10
// arr[3] = 100

// arr[10] = 150

// console.log(arr)

// let arr = new Array(3)
// arr.push(10); // [ <3 empty items>, 10 ]
// console.log(arr);

// Array => Array is a linear DS which stores multiple values in a continuos mannere

// linear => one by one
// Continuos =>

// link-list is linear DS

// Value take from prompt in an array

// We can use loop for executes repetate task

// let arr = Array(2)
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = Number(prompt('Enter a number'))
// }
// console.log(arr)

// Sum of n element of array
// let arr = [10, 20, 30]
// let sum = 0

// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i]
// }
// console.log(sum);

// find max and min num of an array
// let arr = [10, 20, 30, 3, 1, 54, 12, 60, 120];

// let max = arr[0]
// let min = arr[0]
// for (let i = 1; i < arr.length; i++) {
//   if (min > arr[i]) {
//     min = arr[i]
//   }
//   if (max < arr[i]) {
//     max = arr[i]
//   }
// }
// console.log(`Max : ${max}`)
// console.log(`Min : ${min}`)

// Find 2nd Max Num in an array
// let arr = [10, 20, 30, 3, 1, 54, 12, 60, 60, 58, 150, 999, 198]
// let max = arr[0] // 10
// let secondMax = arr[1] // 20
// for (let i = 1; i < arr.length; i++) {
//   if (max < arr[i]) {
//     secondMax = max // 10, 20, 30, 54
//     max = arr[i] // 20, 30, 54, 120
//   } else if (secondMax < arr[i] && max != arr[i]) {
//     secondMax = arr[i]
//   }
// }
// console.log(`Max : ${max}`)
// console.log(`secondMax : ${secondMax}`)

// let max = Math.max(arr[0], arr[1])
// let secondMax = Math.min(arr[0], arr[1])

// for (let i = 2; i < arr.length; i++) {
//   if (max < arr[i]) {
//     secondMax = max
//     max = arr[i]
//   }
//   if (secondMax < arr[i] && max != arr[i]) secondMax = arr[i]
// }
// console.log(`Max : ${max}`)
// console.log(`secondMax : ${secondMax}`)

// Reverse the array

// With extra space
// let arr = [10, 20, 30, 3, 1, 54, 1, 198]
// let reversedArr = new Array(arr.length)
// let j = 0

// for (let i = arr.length - 1; i >= 0; i--) {
//   reversedArr[j] = arr[i]
//   j++
// }
// console.log(reversedArr)

// Without extra space
// let arr = [20, 30, 3, 1, 5]

// let f = 0
// let l = arr.length - 1

// for (let i = 0; i < arr.length / 2; i++) {
//   let temp = arr[f]
//   arr[f] = arr[l]
//   arr[l] = temp
//   f++
//   l--
// }

// Using while loop
// let arr = [20, 30, 3, 1, 5, 8]
// let i = 0
// let j = arr.length - 1

// while (i < j) {
//   let temp = arr[i]
//   arr[i] = arr[j]
//   arr[j] = temp
//   i++
//   j--
// }

// console.log(arr)

// Swape two values using extra variable
// let a=20,b=10;

// let c = a; // 20
// a = b; // 10
// b = c; // 20
// console.log(a,b);

// let arr = [0, 0, 1, 0, 1, 1] in this array
// swap the all 0 to left side and all 1 to the
// right side of the array

// let arr = [0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0]

// let newArr = []
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 0) {
//     newArr.unshift(arr[i])
//   } else {
//     newArr.push(arr[i])
//   }
// }
// console.log(newArr);

// Solve this question using two pointer theory
let arr = [0, 0, 1, 0]

let i = 0
let j = 0
for (i; i < arr.length; i++) {
  let temp = arr[i] // 0 0 1 0
  if (arr[i] == 0) {
    arr[i] = arr[j] // 0 0 1
    arr[j] = temp // 0 0 0
    j++ // 1 2 3
  }
}
// [0, 0, 0, 1]
console.log(arr) // [0,0,0,1]
// if arr[i] == 0 then i will swape with j and j++
// if i==1 then i++ || i == 0 then i will always increment
// if  [i] == 0 then i will swape with j
// arr[i] = arr[j] and arr[j] = arr[i] (previous value of arr[i] )

// Move all the negative num to the left side and all the positive
// to the right side inside an array

// let arr = [5, 6, -91, 33, -15, -12, 1, 29, 18, -23, 1]

// let i = 0
// let j = 0

// for (i; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//     j++
//   }
// }
// console.log(arr);

