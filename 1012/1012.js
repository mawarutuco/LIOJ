//type input.txt | node 1012.js

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
    let A = Number(lines[0]) //第一杯
    let B = Number(lines[1]) //第二杯
    if (A > B) {
        console.log(A * 2)         //最大飲料價值
        console.log(A * 2 - (A + B))   //損失值
    }else{
        console.log(B*2)
        console.log(B*2-(A+B))
    }

}