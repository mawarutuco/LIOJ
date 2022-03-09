//type input.txt | node 1025.js

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

    //分割input n起始、m結尾
    let tmp = lines[0].split(' ')
    let start = Number(tmp[0])
    let end = Number(tmp[1])
    let arr = 0


    for (let i = start; i <= end; i++) {
        i = String(i)
        arr = i.split('')

        let sumArr = 0
        for (let j = 0; j < arr.length; j++) {
            sumArr += Number(arr[j]) ** arr.length
        }

        if (sumArr == i) { console.log(sumArr) }

    }
}
