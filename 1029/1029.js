//type input.txt | node 1029.js

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

    let tmp = lines[0].split(' ')
    let A = Number(tmp[0])
    let op = tmp[1]
    let B = Number(tmp[2])

    if (op == '+') { console.log(A + B) }
    else if (op == '-') { console.log(A - B) }
    else if (op == '*') { console.log(A * B) }
    else { console.log(A / B) }
}
