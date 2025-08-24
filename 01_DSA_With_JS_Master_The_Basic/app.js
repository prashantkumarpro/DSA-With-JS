// var se banakr variable bananhe se pahle use kar
// skata hu

// var a =123;
// console.log(a);

// Sum of two integers (numbers)

// let a = 69;
// let b = 20;

// console.log(a+b)

// The Number and strings
// let num = 10
// let string = '10'
// console.log(num + string) // 1010
// typeof num is number
// typof string is string
// typeof (num +string) is string

// addition concatination
// num + num = addition
// num + string = concatination

// What will be output of
// let a = 10
// let b = 20
// console.log('sum of 10 and 20 are' + a + b) // sum of 10 and 20 are 1020
/*
oprand = any operator or sign's left side part and right side 
part is oprend 

string + num = string 
string + num = string

In this code console.log('sum of 10 and 20 are ' + (a + b))  first priority is brackets 
*/
// console.log('sum of 10 and 20 are ' + (a + b)) // sum of 10 and 20 is 30

// console.log(a + b + 'is sum of 10 and 20')
// console.log((a + b) + 'is sum of 10 and 20')

/*
console

*/

// console.log('1' + 1) // concatinate
// console.log('1' - 1) // subtract
// console.log('1' * 1) // multiply
// console.log('1' / 1) // divison

/* type co ersion 
 JS will 
*/

// static value vo jo kia maine khud se liya hai
// console.log('hi')

// Prompt is a function. prompt takes argument as
// a string. Prompt function data ko as a string leta hai

// let age = Number(prompt('Enter your age'))
// let age = prompt('Enter your age')
// age = Number(age)

// if (typeof age == NaN) {
//   console.log(age)
// } else {
//   console.log(age)
// }

// type casting or conversion
// Agar ek type se dusre type men convert karte hai to use hum type casting kahte hai

// swape variables

// first method : swape with extra variable

// let a = 10
// let b = 20

// let c = a // c = 10, a = 10
// a = b // b = 20, a = 20
// b = c // c = 10 so b = 10
// console.log('Now a is ', a)
// console.log('Now b is ', b)

// Second method: using methamatics

// let a = 10
// let b = 20

// a = a + b // a= 30;
// b = a - b // b = 30 - 20 = 10
// a = a - b // a = 30 - 10 = 20

// console.log('Now a is ', a)
// console.log('Now b is ', b)

// Third method : using destructring

// let a = 10
// let b = 20

// [a,b] = [b,a];

// console.log(a,b)

// + - / % *
// let a = 12
// let b = 22
// console.log(a / b) //0.5454545454545454
// console.log(Math.floor(a / b)) // 0 is quatient

// // in programming division ka sign only quotient deta hai

// // mod ka sign (%) only remainder deta hai
// console.log(7%2) // 1
// console.log(2%7) // 2

// sum of digits

// let a = 4567 // 4 + 5 + 6 + 7 or 7 + 6 + 5 + 4

// console.log(a % 10) // 7
// console.log(a % 100) // 67
// console.log(a % 1000) // 567
// console.log(a % 10000) //4567

// console.log(Math.floor(a / 10)) // 456
// console.log(Math.floor(a / 100)) // 45
// console.log(Math.floor(a / 1000)) // 4
// console.log(Math.floor(a / 10000)) //0

// In js if we devied a num  into num it will give num

// Relational operator
// > < <= >= !=
// Relational operators, also known as comparison operators,

// console.log(10 > 7) // true
// console.log(10 < 7) // false
// console.log(10 != '10') // false
// console.log(11 !== '10') // ture
// console.log(10 == '10') // ture
// console.log(10 === '10') // false

// && ||
// console.log(10 > 6 && 6 < 9) // true
// console.log(10 > 9 || 3 < 1) // true

// unary operator -- ++
// post increment
// pre dcrement
// post decrement

// post = dhaba I++
// pre = zomoto ++I

// let i = 11
// i = i++ + ++i // 11 + 13
// console.log(i)

// let a = 11,
//   b = 22
// let c = a + b + a++ + b++ + ++a + ++b

