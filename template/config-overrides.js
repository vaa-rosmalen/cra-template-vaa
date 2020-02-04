const {
  override,
  fixBabelImports,
  addLessLoader,
  addBabelPlugin
} = require("customize-cra");
const { CONFIG } = require("./src/configs/config.js");

const overrideList = [
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": CONFIG.primaryColor,
      "@font-family": "Rubik, sans-serif",
      "@font-size-base": "16px",
      "@text-color": CONFIG.textColor,
      "@border-radius-base": "5px"
    }
  })
];

if (process.env.NODE_ENV !== "production") {
  overrideList.push(
    addBabelPlugin([
      "i18next-extract",
      {
        locales: ["nl", "en"],
        outputPath: "public/locales/{{locale}}/{{ns}}.json"
      }
    ])
  );
}

module.exports = override(...overrideList);
