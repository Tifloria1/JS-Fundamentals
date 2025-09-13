const times = parseInt(process.argv[2], 10);

if (Number.isNaN(times)) {
  console.log("Missing number of occurrences");
} else {
  let out = "";
  for (let i = 0; i < times; i++) {
    out += "C is fun" + (i < times - 1 ? "\n" : "");
  }
  console.log(out); // second (and last) log
}
