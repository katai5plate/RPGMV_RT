const { writeFileSync } = require("fs");
const [, , dist] = process.argv;

const options = [
  {
    name: "Community_Basic",
    status: true,
    description: "基本的なパラメーターを設定するプラグインです。",
    parameters: {
      cacheLimit: "20",
      screenWidth: "816",
      screenHeight: "624",
      changeWindowWidthTo: "",
      changeWindowHeightTo: "",
      renderingMode: "auto",
      alwaysDash: "off"
    }
  }
];

writeFileSync(dist, `var $plugins=${JSON.stringify(options)}`);
