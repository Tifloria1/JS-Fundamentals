// prints sum of two integers
function add(a, b) {
  return a + b;
}
const a = Number(process.argv[2]);
const b = Number(process.argv[3]);
console.log(add(a, b)); // NaN if args missing/invalid (as in examples)
