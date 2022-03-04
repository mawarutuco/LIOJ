//type input.txt | node 1014.js

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
    let n = Number(lines[0])
    let th = 0 //第幾個數
    for (let i = 1; i <= n; i++) {
        if (i % 10 != 9) { th++ }
        // console.log('i%10=' + i % 10)
        // console.log('i:' + i)
        // console.log('th:' + th)
    }
    console.log(th)
}

