//type input.txt | node 1008.js

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
    let water = Number(lines)
    let bucket,tmp = 0
    do {
        for (let i = 1; Math.pow(2, i) <= water; i++) {
            tmp = Math.pow(2, i)
        }
        water -= tmp
        bucket++
    } while (water > 0)
    console.log(bucket)
}