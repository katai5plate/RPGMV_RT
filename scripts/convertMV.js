const { writeFileSync, readFileSync } = require("fs");
const Concat = require("concat-with-sourcemaps");
const concat = new Concat(true, "mv.js", "\n");

[
  "rpg_core",
  "rpg_managers",
  "rpg_objects",
  "rpg_scenes",
  "rpg_sprites",
  "rpg_windows"
]
  .map(v => require(`openmv/${v}.json`))
  .reduce((p, c) => [...p, ...c], [
    "js/libs/pixi.js",
    "js/libs/pixi-tilemap.js",
    "js/libs/pixi-picture.js",
    "js/libs/fpsmeter.js",
    // "js/libs/lz-string.js",
    "js/libs/iphone-inline-video.browser.js"
  ])
  .forEach(name => {
    const path = `./node_modules/openmv/${name}`;
    concat.add(path, readFileSync(path));
  });

const mainJsPath = "./node_modules/openmv/js/main.js";
const mainJs = `window.launchMain = function() {\n${readFileSync(mainJsPath, {
  encoding: "utf-8"
})}\n}`;
const mainJsAfter = "./temp/main.js";

writeFileSync(mainJsAfter, mainJs);
concat.add(mainJsAfter, readFileSync(mainJsAfter));

writeFileSync("./temp/mv.js", concat.content);
