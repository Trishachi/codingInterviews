/* 
References: 
https://www.freecodecamp.org/news/javascript-array-sort-tutorial-how-to-use-js-sort-methods-with-code-examples/
https://www.w3schools.com/jsref/jsref_sort.asp
https://www.w3schools.com/js/js_array_sort.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
https://www.javascripttutorial.net/javascript-array-sort/

##### String Sort #########
The sort() method sorts the items of an array in place (ie no copy is made) and returns the sorted array.
By default, the sort() method sorts the values as strings in alphabetical and ascending order (A to Z) by
comparing their UTF-a6 code values

The time and space complexity of the sort cannot be guaranteed as it depends on the implementation

Syntax == array.sort(comparator function);
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());

//The reverse() method reverses the elements in an array, sorting it in descending order
console.log(fruits.sort().reverse());

/* Numeric Sort 
The sort() function by default sorts, values as strings and therefore returns a wrong result for numbers
Let's think of A=1, B=2, and C=3.

As an example, if we have three strings as C (3), BC (23) and AB(12), JavaScript will sort them as AB, BC, and C in an ascending order, which is alphabetically correct.

However, JavaScript will sort the numbers (alphabetically again) as 12, 23, and 3, which is incorrect.
*/

const myArray = ["C", "BC", "AB"];
console.log(myArray.sort()); // [AB, BC, C]
const numbers = [3, 23, 12];
console.log(numbers.sort()); // --> 12, 23, 3 === incorrect

/* This issue can be solved by using a compare Function within the sort function
The purpose of the compare function is to define an alternative sort order.

Syntax - array.sort(function(a - b){return a - b})

When the sort() function compares all the values in the array, two values at a time, 
it sends the values to the compare function, 
and sorts the values according to the returned (negative, zero, positive) value.

If the result is negative a is sorted before b.
If the result is positive b is sorted before a.
If the result is 0 no changes are done and positions of a and b remain the same.
*/
const points = [1, 30, 4, 21, 100000];
points.sort(function (a, b) {
  return a - b;
});
console.log(points);

/* Sorting Object Arrays
Arrays of objects can be sorted by comparing the value of one of their properties.
Even if objects have properties of different data types, the sort() method can be used to sort the array.
The solution is to write a compare function to compare the property values:
Sorting string properties is slightly more complex as seen below

*/
var cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

cars.sort(function (a, b) {
  return a.year - b.year;
});
console.log(cars);

cars.sort(function (a, b) {
  var x = a.type.toLowerCase();
  var y = b.type.toLowerCase();
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});
console.log(cars);

/* Sorting non ASCII characters
For sorting strings with non-ASCII characters, i.e. strings with accented characters (e, é, è, a, ä, etc.), 
strings from languages other than English, use String.localeCompare. 
This function can compare those characters so they appear in the right order.
*/

var items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
items.sort(function (a, b) {
  return a.localeCompare(b);
});
console.log(items); //[ 'adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé' ]
