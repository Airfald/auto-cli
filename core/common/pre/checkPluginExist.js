const colors = require('colors');
const ERRORS = require('../../../dict/std/ERRORS');

const { error } = require('../../utils/std');
const { cliPlugin } = require('../../utils/entry');

// 检测是否有对应的插件可执行
const checkPluginExist = function(){

  if(!cliPlugin)
    return error(ERRORS.cliPlugin.notexistplugin);

  return cliPlugin;
};

module.exports = checkPluginExist;
