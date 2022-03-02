//type input.txt | node 1010.js

var readline = require('readline');

var lines = []
var rl = readline.createInterface({
    input: process.stdin
});

rl.on('line', function (line) {
    lines.push(line)
});

rl.on('close', function () {
    solve(lines)
})

function solve(lines) {

    lines = lines[0].split(' ')
    if(lines[0]==lines[1]){
        console.log('Yes')
    }else{
        console.log('No')
    }
}

