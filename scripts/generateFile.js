const { writeFileSync } = require("fs");
const [, , text, dist] = process.argv;

writeFileSync(dist, text);
