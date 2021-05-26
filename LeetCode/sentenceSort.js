//Sorting the sentence

// Input: s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.

var sortSentence = function(s) {
    let words = s.split(" ");
    let index = words.map(item => console.log(item.slice(-1)));
    let word = words.map(item => console.log(item.slice(0,-1)));
     
     return words; 
  };
  
  console.log(sortSentence("is2 sentence4 This1 a3"));
  