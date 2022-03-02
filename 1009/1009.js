//type input.txt | node 1009.js

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

    lines = lines[0].split('')
    let str = ''
    for (let i = lines.length - 1; i >= 0; i--) {
        str += lines[i]
    }
    console.log(str)
}

