//Create a function that reverses a string:
//'Hi My name is Chisom' should be :
//'mosihC si eman yM iH'

  //input validation
    //If input is not a string
    //If no input is entered 
    //if input length is less than 2
    //if input contains only white spaces

//Not so efficient solution
function reverse1(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Please enter a valid string";
  }
  const reversed = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    reversed.push(str[i]);
  }
  return reversed.join("");
}

//More efficient solution
function reverse2(str) {
  //input validation
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Please enter a valid string";
  }
  return str.split("").reverse().join("");
}

//Using a more modern ES6 Solution with complete input validation
const reverse3 = (str) => {
   if (!str || /^\s*$/.test(str)) { //RegEx checks if the string contains only whitespaces
    return "Please enter a valid string";
  } else if (str.length === 0 || typeof str !== "string"){
    return "Please enter a valid string"
  }
  return str.split("").reverse().join("") // using a spread operator -> "return [...str].reverse().join("");"
};

//Tests
console.log(reverse3(""));
console.log(reverse3("  ")); //Edge case
console.log(reverse3("c")); // Edge case
console.log(reverse3(1234));
console.log(reverse3("Hi My name is Chisom"));