// console.log('a=' + a) // a++ now a=12 ++a = 13
// console.log('b=' + b) // b = 24
// console.log('c=' + c) // 11 + 22 + 11 + 22 + 13 + 24 = 103

// let b = 3;
// b++;
// console.log(b)

// constant means
// let a = 10;
// a++;

// let a = 10++;

// let a = 10;
// let b = ++(a++)

// console.log(b)

// let b = true; // true = 1 in JavaScript
// b++;
// console.log(b); // 2

// let a = false; // false = 0 in JavaScript
// a++;
// console.log(b); // 1

// let a = 44++;
// console.log(a) Error

// let a = 1;
// let b = a++ + ++a + a++ + ++a // a=1 + a=(2+1) + a=3 + a=5 = 12
// console.log(a) // output will be 5

// let a = 10;
// let b = ++(a++);
// console.log(b);

//it will be error

// First priority will be bracket
// so ++(10) but a is now = 11 so ++(a) will be 12

// console.log(Math.round(10.4)); // 10
// console.log(Math.round(10.5)); // 11
// console.log(Math.ceil(10.5)); // 11
// console.log(Math.floor(10.5)); // 10
// console.log(Math.trunc(10.523423)); // 10
// console.log(Math.pow(2,2)); // 4
// console.log(Math.sqrt(4)); // 2
// // console.log(Math.cbrt(2)); // 64
// console.log(Math.abs(-15)); // 15 it makes negative value into positive

// console.log(Math.max(78,65,33)); // 78
// console.log(Math.min(78,65,33)); // 33

// console.log(Math.random()) // it give value between 0 to 1

// console.log(Math.random() * 10) // it give value between 0 to 1

// generate 6 digit otp using Math method

// let a = 8.23432
// console.log(parseFloat(a.toFixed(2))) // 8.23
// console.log(parseInt(a.toFixed(2))) // 8

// parseInt : convert a string to an Integer

// generate 6 digit otp using Math method
// console.log(Math.trunc((Math.random()*900000) + 100000))

/*
Math.trunc() will remove the desimal point

Math.random() will give num between 0 to 1 but we 
need 100000 to 900000

Math.random() * 900000 will give num between 0 to 900000

(Math.random() * 900000) + 100000 will give num between 100000 to 1000000 
*/

// console.log(Math.floor(100000 + Math.random() * 900000))

/*
🧠 Question:
You are given three variables a, b, and c representing the sides of a triangle. Write a JavaScript program to calculate the area of the triangle using Heron’s formula.

Tasks:
1. Calculate the semi-perimeter s = (a + b + c) / 2.
2. Use Heron’s formula to calculate the area:
3. Add a check to ensure the three sides can form a valid triangle.
4. Print "Not a valid triangle" if the sides don't satisfy triangle conditions.
5. Print the area (rounded to 2 decimal places) if valid.
*/
// areaOfTringle = ✓s(s-a) + (s-b) + (s-c)
// where s is half of the perimeter, or s = a+b+c/2

// function areaOfTringle (a, b, c) {
//   const isTriangle = a + b > c && b + c > a && a + c > b
//   if (isTriangle) {
//     const s = (a + b + c) / 2
//     const area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
//     return area.toFixed(2)
//   } else {
//     return 'Not a valid triangle'
//   }
// }
// console.log(areaOfTringle(1, 2, 3))
// console.log(areaOfTringle(5, 10, 3))

// const triangleArea = (a, b, c, unit = '') => {
//   if (a + b <= c || a + c <= b || b + c <= b) {
//     return 'Invalid triangle'
//   } else {
//     const s = (a + b + c) / 2
//     const area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
//     return `${area.toFixed(2)} ${unit}²`
//   }
// }
// console.log(triangleArea(5, 10, 3, 'm'))

// calculate area and perimeter of trangle;
let a = 15,
  b = 20
console.log(a * b) // 300
console.log(2 * (a + b)) // 70

// Circumference of a Circle
let r = 12;
let circumferenceOfCircle = 2*Math.PI*r;
console.log(circumferenceOfCircle.toFixed(2))// 75.40