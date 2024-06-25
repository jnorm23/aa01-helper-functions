/*
Write a function removeLastVowel(word) that takes in a word string and returns
the word without its last vowel.

Write a function hipsterfy(sentence) that takes in a sentence string and returns
the sentence where every word is missing its last vowel. Use the removeLastVowel
function as a helper function.
*/

// Your code here 
function removeLastVowel(word) {
  const vowels = "aeiouAEIOU";
  let wordArray = word.split('');

  for (let i = wordArray.length - 1; i >= 0; i--) {
      if (vowels.includes(wordArray[i])) {
          wordArray.splice(i, 1);
          return wordArray.join('');
      }
  }
  return word;
}

function hipsterfy(sentence) {
  let words = sentence.split(' ');

  for (let i = 0; i < words.length; i++) {
      words[i] = removeLastVowel(words[i]);
  }

  return words.join(' ');
}
// console.log(hipsterfy("When should everyone wake up?")); // 'Whn shold everyon wak p?'
// console.log(hipsterfy("get ready for our bootcamp")); // 'gt redy fr or bootcmp'
// console.log(hipsterfy("panthers are great animals")); // 'panthrs ar gret animls'
// console.log(hipsterfy("go big or go home")); // 'g bg r g hom'
// console.log(hipsterfy("dont let your dreams be dreams")); // 'dnt lt yor drems b drems'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  removeLastVowel,
  hipsterfy,
};
