/**
 * devserver 打包构建，主要思路： 通过配置的环境进行选择选择执行相应配置文件的函数
 */

require('colors');
const { isFunction } = require('lodash');
const { prompt } = require('enquirer');
const { error } = require('../../core/utils/std');
const { cliPlugin } = require('../../core/utils/entry');

const checkPluginFormat = require('../../core/common/pre/checkPluginFormat');
const createContext = require('../../core/common/aop/createContext');

const buildCommand = async function(mode, command){
  if(checkPluginFormat()){
    const devServer = cliPlugin.devServer;
    const config = cliPlugin.config;
   
    const envOptions = config.envOptions;
    let devServerEnv = '';

    if(envOptions.length){
      const { entry } = await prompt({
        type: "select",
        name: "entry",
        message: "Choice build environment",
        choices: envOptions
      });
      devServerEnv = entry;
    }

    if(isFunction(devServer)){
      return devServer(createContext({ env: devServerEnv, envOptions }));
    }

    return error(` ${"devServer not found".bold}`);
  }
};

module.exports = buildCommand;
