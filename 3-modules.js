// Modules - Need for modules

//CommonJS, every file is module(by default)
// Modules : Encapsulated Code (ony share minimum)

const names = require('./4-names');

console.log(names);

const sayHi = require('./5-utils');

console.log(sayHi);

sayHi(names.dodo);
sayHi(names.polu);

const data = require('./6-alternative-flavor');
console.log(data);

require('./7-mind-grenade');