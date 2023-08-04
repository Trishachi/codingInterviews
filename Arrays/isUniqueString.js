//Implement an algorithm to determine if a string has all unique characters

//Tests
// 

//Questions
// - is the input string an ASCII code or Unicode string?
// - What is my expected output format?
// - Is the input string case-sensitive?

//Assumptions
//- Assume ASCII String or extended ASCII string - ie max 128 chars or 256 chars for extended ASCII

//Brute Force

//Steps
 //- Split string characters to array
//- convert items of array to object and count number of occurrence
//- If any item occurs more than once -return flase
// - Else return true


const isUniqueChars = (str) => {
  const itemCount = {};  
  if (str.length > 256) {return false};
  const strToArr = str.toLowerCase().split("");
  for (let item in strToArr){
    if(itemCount[strToArr[item]]){
      itemCount[strToArr[item]] += 1;
      if(itemCount[strToArr[item]] > 1)
        { return false;}
    } else {
      itemCount[strToArr[item]] = 1;
    }
  }
  return true;
 }

console.log(isUniqueChars("Chisomili"));
console.log(isUniqueChars(""));
console.log(isUniqueChars("Chisocmbili"));
