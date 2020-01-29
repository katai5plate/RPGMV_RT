const { readFileSync, writeFileSync } = require("fs");
const { compressToEncodedURIComponent } = require("lz-string");
const [, , arg, dist] = process.argv;
const code = compressToEncodedURIComponent(
  readFileSync(arg, { encoding: "utf8" })
);
writeFileSync(
  dist,
  `eval(LZString.decompressFromEncodedURIComponent("${code}"))`
);
