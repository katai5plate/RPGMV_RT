const { writeFileSync, readFileSync } = require("fs");
const CleanCSS = require("clean-css");
const [, , arg, dist] = process.argv;
const code = new CleanCSS({})
  .minify(readFileSync(arg, { encoding: "utf8" }))
  .styles.replace(/(mplus-1m-regular)/, "fonts/$1");
writeFileSync(dist, code);
