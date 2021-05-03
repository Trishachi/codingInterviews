// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

let calculations = 0;

function fibonacciIterative(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}
// console.log(fibonacciIterative(8));

//Using Recurssion with == 0(2^n)
function fibonacciRecursive(n) {
  // calculations++;
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// console.log(fibonacciRecursive(30));

//Using Dynamic Programming / Memoization(cacheing)
//Dynamic programming can be viewed as combining "divide and conquer" with "memoization/cacheing"

//When to use Dynamic Programming
// - Problem can be divided into subproblems
// - Recursive solution
// - There are repetitive subproblems
// - memoized subproblems
// - Demand a raise from your boss :)

function fibonacciMaster() {
  let cache = {};
  return function fib(n) {
    calculations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

const fasterFib = fibonacciMaster();

console.log("Slow", fibonacciRecursive(10));
console.log("DP", fasterFib(10));
console.log("we did " + calculations + " calculations");
