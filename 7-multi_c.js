// prints x times "C is fun"
// usage: node 7-multi_c.js <times>

const n = parseInt(process.argv[2], 10);

if (Number.isNaN(n)) {
  // 1st (and only) console.log in the "error" path
  console.log("Missing number of occurrences");
} else {
  let out = "";
  // you MUST use a loop
  for (let i = 0; i < n; i++) {
    out += "C is fun";
    if (i < n - 1) out += "\n";
  }
  // 2nd (and only) console.log in the "success" path
  if (n > 0) console.log(out); // prints nothing for n <= 0 (e.g., -3)
}
