/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
In other words, you are given an array collection of objects.
 The predicate pre will be an object property and 
 you need to return true if its value is truthy. Otherwise, return false.
In JavaScript, truthy values are values 
that translate to true when evaluated in a Boolean context.
Remember, you can access object properties through either dot notation or [] notation.
*8/

function truthCheck (collection, pre) {
  return collection.every(item => !!item[pre] == true)
}

truthCheck(
  [
    { name: 'Quincy', role: 'Founder', isBot: '' },
    { name: 'Naomi', role: '', isBot: true },
    { name: 'Camperbot', role: 'Bot', isBot: true }
  ],
  'isBot'
)

const Person = function (first, last) {
  let firstName = first
  let lastName = last
  ;(this.getFullName = function () {
    return firstName + ' ' + lastName
  }),
    (this.getFirstName = function () {
      return firstName
    }),
    (this.getLastName = function () {
      return lastName
    }),
    (this.setFirstName = function (fName) {
      firstName = fName
      return firstName
    }),
    (this.setLastName = function (lName) {
      lastName = lName
      return lastName
    }),
    (this.setFullName = function (fName, lName) {
      firstName = fName
      lastName = lName
      return firstName + ' ' + lastName
    })
}

const fullName = new Person('Prashant', 'kr')
// console.log(fullName.setFirstName('Ram'))

function orbitalPeriod(arr) {
  const GM = 398600.4418
  const earthRadius = 6367.4447

  return arr.map(item => {
    const a = earthRadius + item.avgAlt
    const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(a, 3) / GM))
    return {
      name: item.name,
      orbitalPeriod: orbitalPeriod
    }
  })
}
// console.log(
//   orbitalPeriod([
//     { name: 'iss', avgAlt: 413.6 },
//     { name: 'hubble', avgAlt: 556.7 },
//     { name: 'moon', avgAlt: 378632.553 }
//   ])
// )

/*
Make a function that looks through an array of objects (first argument) and
 returns an array of all objects that have matching name and value pairs (second argument). 
 Each name and value pair of the source object has to be present in the object
  from the collection if it is to be included in the returned array.
*/

function whatIsInAName (collection, source) {
  const sourceKey = Object.keys(source)
  return collection.filter(obj =>
    sourceKey.every(key => obj[key] === source[key])
  )
}

// console.log(whatIsInAName(
//   [
//     { first: 'Romeo', last: 'Montague' },
//     { first: 'Mercutio', last: null },
//     { first: 'Tybalt', last: 'Capulet' }
//   ],
//   { last: 'Capulet' }
// ))

/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

*/
function palindrome (str) {
  const newStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  // console.log(newStr.split('').reverse().join('') === newStr)
}

palindrome('A man, a plan, a canal. Panama')

function rot13 (str) {
  return str
    .split('')
    .map(char => {
      let code = char.charCodeAt(0)
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + 13) % 26) + 65)
      } else {
        return char
      }
    })
    .join('')
}

console.log(rot13('ABCDEFGZ'))
