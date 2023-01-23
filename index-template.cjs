// index-template.js
const path = require("path");
// import path from "path"

function defaultIndexTemplate(filePaths) {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
    return `export { default as ${exportName}Icon } from './${basename}'`;
  });
  return exportEntries.join("\n");
}

// export default defaultIndexTemplate
module.exports = defaultIndexTemplate;
