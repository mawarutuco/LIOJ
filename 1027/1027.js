//type input.txt | node 1027.js

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

    let arr = lines[0].split('')

    // console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) % 2 == 0) { Number(arr[i]) * 2 }
    }
}

