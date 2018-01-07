require('./style.css');

require('../css/sprite.scss');
require('../view/sprite.scss');
require('../defs/sprite.scss');

const defsSVG = require('!svg-inline-loader!../defs/svg/sprite.defs.svg');
const defsElem = document.createElement('div');

defsElem.innerHTML = defsSVG;
document.body.appendChild(defsElem);
