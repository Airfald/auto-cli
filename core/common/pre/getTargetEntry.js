const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');
const colors = require('colors');
const paths = require('../../utils/paths');
const { loading, info, error, warn } = require('../../utils/std');

const checkPluginAbcxJSONFormat = require('./checkPluginAbcxJSONFormat');
const installPlugin = require('../../../commandos/plugin/install');

// 从安装插件获取
const getEntryFromPlugins = function(pluginsPath, type, fileName, notWarn){
  const targetFilePath = path.resolve(pluginsPath, fileName);

  if(!fs.existsSync(targetFilePath)){
    if(!notWarn) warn(`${type} not exist implement for aop invoking`);
    return null;
  }

  // 校验abcxJSON 是否合法，如果没有且不合法，则不允许调用
  const abcxJSON = checkPluginAbcxJSONFormat(pluginsPath);
  if(!abcxJSON) return null;

  // 校验合法后，检测有没有安装node模块 ，如果没有则帮忙安装
  const existNodeModules =
    fs.existsSync(path.resolve(pluginsPath, 'node_modules'));

  if(!existNodeModules){
    const install = loading(`${"[xcli]".green.bold} prepare plugin ${("["+type+"]").red.bold}`);
    execSync(`${abcxJSON['plugin-package'] || "npm"} install`, { cwd: pluginsPath, stdio: "inherit" });
    install.succeed();

    // 强制创建node_modules;
    fse.ensureDirSync(path.resolve(pluginsPath, 'node_modules'));
  }

  return targetFilePath;
};

// 从项目本地的node_modules中获取插件
const getEntryFromLocalPlugins = function(localPluginsPath, type, fileName, notWarn){
  const targetFilePath = path.resolve(localPluginsPath, fileName);

  if(!fs.existsSync(targetFilePath)){
    if(!notWarn) warn(`${type} not exist implement for aop invoking`);
    return null;
  }

  // 校验abcxJSON 是否合法，如果没有且不合法，则不允许调用
  const abcxJSON = checkPluginAbcxJSONFormat(localPluginsPath);
  if(!abcxJSON) return null;

  return targetFilePath;
};


// 获取包的入口AOP文件
const getTargetEntryJS = async function(type, entryFileName, notWarn=false){
  let filePath;
  let target = null;

  // 没有插件类型
  if(!type) return target;

  const pluginsPath = path.resolve(paths.pluginsPath, `${type}`);
  const existPlugin = fs.existsSync(pluginsPath);

  const localPluginsPath = path.resolve(paths.currentPath, `node_modules/${type}`);
  const existLocalPlugin = fs.existsSync(localPluginsPath);

  // 寻找目标
  // 优先从xcli插件包中获取入口文件
  if(existPlugin){
    filePath = getEntryFromPlugins(pluginsPath, type, entryFileName, notWarn);

  // 其次从项目的node_modules下寻找插件
  }else if(existLocalPlugin){
    filePath = getEntryFromLocalPlugins(localPluginsPath, type, entryFileName, notWarn);

  // 都没有找到，则尝试安装插件
  }else{
    // filePath = null;
    const installSuccess = await installPlugin(type, true);

    if(installSuccess){
      info(`download init ${type.bold} plugin success`);
      filePath = getEntryFromPlugins(pluginsPath, type, entryFileName, notWarn);
    }else{
      if(!notWarn) warn(`can not find type mode [${type.bold}], try install plugin "${type.bold}" self`);
      filePath = null;
    }
  }

  // 获取对应的入口，返回可执行的AOP入口
  if(filePath) target = require(filePath);

  return target;
};

module.exports = getTargetEntryJS;
