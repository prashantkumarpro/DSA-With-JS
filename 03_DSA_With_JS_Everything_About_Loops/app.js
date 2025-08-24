// loop
// for while do-while

// for (start; end; change) {}
// here change means thik ho tab aage ka loop chalega
// let start = 1
// let end = 23

// for(let i = start; i<end; i++){
//     console.log(i)
// }

// I need to run loop from 200 to 100
// for (let i = 200; i > 99; i--) {
//   console.log(i)
// }

// we need run loop from 1 to 10;
// for (let i = 1; i <= 10; i++) {
//   console.log(i)
// }

// let i = 1;
// for ( ;i <= 2; i++) {
//     console.log(i)
//   }
//   console.log(i+" fail");

// is this code valid
// yes
// it will run infinite
// for ( let i=1; i <= 10;) {
//     // console.log(i)
//   }

// for ( let i=1;;) {
//         // console.log(i)
//       } // this will also run infinite

// for (;;) {
//   console.log('i')
// } // this will also run infinite

// sum of n natural numbers
// function sumOfNaturalNnum (n) {
//   let sum = 0
//   if (isNaN(n)) {
//     console.log('Invalid input')
//   } else {
//     if (n < 0) console.log('n should be positive and more than 0')

//     for (let i = 1; i <= n; i++) {
//       sum += i
//     }
//   }
//   return sum
// }
// console.log(sumOfNaturalNnum(3))

// factorial of n natural numbers

// function factorialOfNaturalNnum (n) {
//   let factorail = 1
//   if (isNaN(n)) {
//     console.log('Invalid input')
//   } else {
//     if (n < 0) console.log('n should be positive and more than 0')

//     for (let i = 1; i <= n; i++) {
//       factorail *= i
//     }
//   }
//   return factorail
// }
// console.log(factorialOfNaturalNnum(4))

// function factorialOfNaturalNnum (n) {
//   if (!Number.isInteger(n) || n < 0) return 'Invalid input'
//   let res = 1
//   for (let i = 2; i <= n; i++) res *= i
//   return res
// }
// console.log(factorialOfNaturalNnum(4))//24

// const factorialOfNaturalNum = n => {
//   if (typeof n !== 'number' || n < 0 || !Number.isInteger(n))
//     return 'Invalid input'
//   if (n === 0 || n === 1) return 1

//   let result = 1
//   for (let i = 2; i <= n; i++) {
//     result *= i
//   }
//   return result
// }

// console.log(factorialOfNaturalNum(4)) // 24

/* 
A factor is a number that can completely divide another number, with remainder 0.
If a÷b has remainder 0, then b is a factor of a.

Example:
20÷5=4 remainder 0 → 5 is a factor of 20
20÷6=3 remainder 2 → 6 is NOT a factor of 20

We could even write it symbolically:

𝑏 ∣ 𝑎 means 𝑏 is a factor of 𝑎
(where b ∣ a reads as “b divides a”).


*/

// function factorsOfNumer (n) {
//   if (!Number.isInteger(n) || n <= 0) return 'Invalid input'
//   let result = []
//   for (let i = 1; i <= Math.floor(n / 2); i++) if (n % i === 0) result.push(i)
//   result.push(n)
//   return result
// }
// console.log(factorsOfNumer(4)) //[1,2,4]

// Prime Number : Which number is divisiable by 1 and itself
// function isPrime (n) {
//   if (!Number.isInteger(n) || n <= 1) return 'Invalid input'
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) return false
//   }
//   return true
// }
// console.log(isPrime(111))

// function isPrime (n) {
//   if (!Number.isInteger(n) || n <= 1) return 'Invalid input'
//   for (let i = 2; i <=Math.sqrt(n); i++) {
//     if (n % i === 0) return `${n} is NOT a prime number because it is divisible by ${i}`
//   }
//   return `${n} is a PRIME number`
// }
// console.log(isPrime(2))

// break and continue

// for (let i = 1; i <= 5; i++) {
//   if (i === 4) break // it will break the loop when i =4
//   console.log(i)
// }
// for (let i = 1; i <= 5; i++) {
//   if (i === 4) continue // it will leave 4 and aage ka chalega
//   console.log(i)
// }

// While loop
// start;
// while(end){
//   // code
//   change
// }

// let start = 1
// let end = 10
// while (start <= end) {
//   console.log(start)
//   start++
// }

// let ans = prompt("kuch bhi dedo(exit for close");
// while(prompt !== "exit"){
//   ans =  prompt("kuch bhi dedo(exit for close");
// }

// let n = 3
// let i = 1
// let sum = 0
// while (i <= n) {
//   sum += i
//   i++
// }
// console.log(sum)

// sum of digit using while loop

let n = 12345
let sum = 0
// console.log(n % 10)
// console.log(Math.trunc(n / 10))

while (n > 0) {
  let rem = n % 10
  sum += rem
  n = Math.trunc(n / 10)
}

console.log(sum)

// reverse the digits
// strong number
//

// do while

// do {
//   console.log('hie')
// } while (12 > 13)
// {
// }

// Repeat Hello
// Guess the number
// Sasta Calculator