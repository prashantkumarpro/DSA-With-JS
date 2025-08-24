// console.log("Hello DSA");

// Valid Voter

// console.log(isValidVoter(18));

// function isValidVoter (age) {
//   if (age >= 18) {
//     return 'You can vote'
//   } else {
//     return "You're not a valid voter"
//   }
// }

// function checkVotingEligibility () {
//   let ans = Number(prompt('Enter your age'))
//   if (isNaN(ans)) {
//     return 'Wrong input'
//   }

//   if (ans >= 18) {
//     return 'You can vote'
//   } else {
//     return 'You cannot vote'
//   }
// }

// console.log(checkVotingEligibility())

// Range quesiton
/* 
    AMOUNT          DISCOUNT 
    0-5000          0%
    5001-7000       5%
    7001-9000       10%
    MORE THAN 9000  20%
*/
// let amount = -12000
// let totalAmount

// basic
// if (amount > 0 && amount <= 5000) {
//   totalAmount = amount
// } else if (amount >= 5001 && amount <= 7000) {
//   totalAmount = amount - Math.floor((amount * 5) / 100)
// } else if (amount >= 7001 && amount <= 9000) {
//   totalAmount = amount - Math.floor((amount * 10) / 100)
// } else if (amount > 9000) {
//   totalAmount = amount - Math.floor((amount * 20) / 100)
// } else {
//   console.log('Wrong input')
//   return
// }

// console.log(totalAmount)

// efficient
// let amount = 8000
// let dis = 0
// let paybalAmount = 0
// if (amount > 0 && amount <= 5000) {
//   dis = 0
// } else if (amount >= 5001 && amount <= 7000) {
//   dis = 5
// } else if (amount >= 7001 && amount <= 9000) {
//   dis = 10
// } else if (amount > 9000) {
//   dis = 20
// } else {
//   console.log('Wrong input')
//   return
// }
// paybalAmount = amount - Math.floor((amount * dis) / 100)
// console.log(paybalAmount)

/* Unit     Price
  0-100     4/unit
  101-200   6/unit
  201-400   8/unit
  401       13/unit
  */

// let unit = 400 // 100 + 20 = 100*4 + 20 * 6
// let amount = 0

// if (unit > 400) {
//   amount += (unit - 400) * 13
//   unit = 400
// }
// if (unit > 200 && unit <= 400) {
//   amount += (unit - 200) * 8
//   unit = 200
// }
// if (unit > 100 && unit <= 200) {
//   amount += (unit - 100) * 6
//   unit = 100
// }
// if (unit <= 100) {
//   amount += unit * 4.2
// }

// console.log(amount)

// const calculateBillAmount = (totalUnits) => {
//   let units = totalUnits
//   let billAmount = 0;

//   if (units > 400) {
//    let totalUnitsAbove4Hun = units%400;
//    billAmount += 13 * totalUnitsAbove4Hun;
//    units = units - totalUnitsAbove4Hun;
//   }
//   else if (units > 200 && units <= 400 ) {
//    let totalUnitsAbove2Hun = units%200; // 400 % 200 = 0
//    billAmount += 8 * totalUnitsAbove2Hun; // 0
//    units = units - totalUnitsAbove2Hun; // 400 -0 = 400
//   }
//   else if(units > 100 && units <= 200 ) {
//    let totalUnitsAboveHun = units%100;
//    billAmount += 6 * totalUnitsAboveHun;
//    units = units - totalUnitsAboveHun;
//   }

//   billAmount += units * 4.2;
//   return billAmount;
// }

// const result = calculateBillAmount(400);
// console.log(`The Total bill amount is: ${result}`)

// Problem:  [ 0, 1, 1, 0, 1, 0, 0 , 1 ] for the given array
//  you have to shift all 0 to the left side
//   and all 1 to the right side.

// let arr = [0, 1, 1, 0, 1, 0, 0, 1]
// let newArr = []
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 0) {
//     newArr.unshift(arr[i])
//   } else {
//     newArr.push(arr[i])
//   }
// }
// console.log(newArr) // [0,0,0,0,1,1,1,1]

// Problem Statement
// Given an amount of money in rupees,
// break it down into the minimum number of Indian
// currency notes using the available denominations:

// Available denominations: ₹2000, ₹500, ₹200, ₹100, ₹50, ₹20, ₹10
// Also, show any remaining coins if they exist.

let amount = 120
let noteDenominations = [500, 200, 100, 50, 20, 10]
let notes = {}

noteDenominations.forEach(note => {
  if (amount >= note) {
    notes[note] = Math.trunc(amount / note)
    amount %= note // reduce the amount
  }
})

notes.coins = amount // remaining coins after notes

console.log(notes)

// ternary operator ? :

// 2 > 13 ? console.log('Yes') : console.log('No')
// console.log(2 > 13 ? 'Yes' : 'No')

// let num = 5
// console.log(num > 0 ? 'Positive' : num < 0 ?'Negative':'Zero')

// Switch case
let day = 2

// switch (day) {
//   case 1:console.log("Monday");
//     break;
//   case 2:console.log("Tuesday");
//     break;
//   default: console.log("Invalid");
//     break;
// }

// switch (day) {
//   case 1:
//   case 2:
//   case 3:
//     console.log('Monday')
//     break
//   default:
//     console.log('Invalid')
// }

// switch (true) {
//    case 18>5:
//     console.log('print karo');
//       break
//    case 18<5:
//     console.log('Print mat karo');
//       break
//    case 18 === 18:
//     console.log('first vala true chalaga');
//       break

//     default:
//       console.log('Invalid')
//   }

let num = 0.1 + 0.2

switch (num) {
  case 0.3:
    console.log('Hello')
    break
  case 0.5:
    console.log('Hey')
    break

  default:
    console.log('Namaste')
}

// Switch case can't handel float value because it's precision issue

// function createCounter (init) {
//   this.init = init

//   return {
//     increment: function () {
//       init++

//       return init
//     },
//     reset: function () {
//       return this.init
//     },
//     decrement: function () {
//       this.init--
//       return this.init
//     }
//   }
// }

// const { increment, reset, decrement } = createCounter(5)

// const calls = [increment(), reset(), decrement()]

// console.log(calls) // [6,5,4]

function createCounter (init) {
   const original = init; // store initial value
  return {
    increment () {
      init++
      return init
    },
    reset () {
      init = original;
      return init;
    },
    decrement () {
      init--
      return init
    }
  }
}
const { increment, reset, decrement } = createCounter(5)

// const results = [increment(), reset(), decrement()];

// console.log(results); // [6, 5, 4]
increment()
increment()
increment()
