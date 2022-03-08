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
    let arr = lines[0].split(' ')
    let n = Number(arr[0])
    let m = Number(arr[1])
    let tmp = [], tmp2 = 0

    for (let i = n; i <= m; i++) {
        i = String(i)
        tmp.push(i.split(''))
        // console.log(tmp)


        let a = 0
        for (let j = 0; j < tmp.length; j++) {
            // console.log(Number(tmp[j]))
            // tmp2 = Number(tmp[j])
            // console.log(tmp2) //NaN
            // console.log(tmp.length) //ok
            tmp[j] = Number(tmp[j])  //NaN
            a += tmp[j] ** tmp.length
            console.log(a)
        }

        // console.log(tmp)
    }

}

