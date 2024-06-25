/*
Write a function calculateSum(nums) that takes in an array of numbers and
returns the sum of all the numbers in the array.

Write a function allElseEqual(numbers) that takes in an array of numbers. The
function should return the element of the array that is equal to half of the sum
of all elements of the array. If there is no such element, the method should
return null. Use the calculateSum function as a helper function.
*/

// Your code here 
function calculateSum(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
  }
  return sum;
}

function allElseEqual(numbers) {
  let totalSum = calculateSum(numbers);
  let halfSum = totalSum / 2;

  for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === halfSum) {
          return numbers[i];
      }
  }

  return null; 
}

// console.log(allElseEqual([2, 4, 3, 10, 1]));  // 10
// console.log(allElseEqual([6, 3, 5, -9, 1]));  // 3
// console.log(allElseEqual([1, 2, 3, 4]));      // null
// console.log(allElseEqual([5, 6, 9, 15, -5])); // 15
// console.log(allElseEqual([10, 15, 25, 35]));  // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  calculateSum,
  allElseEqual
};
