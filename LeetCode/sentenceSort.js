//Sorting the sentence

// Input: s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.

var sortSentence = function (s) {
  let words = s.split(" ");
  words.sort((a, b) => {
    const aIndex = a.slice(-1);
    const bIndex = b.slice(-1);
    return aIndex - bIndex;
  });
  let result = words.map((word) => {
    // word = word.slice(0, -1);
    return word.slice(0, -1);
  });
  return result.join(" ");
};

console.log(sortSentence("is2 sentence4 This1 a3"));
console.log(sortSentence("Myself2 Me1 I4 and3"));
