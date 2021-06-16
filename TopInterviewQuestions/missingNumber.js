// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

//Examples
//Input = [3,0,1] | Output = 2
//Input = [9,6,4,2,3,5,7,0,1] | Output = 8
//Input = [0,1] | Output = 2
//Input = [0] | Output = 1
//Input = [1, 2] | Output = 0

var missingNumber = function (nums) {
  let indexArr = [];
  if (nums.indexOf(0) === -1) return 0;
  for (let i = 0; i < nums.length; i++) {
    indexArr.push(i);
  }
  for (let i = 0; i < indexArr.length; i++) {
    if (nums.indexOf(indexArr[i]) === -1) {
      return indexArr[i];
    }
  }
  return nums.length;
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([0]));
console.log(missingNumber([1, 2]));
console.log(missingNumber([0, 2, 3]));
