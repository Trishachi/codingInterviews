//5! = 5 * 4 * 3 * 2 * 1
//5! = 5 * 4!
//5! = 5 * 4 * 3!

//Iterative Method
const findFactorialIterarive = (num) => {
  let answer = 1;
  if (num < 0) return "Number must be positive";
  if (num === 2) answer = 2;
  for (let i = 2; i <= num; i++) {
    answer = answer * i;
  }
  return answer;
};

const findFactorialRecursive = (num) => {
  if (num < 0) return "Number must be positive";
  if (num === 0) return 1;
  return num * findFactorialRecursive(num - 1);
};

console.log(findFactorialIterarive(-1));
console.log(findFactorialRecursive(-1));
