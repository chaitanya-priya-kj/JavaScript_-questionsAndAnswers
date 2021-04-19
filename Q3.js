'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
   const vowels = ["a","e","i","o","u"];
   const arr = s.split("");
   var vowelsFound = [];
   var cons = [];
   
   for (var i in arr) {
     if (vowels.includes(arr[i])) {
        vowelsFound.push(arr[i]);
        } else {
            cons.push(arr[i]);
        }}
console.log(vowelsFound.join('\n') + '\n' + cons.join('\n'))
}

