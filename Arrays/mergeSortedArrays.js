//Function mergeSortedArrays([0,3,4,31],[4,6,30])
//Should Return
// [0, 3, 4, 4, 6, 30, 31]
//mergeSortedArrays([0,3,4,31],[]) == [[0,3,4,31]]

const mergeSortedArrays = (array1, array2) => {
  const newArray = [...array1, ...array2];
  newArray.sort((a, b) => a - b);
  return newArray;
};

console.log(mergeSortedArrays([0, 3, 4, 31], []));
