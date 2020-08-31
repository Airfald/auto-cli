/**
 * 扩展命令，可以通过全局cli执行配置的扩展脚本
 * 
 */
const { isFunction } = require('lodash');
const { error } = require('../../core/utils/std');
const { cliPlugin } = require('../../core/utils/entry');
const createContext = require('../../core/common/aop/createContext');
const checkPluginFormat = require('../../core/common/pre/checkPluginFormat');

const extendCommand = async function(extendName, command){
  if(checkPluginFormat()){
    const extend = cliPlugin[extendName];

    if(isFunction(extend)){
      return extend(createContext({ cliPlugin }));
    } else {
      return error(` ${"extend not found".bold}`);
    }
  }
};

module.exports = extendCommand;
