// : console-1.js

/*
    Run with:
    node console-1.js 2> errors-file.log 1> logfile.log
*/

var name = 'alex';
var user = {name: 'alex'};
console.log('Hello');
console.log('Hello %s', name);
console.log('Hello: ', name);
console.log('Hello:', user);

console.error('Error, bad user:', user);

    
