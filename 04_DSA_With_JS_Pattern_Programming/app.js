// Pattern Programming
// 👉 Pattern programming means writing code that
//  prints different shapes (like triangles,
//     pyramids, squares, diamonds, etc.) using
//     loops and sometimes conditions. This helps
//     you master loops, nested loops, and logic
//     building.

// process.stdout.write('hello ')
// process.stdout.write('world!')

let prompt = require('prompt-sync')()
let n = Number(prompt('Enter a number'))

// for(let i=1; i<=n; i++){
//     process.stdout.write("* ")
// }
// console.log();
// for(let i=1; i<=n; i++){
//     process.stdout.write("* ")
// }
// console.log();
// for(let i=1; i<=n; i++){
//     process.stdout.write("* ")
// }
// console.log();
// for(let i=1; i<=n; i++){
//     process.stdout.write("* ")
// }
// console.log();
// console.log();
// Square Pattern
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n; j++){
//         process.stdout.write("* ")
//     }
//     console.log();
// }
console.log()

// Right Triangle
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//         process.stdout.write("* ")
//     }
//     console.log();
// }

// Inverted Right Triangle
// for (let i = 1; i <= n; i++) {
//   let row = ''
//   for (let j = n; j >= i; j--) {
//     row += '* '
//   }
//   console.log(row)
// }

// for(let i=1; i<=n; i++){
//     for(let j=n; j>=i; j--){
//         process.stdout.write("* ")
//     }
//     console.log();
// }

// for (let i = 1; i <= n; i++) {
//   let row = ''
//   for (let j = n; j >= i; j--) {
//     row += j + ' '
//   }
//   console.log(row)
// }
// console.log();

// for (let i = 1; i <= n; i++) {

//   for (let j = n; j >= i; j--) {
//    process.stdout.write(j+' ')
//   }
//   console.log()
// }
// console.log();

// for (let i = 1; i <= n; i++) {
//   let row = ''
//   for (let j = 1; j <= i; j++) {
//     row += j + ' '
//   }
//   console.log(row)
// }

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(j + ' ')
//   }
//   console.log()
// }

// Right angle triangle with A,B,C,................

// for (let i = 1; i <= n; i++) {
//   let char = 65
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(char) + ' ')
//     char++
//   }
//   console.log()
// }

// for (let i = 1; i <= n; i++) {
//   let row = ''
//   let char = 65
//   for (let j = 1; j <= i; j++) {
//     row += String.fromCharCode(char) + ' '
//     if(char === 90) char = 64;
//     char++
//   }
//   console.log(row)
// }

// Mirror right angle triangle

// for (let i = 1; i <= n; i++) {
//   let row = ''
//   for (let j = n - 1; j >= i; j--) {
//     row += '  '
//   }
//   for (let k = 1; k <= i; k++) {
//     row += '* '
//   }
//   console.log(row)
// }

// for (let i = 1; i <= n; i++) {
//   for (let j = n - 1; j >= i; j--) {
//     process.stdout.write('  ')
//   }
//   for (let k = 1; k <= i; k++) {
//     process.stdout.write('* ')
//   }
//   process.stdout.write('\n')
// }

// Print a triangle
// for (let i = 1; i <= n; i++) {
//   for (let j = n - 1; j >= i; j--) {
//     process.stdout.write('_')
//   }
//   for (let k = 1; k <= i; k++) {
//     process.stdout.write('* ')
//   }
//   process.stdout.write('\n')
// }

// Print x pattern
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if (i == j || i + j == n + 1) {
//       process.stdout.write('* ')
//     } else {
//       process.stdout.write('  ')
//     }
//   }

//   process.stdout.write('\n')
// }

// let grid = Array.from({ length: n }, () => Array(n).fill('  '));

// for (let i = 0; i < n; i++) {
//   grid[i][i] = '* ';              // main diagonal
//   grid[i][n - i - 1] = '* ';      // other diagonal
// }

// for (let row of grid) {
//   console.log(row.join(''));
// }

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= 2 * n - 1; j++) {
//     if (i == j || i + j == 2 * n) {
//       process.stdout.write('* ')
//     } else {
//       process.stdout.write('  ')
//     }
//   }
//   console.log()
// }
// for (let i = 1; i <= n - 1; i++) {
//   for (let k = 1; k <= n; k++) {
//     if (i + k == i + n) {
//       process.stdout.write('* ')
//     } else {
//       process.stdout.write('  ')
//     }
//   }
//   console.log()
// }




// optimized version:
// function printY(n) {
//   for (let i = 1; i <= 2 * n - 1; i++) {
//     for (let j = 1; j <= 2 * n - 1; j++) {
//       if ((i <= n && (i === j || i + j === 2 * n)) || (i > n && j === n)) {
//         process.stdout.write('* ')
//       } else {
//         process.stdout.write('  ')
//       }
//     }
//     console.log()
//   }
// }

// printY(n)






// const calculateNotes = amount => {
//     // The function accepts an amount (e.g., 520).
//   let currentAmount = amount
//   const denominations = [500, 200, 100, 50, 20, 10, 5, 2, 1]
//   let totalNotes = {}

//   for (let i = 0; i < denominations.length; i++) {
//     if (currentAmount >= denominations[i]) {
//       // 520 >= denominations[i] = 500 true, 20>=denominations[i] = 20
//       let numberOfNotes = Math.floor(currentAmount / denominations[i])
//       // 520/500 = 1 and remainder 20, 20/20 = 1 with remainder 0
//       totalNotes[denominations[i]] = numberOfNotes
//        // {500 : 1, 20 : 1}
//       currentAmount = currentAmount % denominations[i]
//       // now currentAmount = 20, now currentAmount = 0
//     }
//   }

//   const minNoteReq = Object.values(totalNotes).reduce(
//     (sum, counts) => sum + counts,
//     0
//   )
//   // Object.values({500 : 1, 20 : 1}) will return array of value that will be [1,1]
//   // And here Array.reduce() will give total sum of the array values

//   return { minNoteReq, totalNotes }
//   //  this line of code  return { minNoteReq, totalNotes } will return object of minNotReq, totalNotes
// }

// const { minNoteReq, totalNotes } = calculateNotes(520)
// console.log(minNoteReq, totalNotes); // 2 { '20': 1, '500': 1 }
