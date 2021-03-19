//An elementary sort - works by scanning a list of items for the smallest element
// and swapping that element fot the item in the index position
//Time Complexity of o(n) - Best; O(n^2) for average and worst scenarions
//Space Complexity of o(1)
//Not Very Fast

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    let min = i;
    let temp = array[i];
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        //update minimum if current is lower than what we had already
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

console.log(selectionSort(numbers));
