// Left rotation by 1 elelment

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

// Right roatation by 1
// [1, 2, 3, 4, 5] [5, 1, 2, 3, 4]
let arr = [1, 2, 3, 4, 5]
let copy = arr[arr.length - 1] // 5
let temp = 0 //
for (let i = 0; i < arr.length - 1; i++) {
    
 arr[i+1] = arr[i]
}
console.log(arr)
