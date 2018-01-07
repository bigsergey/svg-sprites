require('./style.css');

require('../css/sprite.scss');
require('../view/sprite.scss');
require('../defs/sprite.scss');
require('../symbol/sprite.scss');

const defsSvg = require('!svg-inline-loader!../defs/svg/sprite.defs.svg');
const defsElem = document.createElement('div');

const symbolSvg = require('!svg-inline-loader!../symbol/svg/sprite.symbol.svg');
const symbolElem = document.createElement('div');

defsElem.innerHTML = defsSvg;
symbolElem.innerHTML = symbolSvg.replace(/id=\"assets\-\-/g, 'id="assets-symbol--');

document.body.appendChild(defsElem);
document.body.appendChild(symbolElem);
