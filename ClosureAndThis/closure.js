//Notes
// A closure is a function that makes use of variables defined in outer functions that have been previously returned

// A closure only exists when an inner finction makes use of a variable defined from an outer function that has returned. If the inner function does not make use of any of the external variables, all we have is a nested function.
//And the inner function does not have access to those variables in this case.

// Uses -
//Closures are usually used when creating private variables sine JavaScript doe not have built in support for private variables.

//Example 1
const outer = () => {
  let start = "Closures are";
  return (inner = () => {
    return start + " " + "awesome";
  });
};

console.log(outer);
console.log(outer());
console.log(outer()());

//Example 2
function outer1(a) {
  return function inner1(b) {
    return a + b;
  };
}

console.log(outer1(2)(5));
let outerStore = outer1(5);
console.log(outerStore(10));

//Closure as private variable - 1
function counter() {
  let count = 0;
  return function inside() {
    count++;
    return count;
  };
}

let counter1 = counter();
let counter2 = counter();
console.log(counter1);
console.log(counter1()); //1
console.log(counter1()); //2
console.log(counter2()); //1
console.log(counter2()); //2

// console.log(count); // Reference Error -Cannot acccess count

//Closure as private variable - 2
function classRoom() {
  let instructors = ["Ellie", "Colt"];
  return {
    getInstructors: function () {
      return instructors;
    },
    addInstructor: function (instructor) {
      instructors.push(instructor);
      return instructors;
    },
  };
}

let first = classRoom();
console.log(first.getInstructors());
console.log(first.addInstructor("Mark"));
