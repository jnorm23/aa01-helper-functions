/*
Write a function isVowel(char) that accepts a single character string as an
argument and true if it is a vowel. Return false otherwise.
A vowel can be 'a', 'e', 'i', 'o', or 'u'.

Write a function hasThreeVowels(string) that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels. Use the hasVowel function as a helper
function.
*/

// Your code here 
function isVowel(char) {
  char = char.toLowerCase();
  
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let vowel of vowels) {
      if (char === vowel) {
          return true;
      }
  }

  return false;
}

function hasThreeVowels(string) {
  let vowelCount = 0;

  for (let i = 0; i < string.length; i++) {
      if (isVowel(string[i])) {
          vowelCount++;
      }
      
      if (vowelCount >= 3) {
          return true;
      }
  }

  return false;
}
// console.log(hasThreeVowels("delicious"));     //  true
// console.log(hasThreeVowels("bootcamp prep")); //  true
// console.log(hasThreeVowels("bootcamp"));      //  true
// console.log(hasThreeVowels("dog"));           //  false
// console.log(hasThreeVowels("go back"));       //  false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  isVowel,
  hasThreeVowels
};
