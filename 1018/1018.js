//type input.txt | node 1018.js

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

//1018
function solve(lines) {
    let arr = [], tmp = 1, biggest = 0
    arr = lines[1].split(' ')

    for (let i = 0; i < Number(lines[0]) - 1; i++) {
        if (arr[i] == arr[i + 1]) { tmp++ }
        else { tmp = 1 }
        // console.log(arr[i])

        if (tmp > biggest) { biggest = tmp }
        // console.log('big:' + biggest + ',tmp:' + tmp)
        // console.log('===')
    }
    if (Number(lines[0]) == 1) { console.log(1) }
    else { console.log(biggest) }
}
