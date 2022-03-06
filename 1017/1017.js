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
    //---計算時間開始---
    // let start=0,end=0
    // start = new Date().getTime();

    let arr = [], value = 0, biggest = 0, index = 0
    //lines轉為數字
    for (let i = 0; i < lines.length; i++) {
        lines[i] = Number(lines[i])
    }

    //獨立出物品
    for (let i = 2; i <= lines[1] + 1; i++) {
        arr.push(lines[i])
    }
    console.log(arr)

    for (let i = 0; i < lines[0]; i++) {
        biggest = Math.max(...arr)
        value += biggest
        index = arr.indexOf(biggest)
        arr.splice(index,1)
        // console.log('big:' + biggest + ',x:' + index + ',arr:' + arr)
        // console.log('---')
    }
    console.log(value)

    // for (let i = 0; i < lines[0]; i++) {
    //     biggest = Math.max(...arr)
    //     value += biggest
    //     // console.log('big:'+biggest+'this:'+arr.indexOf(biggest))
    //     arr.splice(arr.indexOf(biggest))

    //     console.log(arr)
    //     console.log('---')
    // }
    // console.log(value)


    //---計算時間結束---
    // end = new Date().getTime();
    // console.log((end-start)+'ms')
    //兩種方式時間差不多
}
