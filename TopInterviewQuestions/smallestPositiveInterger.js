// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

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
  // write your code in JavaScript (Node.js 8.9.4)
  // A.sort((a,b)=> a - b)
  // return A;
  let result = [];
  for (let i = 0; i < A.length; i++) {
    // if (0 <= A[i]) {
    // result[A[i]] = true;
    // }
    console.log(A.length);
    if (A[i] > 0) {
      result[A[i]] = true;
    }
  }
  console.log(result);
  for (let i = 1; i <= result.length; i++) {
    if (undefined === result[i]) {
      return i;
    }
  }
  return 1;
}

console.log(solution([1, 3, 6, 4, 1, 2])); // 5
// console.log(solution([3,4,-1,1])); // 2
// console.log(solution([1, 2, 3])); // 4
// console.log(solution([-1, -3])); //1
