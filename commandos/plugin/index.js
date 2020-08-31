/**
 * 扩展命令，可以通过全局cli执行配置的扩展脚本
 * 
 */
const path = require('path');
const fs = require('fs');

const { isFunction } = require('lodash');
const { error } = require('../../core/utils/std');
const { pluginsPath } = require('../../core/utils/paths');

const pluginCommand = async function(pluginName, command){
    const pluginFilePath = path.join(pluginsPath, pluginName, 'index.js')

    if (fs.existsSync(pluginFilePath)) {
        plugin = require(pluginFilePath);
        isFunction(plugin) && plugin();
        return
    }

    return error(`plugin not found, please sure ${pluginName} exist`)
};

module.exports = pluginCommand;
