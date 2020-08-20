#!/usr/bin/env node

require('colors');
// const chalk = require('chalk');
const cli = require('commander');
// const test = ''
const packageJSON = require('./package.json');
// const DESCRIPTION = require('./dict/commandos/DESCRIPTION');

// const newXCLI = require('./commandos/new');
// const create = require('./commandos/create');
// const dev = require('./commandos/dev');
// const build = require('./commandos/build');
// const publish = require('./commandos/publish');
// const link = require('./commandos/link');
// const unlink = require('./commandos/unlink');
// const plugin = require('./commandos/plugin');
// const upgrade = require('./commandos/upgrade');
// const test = require('./commandos/test');
// const setRemotePlugin = require('./commandos/set-remote-plugin');
// const cmd_lint = require('./scripts/lint');

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








  

// Register Command
// cli.
//   command('new [projectFolder]').
//   alias('init').
//   description(DESCRIPTION.new).
//   action(newXCLI);

// cli.
//   command('create [name]').
//   description(DESCRIPTION.create).
//   action(create);

// cli.
//   command('plugin [command] [pluginName]').
//   description(DESCRIPTION.plugin).
//   action(plugin);

// cli.
//   command('dev').
//   option('-d, --debug', `${'devServer'.bold} with [debug] mode`).
//   description(DESCRIPTION.dev).
//   action(dev);

// cli.
//   command('test').
//   option('-u, --unit', `${'test'.bold} with [UT] mode`).
//   description(DESCRIPTION.test).
//   action(test);

// cli.
//   command('build [mode]').
//   option('-s, --simple', `${'build'.bold} with [simple] mode`).
//   option('-d, --debug', `${'build'.bold} with [debug] mode`).
//   description(DESCRIPTION.build).
//   action(build);

// cli.
//   command('publish [mode]').
//   option('-d, --debug', `${'publish'.bold} with [debug] mode`).
//   description(DESCRIPTION.publish).
//   action(publish);

// cli.
//   command('upgrade').
//   description(DESCRIPTION.upgrade).
//   action(upgrade);

// cli.
//   command('set-remote-plugin [configJSON]').
//   description(DESCRIPTION.setRemotePlugin).
//   action(setRemotePlugin);

// cli.
//   command('link').
//   description(DESCRIPTION.link).
//   action(link);

// cli.
//   command('unlink').
//   description(DESCRIPTION.unlink).
//   action(unlink);

// cli.
//   command('help').
//   description(DESCRIPTION.help).
//   action(()=>cli.help());

// // cli
// //   .command('lint [fix]')
// //   .description('lint code style'.red)
// //   .action(cmd_lint);

/*eslint-disable*/
// 必须加上
cli.parse(process.argv);
// // if (!cli.args.length || !process.argv[2] || !commands.includes(process.argv[2])) cli.help();
