/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// when frequency of letters are same

// more example: aab, baa
// aabbcc, ccaabb

//sort string 1
// sort string 2
// if str1 == str2 ==> true
// else => false


function isAnagram(str1, str2) {
  const sortedString1 = str1.toLowerCase().split("").sort().join("");
// short way of writing the program instead of giving 4 variables 

  const lowerCaseString2 = str2.toLowerCase();
  const arr2 = lowerCaseString2.split("") // kaus => ["k", "a", "u", "s"]
  arr2.sort(); // ["a", "k", "u"]
  const sortedString2 = arr2.join(""); // original string sorted in lower case
  if(sortedString1 == sortedString2) {
    return true;
  }
  return false;
}


module.exports = isAnagram;

