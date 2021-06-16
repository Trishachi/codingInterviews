// Write a function:
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
//You must implement an algorithm that runs in O(n) time and uses constant extra space.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

//Resource - https://www.youtube.com/watch?v=2QugZILS_Q8&t=571s

function solution(A) {
  let indexArr = [];
  let result = [];
  if (A.indexOf(1) === -1) return 1;
  for (let i = 0; i < A.length; i++) {
    indexArr.push(i);
    if (A[i] <= 0 || A[i] > A.length) {
      A[i] = 1;
    }
  }
  for (let i = 0; i < A.length; i++) {
    let index = A[i] - 1;
    indexArr[index] = null;
  }
  for (let i = 0; i < indexArr.length; i++) {
    if (indexArr[i] != null) {
      result.push(indexArr[i]);
      return result[0] + 1;
    }
  }
  return A.length + 1;
}

console.log(solution([1, 3, 6, 4, 1, 2])); // 5
console.log(solution([3, 4, -1, 1])); // 2
console.log(solution([1, 2, 3])); // 4
console.log(solution([-1, -3])); //1
console.log(solution([7, 8, 9, 11, 12])); //1
console.log(solution([1, 2, 0])); //3
console.log(solution([])); //1
