//type input.txt | node 1031.js

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

    let num = Number(lines[0])
    let sum = 0
    n = Math.floor(Math.sqrt(num))
    for (let i = 1; i <= n; i++) {
        let tmp = Math.pow(i, 2)
        sum += tmp
    }
    console.log(sum)
}

