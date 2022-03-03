//type input.txt | node 1013.js

const { copyFileSync } = require('fs');
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
    let floor = Number(lines[0])
    console.log(f(floor))
}

function f(n) {
    if (n === 1) return 1
    if (n === 2) return 1
    return f(n - 1) + f(n - 2)
}