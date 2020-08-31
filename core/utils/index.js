const { packageJSON, xcliPackageJSON } = require('./entry');
const os = require('./os');
const paths = require('./paths');
const std = require('./std');
const tools = require('./tools');

module.exports = {
  packageJSON,
  xcliPackageJSON,
  os,
  std,
  paths,
  tools,
};
