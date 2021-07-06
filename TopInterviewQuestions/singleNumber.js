// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1

const singleNumber = (nums) => {
  const object = {};
  const result = [];
  //   if (nums.length === 1) {
  //     return nums[0];
  //   }
  //const nonDuplicates = [...new Set(nums)]; //remove duplicates in array
  //Loops through array and counts number of occurence of items while pushing count to object
  nums.forEach((item) => {
    if (!object[item]) {
      object[item] = 0;
    }
    object[item] += 1;
  });
  //
  for (const prop in object) {
    if (object[prop] < 2) {
      result.push(prop);
    }
  }
  console.log(object);
  return result[0];
};

console.log(singleNumber([2, 2, 1]));
