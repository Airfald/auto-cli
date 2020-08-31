const utils = require('../../utils');

module.exports = function(extendContext = {}){
  let context = {
    utils: utils,
  };

  context = Object.assign({}, context, extendContext);

  return context;
};
