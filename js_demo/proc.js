// : proc.js

/*
    Run with:
    type file.txt | node proc.js
*/

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(text) {
	process.stdout.write(text.toUpperCase());
});

    
