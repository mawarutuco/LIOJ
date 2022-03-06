//type input.txt | node 1018.js

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
    let arr = [], tmp = 1, biggest = 0
    let last = Number(lines[0]) - 1
    arr = lines[1].split(' ')

    for (let i = 0; i < last; i++) {
        if (arr[i] == arr[i + 1]) { tmp++ }
        else { tmp = 1 }
        // console.log(arr[i])

        if (tmp > biggest) { biggest = tmp }
        // console.log('big:' + biggest + ',tmp:' + tmp)
        // console.log('===')
    }
    if (last == 0) { console.log(1) }
    else { console.log(biggest) }
}
