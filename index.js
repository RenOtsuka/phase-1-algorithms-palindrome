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
*/

/*
  Add written explanation of your solution here
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
