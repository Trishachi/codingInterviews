// Given an array of integer nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

///////////////////////////////////////
//CLARIFICATION QUESTIONS
//- Is my input always going to be an array
//- Is my input array sorted
//- What do I output if the target sum is not found within the given array

//Input validations
  //Check if any of the input arrays is empty

//Steps
  //Loop through the array and form a harsh table of item and index
  //Loop through the harsh table to find target sum
  //Return indexs of current item and target sum if found
  //Return target not found if not found


///////////////////////////////////////////////////////////////////////////
//SOLUTION

const twoSum = (nums, target) => {
  let map = {};

  for (num in nums) {
    map[nums[num]] = num;
  }

  for (num in nums) {
    const targetNum = target - nums[num];
    if (map.hasOwnProperty(targetNum) && map[targetNum] !== num) {
      return [num, map[targetNum]];
    }
  }
  return "Target Not Found";
};

console.log(twoSum([3, 3], 6)); //[1,2]
