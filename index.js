function isPalindrome(word) {
  // Write your algorithm here
  let i = 0; 
  //console.log(word.length/2);
  for(; i < word.length / 2; i++){
    if(word[i] !== word[word.length - 1 - i]){
      return false;
    }
    else if(word[i] === word[word.length - 1 - i]){
      continue;
    }
  }

  if(i === Math.ceil(word.length / 2)){
    return true;
  }
}

/* 
  Add your pseudocode here

  Initialize for loop and pass the word into it
      Checks if the starting letter is not equal to the last letter
      If true, return false and breaks loop
      If false, continue the loop until it reaches the halfway point of the word
  If the index variable has reached the halfway point of the word w/o return false,
  then it returns true

*/

/*
  Add written explanation of your solution here
  We only need to check up to halfway of the word to check for palindrome
  I used a for loop because we know exactly how many times we need iterate through each letter
  I round up the index of the halfway point of the word for odd number words since the index variable
  is counting as an integer

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
