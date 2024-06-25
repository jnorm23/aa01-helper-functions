/*
Write a function firstVowel(word) that takes in a word string and returns the
index of the first vowel in the word.

Write a function consonantCancel(sentence) that takes in a sentence and returns
a new sentence where every word begins with it's first vowel. Use the firstVowel
function as a helper function.
*/

// Your code here 
function firstVowel(word) {
  word = word.toLowerCase();
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  
  for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
          return i;
      }
  }
  
  return -1; 
}

function consonantCancel(sentence) {
  let words = sentence.split(' ');
  let transformedWords = [];
  
  for (let word of words) {
      let vowelIndex = firstVowel(word);
      
      if (vowelIndex === -1) {
          transformedWords.push(word);
      } else {
          let transformedWord = word.substring(vowelIndex);
          transformedWords.push(transformedWord);
      }
  }
  
  let newSentence = transformedWords.join(' ');
  return newSentence;
}
// console.log(consonantCancel("down the rabbit hole"));               // "own e abbit ole"
// console.log(consonantCancel("writing code is challenging"));        // "iting ode is allenging"
// console.log(consonantCancel("practice makes perfect"));             // "actice akes erfect"
// console.log(consonantCancel("fear nothing challenge everything!")); // "ear othing allenge everything!"
// console.log(consonantCancel("stay happy!"));                        // "ay appy!"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  firstVowel,
  consonantCancel,
};
