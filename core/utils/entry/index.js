const fs = require('fs');
const path = require('path');

const currentPath = process.cwd();

// cli-plugin 所在的路径
const cliPluginPath = `${currentPath}/cli-plugin/index.js`;

// 获取cli-plugin
const cliPlugin = fs.existsSync(cliPluginPath) ? require(cliPluginPath) : null;

// packageJSON 所在的路径
const packageJSONPath = `${currentPath}/package.json`;

// 获取package.json
const packageJSON = fs.existsSync(packageJSONPath) ? require(packageJSONPath) : {};

// 获取 cli的packageJSON
const cliPackageJSONPath = path.resolve(__dirname, "../../../package.json");

const cliPackageJSON = fs.existsSync(cliPackageJSONPath) ? require(cliPackageJSONPath) : {};

module.exports = {
  currentPath,
  packageJSON,
  cliPluginPath,
  cliPlugin,
  cliPackageJSON,
};
