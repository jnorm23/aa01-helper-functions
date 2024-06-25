/*
Implement the function removeVowel(word, isFirst) so that it returns a new
word string with the first vowel removed from word if isFirst is true.
If isFirst is false, then the function should return the word with the last
vowel removed instead.

Next, implement the function translationTraining(sentence) so that it returns a
new version of the sentence string with new words that alternate between having
the first or last vowel removed.

The first word of the sentence should have its first vowel removed.
The second word of the sentence should have its last vowel removed.
The third word of the sentence should have its first vowel removed.
The fourth word of the sentence should have its last vowel removed.
A word without vowels should remain unchanged.

Constraint: You must use the removeVowel function as a helper function to the
translationTraining function.
*/
let VOWELS = "aeiou";

function removeVowel(word, isFirst) {
  let vowels = "aeiou";
  let result = "";

  if (isFirst) {
      let foundFirstVowel = false;
      for (let char of word) {
          if (!foundFirstVowel && vowels.includes(char.toLowerCase())) {
              foundFirstVowel = true;
              continue; 
          }
          result += char;
      }
  } else {
      let foundLastVowelIndex = -1;
      for (let i = word.length - 1; i >= 0; i--) {
          if (vowels.includes(word[i].toLowerCase())) {
              foundLastVowelIndex = i;
              break; 
          }
      }
      for (let i = 0; i < word.length; i++) {
          if (i !== foundLastVowelIndex) {
              result += word[i];
          }
      }
  }

  return result;
};


// console.log(removeVowel("What", true)); // Wht
// console.log(removeVowel("tedious", true)); // tdious
// console.log(removeVowel("tedious", false)); // tedios
// console.log(removeVowel("doing", false)); // dong
// console.log(removeVowel("doing", true)); // ding

function translationTraining(sentence) {
  let words = sentence.split(" ");
  let translatedSentence = "";

  for (let i = 0; i < words.length; i++) {
      if (i % 2 === 0) {
          translatedSentence += removeVowel(words[i], true);
      } else {
          translatedSentence += removeVowel(words[i], false);
      }

      if (i !== words.length - 1) {
          translatedSentence += " ";
      }
  }

  return translatedSentence;
};

console.log(translationTraining("What are you doing")); // "Wht ar yu dong"
console.log(translationTraining("This is tedious")); // "Ths s tdious"
console.log(translationTraining("Programming is fun")); // "Prgramming s fn"
console.log(translationTraining("My food is getting cold")); // "My fod s gettng cld"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  removeVowel,
  translationTraining,
};
