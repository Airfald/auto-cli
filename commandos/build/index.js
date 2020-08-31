/**
 * build 打包构建，主要思路： 通过配置的环境进行选择选择执行相应配置文件的函数
 */

require('colors');
const fs = require('fs');
const fse = require('fs-extra');
const { isFunction } = require('lodash');
const { prompt } = require('enquirer');
const paths = require('../../core/utils/paths');
const { error, info } = require('../../core/utils/std');
const COMMON = require('../../dict/commandos/COMMON');
const { cliPlugin } = require('../../core/utils/entry');

const checkPluginFormat = require('../../core/common/pre/checkPluginFormat');
const createContext = require('../../core/common/aop/createContext');

const buildCommand = async function(mode, command){
  if(checkPluginFormat()){
    const builder = cliPlugin.build;
    const config = cliPlugin.config;

    const existsOutputDir = fs.existsSync(paths.currentOutputPath);
    const envOptions = config.envOptions;
    let buildEnv = '';

    if(envOptions.length){
      const { entry } = await prompt({
        type: "select",
        name: "entry",
        message: "Choice build environment",
        choices: envOptions
      });
      buildEnv = entry;
    }

    if(existsOutputDir) {
      await fse.remove(paths.currentOutputPath);
    }

    if(isFunction(builder)){
      info(`${"prepare building".green}`);
      return builder(createContext({ env: buildEnv, envOptions }));
    }

    return error(COMMON.ERROR_CANNOT_FIND_AOPSCRIPT_IMPLEMENT+` ${"build".bold}`);
  }
};

module.exports = buildCommand;
