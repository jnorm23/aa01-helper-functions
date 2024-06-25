/*
Write a function isPrime(number) that returns true if the number is a prime
number. A prime number is a number that is only divisible by 1 and itself.

Write a function nextPrime(number) that accepts a number as an argument. The
function should return the nearest prime number that is greater than the given
number.
*/

// Your code here 
function isPrime(num) {
  if (num <= 1) return false; 
  if (num === 2) return true; 

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; 
  }

  return true; 
}

function nextPrime(num) {
  let next = num + 1; 

  while (true) {
    if (isPrime(next)) return next; 
    next++; 
  }
}
// console.log(nextPrime(2)); // 3
// console.log(nextPrime(3)); // 5
// console.log(nextPrime(7)); // 11
// console.log(nextPrime(8)); // 11
// console.log(nextPrime(20)); // 23
// console.log(nextPrime(97)); // 101

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  isPrime,
  nextPrime
};
