// for loop

// agar loop nahi hota to -> whatsapp, instagram, facebook, ecommerce, youtube

// for => for(start; end; change){}
// 1-22
for (let i = 1; i < 23; i++) {
  //   console.log(i)
}

// 200 - 100

// for (let i = 200; 200 > 99; i--) {
//   console.log('h')
// }

// Sum of n natural numbers

// n = 10
// let sum = 0
// for (let i = 0; i <= 2; i++) {
//   sum = sum + i
// }
// console.log(sum)

function sumPrimes (n) {
  const [nums, factors, primes] = [[], [], []]
  for (let i = 2; i <= n; i++) {
    nums.push(i)
  }
  nums.forEach((_, index, arg) => {
    let items = []
    for (let i = 1; i <= arg[index]; i++) {
      if (arg[index] % i == 0) items.push(i)
    }
    factors.push(items)
  })
  factors.filter(item =>
    item.length == 2 ? primes.push(item[item.length - 1]) : null
  )
  return primes.reduce((prev, current) => {
    return prev + current
  }, 0)
}
const result = sumPrimes(10) // 17

const findFactorial = num => {
  let fact = 1
  for (let i = num; i >= 1; i--) {
    fact *= i
  }
  return fact
}

console.log(findFactorial(4)) // 24
// Explanation of the findFactorial
/* Inside the for loop 
1st time
 i = num (4). Next i=4 is >=1  true so  
 fact = fact * i(num) = 1 * 4 = 4
 i = 4 - 1 = 3;

2nd time
 i = 3 Next i=3 is >=1 true so  
 fact = fact * i = 4 * 3 = 12
 i = 3 - 1 = 2;

 3rd time
 i = 2 Next i=2 is >=1 true so  
 fact = fact * i = 12 * 2 = 24
 i = 2 - 1 = 1;

 4th time
 i = 1 Next i=1 is >=1 -> ture so  
 fact = fact * i = 24* 1 = 24
 i = 1 - 1 = 0;

 4th time
 i = 0 Next i=0 is >=1 false so  
return fact=24

*/
