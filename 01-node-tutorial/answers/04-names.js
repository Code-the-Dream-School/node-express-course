//Modules - encasuplated code -01-intro.js and 05-utils.js

// this variable is local to this file.
const secret = 'SUPER SECRET'

// these two variales we can call them anywhere, they are global ariables.
const caroline = 'Caroline';
const kara = 'Kara';

// export to make the global variables available 
module.exports = { caroline, kara }
