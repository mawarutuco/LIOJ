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
    let sum = 0
    // console.log(arr)
    for (let i = 0; i < arr.length-1; i++) {
        let num = Number(arr[i]);
        if (!isNaN(num)) {
            if (num % 2 != 0) {
                num = num * 2
                if (num > 9) { num = num - 9 }
            }
            sum += num
            // console.log('num:' + num + 'sum:' + sum)
        }
    }
    let checkNum = 10 - (sum % 10)
    // console.log('ch:'+checkNum)
    if (checkNum == arr[18]) {
        if (arr[0] == 5) { console.log('MASTER_CARD') }
        else if (arr[0] == 4) { console.log('VISA') }
    }
    else { console.log('INVALID') }
}

