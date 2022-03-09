//type input.txt | node 1026.js

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

    let amount = Number(lines[0])
    if (amount == 2) {
        console.log('Yes')
        return
    }

    let arr = lines[1].split(' ')
    let equal = 0

    for (let i = 0; i < amount - 1; i++) {
        let doThis = Number(arr[i + 1]) / Number(arr[i])

        if (i == 0) { equal = doThis }
        else if (equal != doThis) {
            console.log('No')
            return
        }
        else if (i == amount - 2) { console.log('Yes') }
    }
}

