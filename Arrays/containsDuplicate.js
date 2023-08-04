//Given an integer array nums, 
//return true if any value appears at least twice in the array, 
//and return false if every element is distinct.

// Tests
//containsDuplicate([1,2,3,1]) = True
//containsDuplicate([1,2,3,4]) = False
//containsDuplicate([1,1,1,3,3,4,3,2,4,2]) = True

//Steps
//- convert items of array to object and count number of occurence
//- If any item occurs more than once -return flase
// - Else retun true

var containsDuplicate = function(nums) {
  const itemCount = {}; 
    for (let item in nums){
      // console.log(nums[item]);
      if(itemCount[nums[item]]){
        itemCount[nums[item]] += 1; 
        if(itemCount[nums[item]] > 1)
        { return true; }
    } else {
       itemCount[nums[item]] = 1;
    } 
   }
  return false;
}

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
