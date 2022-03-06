//type input.txt | node 1017.js

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

//1017
function solve(lines) {

    let arr = [], value = 0, biggest = 0, last = 0

    for (let i = 2; i <= Number(lines[1]) + 1; i++) {
        arr.push(Number(lines[i]))
    }

    if (Number(lines[0]) > Number[1]) { last = Number(lines[1]) }
    else { last = Number(lines[0])  }

    //判斷偷到物品之總計價值
    for (let i = 0; i < last; i++) {
        if (Math.max(...arr) == '-Infinity') { biggest = 0 }
        else { biggest = Math.max(...arr) }
        value += biggest

        arr.splice(arr.indexOf(biggest), 1)
        //splice(start[,deleteCount])

        // console.log(Math.max(...arr)== '-Infinity')
        // console.log('big:' + biggest + ',arr:' + arr)
        // console.log('----')
    }
    console.log(value)

}
