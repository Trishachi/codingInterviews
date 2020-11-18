//Create a function that reverses a string:
//'Hi My name is Chisom' should be :
//'mosihC si eman yM iH'

//Not so efficient solution
function reverse1(str) {
  //input validation
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

//ES6 solution without input validation
const reverse3 = (str) => str.split("").reverse().join("");

console.log(reverse3("Hi My name is Chisom"));
