// Write a function:

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
//You must implement an algorithm that runs in O(n) time and uses constant extra space.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].
// Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  //if A is null or empty return 1
  //find length of array
  //Map through array and find valid elements = > 0 and < A.length+1
  if (A === null || A.length == 0) return 1;
}

// console.log(solution([1, 3, 6, 4, 1, 2])); // 5
// console.log(solution([3, 4, -1, 1])); // 2
// console.log(solution([1, 2, 3])); // 4
// console.log(solution([-1, -3])); //1
// console.log(solution([7,8,9,11,12])); //1
// console.log(solution([1,2,0])); //3
console.log(solution([])); //1
