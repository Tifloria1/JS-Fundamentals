const size = parseInt(process.argv[2], 10);

if (Number.isNaN(size)) {
  console.log("Missing size");
} else if (size > 0) {
  const row = "X".repeat(size);
  let out = "";
  for (let i = 0; i < size; i++) {
    out += row + (i < size - 1 ? "\n" : "");
  }
  console.log(out);
} // if size <= 0, print nothing
