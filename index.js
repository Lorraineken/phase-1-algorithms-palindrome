const { stringify } = require("mocha/lib/utils");

function isPalindrome(word) {
  // Write your algorithm here
  const stringArray = word.split("")
  const reverseArray = stringArray.reverse()
  const joinArray = reverseArray.join("");

  if (joinArray === word){
    return true
  }
  else{
    return false
  }

}


/* 
  Add your pseudocode here

  Convert the string into an array
  reverse the created array
  Change the reversed array into a string
  Compare the reversed string to the input string
  if they are equal return true
  if they are not return false 
*/

/*
  Add written explanation of your solution here

  The code reverses the given string and compares it to the input.
  If they are similar the output is true and if not the output is false
*/

//You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

