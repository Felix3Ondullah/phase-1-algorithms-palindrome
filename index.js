function reverse (word)
{
  return word.split("").reverse().join("")
}

function isPalindrome ( word )
{
  // Write your algorithm here
  const reversedWord = reverse( word )
  
  if ( word === reversedWord )
  {
    return true
  }
  else
  {
    return false
  }

  // return word.split("").reverse().join("") === word ? true : false;
}


/* 
  Add your pseudocode here
  if the reversed word is equal to the original word
  return true
  else
  return false
*/


/*
  Add written explanation of your solution here
  use split method to split the word to an array of letters, then use reverse method to reverse the array of letters, and then use join method to rejoin the reversed letters to read same as the orignal word
*/
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
