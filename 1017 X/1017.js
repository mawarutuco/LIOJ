//type input.txt | node 1017.js

// const { copyFileSync } = require('fs');
var readline = require('readline');
const { arrayBuffer } = require('stream/consumers');

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

    let last = Number(lines[1]) + 1
    let arr = [], value = 0, biggest = 0

    for (let i = 2; i <= last; i++) {
        arr.push(Number(lines[i]))
    }
    // console.log(arr)

    //判斷偷到物品之總計價值
    for (let i = 0; i < lines[0]; i++) {
        if (Math.max(...arr) < 0) { biggest = 0 }
        else { biggest = Math.max(...arr) }
        value += biggest

        arr.splice(arr.indexOf(biggest), 1)
        //splice(start[,deleteCount])

        // console.log('big:' + biggest + ',arr:' + arr)
        // console.log('----')
    }
    console.log(value)

}
