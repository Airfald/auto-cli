const colors = require('colors');
const { each } = require('lodash');

const prefixStdOutMsg = function(dict){
  return each(dict, function(child, mainKey){
    const key = mainKey.toUpperCase();

    each(child, function(msg, childKey){
      child[childKey.toUpperCase()] = `${("["+mainKey+"]").bold} ${msg}`;
      delete child[childKey];
    });

    dict[key] = child;

    delete dict[mainKey];
  });
};

const ERROR = {
  cliPlugin: {
    notexistplugin: 'plugin is not exist',
  },

  // cache缓存相关
  cache: {
    readcacheerror: "the cache readfile parse unexcepted error with JSON.parse"
  },

  // mockServer中间件相关
  mockServer: {
    cantmatchrule: "can't match route rule as unkown request method",
    hotupdateunexpected: "hot update source mockfile script throw unexcepted error"
  }

};

const output = ERROR;

// console.log(output);
module.exports = output;
