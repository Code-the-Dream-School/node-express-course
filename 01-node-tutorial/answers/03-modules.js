const names = require('./04-names');
const data = require('./06-alternative-flavor');
const { meetFamily, meetPets } = require('./05-utils');
require('./07-mind-grenade');

meetFamily(names.husbandName, names.daughterName);
meetPets(data.catName.name, data.fishNames[0], data.fishNames[1]);
