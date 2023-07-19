
//Function mergeSortedArrays([0,3,4,31],[4,6,30])
//Should Return
// [0, 3, 4, 4, 6, 30, 31]
//mergeSortedArrays([0,3,4,31],[]) == [[0,3,4,31]]

//Steps
  //Merge the input arrays into a single array
  //Sort the resulting array

//Methods of merging an array 
    //Using the spread operator - Create a new array
    //Using the concat function - creates a new array
    //Using the push function - does not create a new array 

//Compare function for numerical sorting 
//function(a - b) {return a -b} OR ((a,b) => a - b)- compare two array values at a time
// If the result is negative, a is sorted before b
// If the result is positive, b is sorted before a
// If the result is 0, no changes are done with the sort order of the two values

//Input validations
  //Check if any of the input arrays is empty

//Brute force method
function mergeSortedArrays(arr1, arr2){
  const mergedArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;
  
  //Check inputs
  if(arr1.length === 0 && arr2.length === 0){
    return 'Invalid input entered: Empty Arrays';
  }
  if(arr1.length === 0){
    return arr2;
  }
  if(arr2.length === 0){
    return arr1;
  }
  while(arr1Item || arr2Item){
    // console.log(arr1Item, arr2Item);
    if(!arr2Item || arr1Item < arr2Item){
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }  
    }
  return mergedArray;
  }

//More Efficient Method
function mergeSortedArrays2(arr1, arr2){
  if(arr1.length === 0 && arr2.length === 0) {
    return 'Invalid input entered: Empty Arrays';
  }
  const mergedResult = [...arr1, ...arr2];
  // const mergedResult = arr1.concat(arr2);
  mergedResult.sort((a, b) => a - b );
  return mergedResult;
}

console.log(mergeSortedArrays2([0,3,4,31],[4,6,30]));
console.log(mergeSortedArrays2([0,3,4,31],[]));
console.log(mergeSortedArrays2([],[]));
console.log(mergeSortedArrays2([],[4,6,30,45]));
console.log(mergeSortedArrays2([0,3,4,31],[4,6,30,45]));
