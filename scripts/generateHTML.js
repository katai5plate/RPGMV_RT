const { writeFileSync, readFileSync } = require("fs");
const [, , dist] = process.argv;

const title = "";
const styleCode = readFileSync("./temp/gamefont.conv.css");
const lzCode = readFileSync("./temp/lz.min.js");
const mvCode = readFileSync("./temp/mv.lz.js");

writeFileSync(
  dist,
  [
    "<!DOCTYPE html><html><head>",
    '<meta charset="UTF-8">',
    '<meta name="apple-mobile-web-app-capable" content="yes">',
    '<meta name="apple-mobile-web-app-status-bar-style"',
    ' content="black-translucent">',
    '<meta name="viewport" content="user-scalable=no">',
    '<link rel="icon" href="icon/icon.png" type="image/png"/>',
    `<style>${styleCode}</style><title>${title}</title></head>`,
    '<body style="background-color:#000">',
    `<script>${lzCode}</script><script>${mvCode}</script>`,
    '<script type="text/javascript" src="js/plugins.js"></script>',
    "<script>window.launchMain()</script></body></html>"
  ].join("")
);
