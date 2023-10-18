/*
(3d). 07-mind-grenade.js may not export anything, but it should contain a function that logs something to the console. 
You should then call that function within the code of 07-mind-grenade.js. This is to demonstrate that when a module is loaded with a require statement, 
anything in the mainline code of the loaded module runs.
NOTE: The only program you should need to actually invoke to test that everything is working is 03-modules.js, because it loads all the others (files 4-7).
*/

function logSomething(){
    console.log('This is module - 07');
}

logSomething();