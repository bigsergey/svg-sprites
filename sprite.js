'use strict';

var SVGSpriter = require('svg-sprite'),
  path = require('path'),
  mkdirp = require('mkdirp'),
  fs = require('fs'),
  config = {
    "mode": {
      "css": {
        prefix: '.icon-bg-%s',
        render: {
          scss: true
        },
        example: true
      },
      "view": {
        prefix: '.icon-bg-view-%s',
        render: {
          scss: true
        },
        example: true
      },
      "defs": {
        prefix: '.icon-def-%s',
        render: {
          scss: true
        },
        example: true
      },
      "symbol": {
        prefix: '.icon-symbol-%s',
        render: {
          scss: true
        },
        example: true
      },
      "stack": false
    }
  },
  spriter = new SVGSpriter(config);

var icons = ['chrome', 'edge', 'firefox', 'IE', 'opera', 'safari'];

for (var index in icons) {
  // Register some SVG files with the spriter
  var file = './assets/' + icons[index] + '.svg';
  spriter.add(path.resolve(file), file, fs.readFileSync(path.resolve(file), { encoding: 'utf-8' }));
}

// Compile the sprite
spriter.compile(function (error, result, cssData) {

  // Run through all configured output modes
  for (var mode in result) {

    // Run through all created resources and write them to disk
    for (var type in result[mode]) {
      mkdirp.sync(path.dirname(result[mode][type].path));
      fs.writeFileSync(result[mode][type].path, result[mode][type].contents);
    }
  }
});
