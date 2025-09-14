// 10-factorial.js
// prints factorial of the first CLI arg; factorial(NaN) = 1 (per spec)

const n = parseInt(process.argv[2], 10);

function factorial(x) {
  if (Number.isNaN(x) || x <= 1) return 1; // base cases incl. NaN, 0, 1, negatives
  return x * factorial(x - 1);             // recursive step
}

console.log(factorial(n));
