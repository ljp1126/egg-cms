'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };

exports.ejs = {
  enable: true,
  package: 'egg-view-ejs',
};

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};
