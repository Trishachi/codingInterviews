//Create a function that reverses a string:
//'Hi My name is Chisom' should be :
//'mosihC si eman yM iH'

function reverse(str) {
  //input validation
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Please enter a valid string";
  }
  return str.split("").reverse().join("");
}

console.log(reverse("Hi My name is Chisom"));
