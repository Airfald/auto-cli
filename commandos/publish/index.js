const { prompt } = require('enquirer');
const { isFunction } = require('lodash');
const { error } = require('../../core/utils/std');
const { cliPlugin } = require('../../core/utils/entry');
const createContext = require('../../core/common/aop/createContext');
const checkPluginFormat = require('../../core/common/pre/checkPluginFormat');

const publishCommand = async function(mode, command){
  if(checkPluginFormat()){
    const publish = cliPlugin.publish;
    const config = cliPlugin.config;

    if(isFunction(publish)){
      const envOptions = config.envOptions;
      let publishEnv = '';

      if(envOptions.length){
        const { entry } = await prompt({
          type: "select",
          name: "entry",
          message: "Choice build environment",
          choices: envOptions
        });
        publishEnv = entry;
      }

      if(publishEnv) {
        return publish(createContext({ env: publishEnv, envOptions }));
      } else {
        return error(` ${"publish not found".bold}`);
      }

    }
    return error(` ${"publish fail".bold}`);
  }
};

module.exports = publishCommand;
