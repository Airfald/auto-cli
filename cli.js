#!/usr/bin/env node

require('colors');
const cli = require('commander');
const packageJSON = require('./package.json');
const DESCRIPTION = require('./dict/commandos/DESCRIPTION');

const build = require('./commandos/build');
const dev = require('./commandos/dev');
const publish = require('./commandos/publish');
const extend = require('./commandos/extend');
const plugin = require('./commandos/plugin');

/*eslint-disable*/
const logo =
`
              ____   ____ _     ___ 
              / ___| / ___| |   |_ _|
              \___ \| |   | |    | | 
              ___) | |___| |___ | | 
              |____/ \____|_____|___|
`.red;
/* eslint-enable */

cli.
  version(packageJSON.version).
  usage('[command]'.green).
  description(logo + "\n     " + packageJSON.description.red);

cli.
command('dev').
option('-d, --debug', `${'devServer'.bold} with [debug] mode`).
description(DESCRIPTION.dev).
action(dev);

cli.
  command('build [mode]').
  description(DESCRIPTION.build).
  action(build);
  
cli.
  command('publish [mode]').
  description(DESCRIPTION.publish).
  action(publish);

cli.
command('extend [extendName]').
description(DESCRIPTION.extend).
action(extend);

cli.
command('plugin [pluginName]').
description(DESCRIPTION.plugin).
action(plugin);

cli.
  command('help').
  description(DESCRIPTION.help).
  action(()=>cli.help());


/*eslint-disable*/
// 必须加上
cli.parse(process.argv);
