//type input.txt | node 1021.js

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
    let n = Number(lines[0]), str = ''

    for (let i = 1; i <= n; i++) {
        str += '*'
        console.log(str)
    }
}

