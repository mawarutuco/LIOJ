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
    //十進制轉九進制
    let n = Number(lines[0])
    let ans = 0
    for (let i = 0; n > 0; i++) {
        ans += (n % 10) * (9 ** i)
        n = parseInt(n / 10)
    }
    console.log(ans)


    //解法是一個一個數的話，拿 TLE 很正常
    // let n = Number(lines[0])
    // let th = 0 //第幾個數
    // for (let i = 1; i <= n; i++) {
    //     i = String(i)
    //     if (i.indexOf('9') == -1) { th++ }
    // }
    // console.log(th)
}
