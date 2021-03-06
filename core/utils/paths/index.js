const path = require('path');
const { prefixAbcJSON } = require('../entry');

// 当前执行命令的路径 cwd
const currentPath = process.cwd();
// 当前执行命令的目录名称
const currentDirName = path.basename(currentPath);
// 资源输出目录
const currentOutputPath = prefixAbcJSON ? path.join(currentPath, prefixAbcJSON ? prefixAbcJSON.path.output : "") : '';
// 资源公共路径
const currentPublicPath = path.join(currentPath, prefixAbcJSON ? prefixAbcJSON.path.public : "");

// CLI 目录的位置
const cliRootPath = path.resolve(__dirname, "../../../");
// 缓存文件 的位置
const cacheFilePath = path.resolve(cliRootPath, '.cache');

// plugins 目录的位置
const pluginsPath = path.resolve(cliRootPath, 'plugins');

const paths = {
  currentPath,
  currentDirName,
  currentOutputPath,
  currentPublicPath,

  cliRootPath,
  cacheFilePath,
  pluginsPath,
};

module.exports = paths;
