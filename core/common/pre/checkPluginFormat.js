/**
 * 检验插件配置的必须参数是否存在
 */
const colors = require('colors');
const { error } = require('../../utils/std');
const { cliPlugin } = require('../../utils/entry');
const checkPluginExist = require('./checkPluginExist');

const checkPluginFormat = function(additional){
  const isPluginExist = checkPluginExist();

  if(!isPluginExist) {
    return false
  }

  const { config, devServer, build, publish } = cliPlugin;

  if (!config) {
    return error('plugin config not exist');
  }

  if (!devServer) {
    return error('devServer config not exist');
  }

  if (!build) {
    return error('build config not exist');
  }

  if (!publish) {
    return error('publish config not exist');
  }

  if (additional && (!cliPlugin['plugins'] || !cliPlugin['plugins'][additional])) {
    return error(`${additional} config not exist`)
  }

  return true;
};

module.exports = checkPluginFormat;
