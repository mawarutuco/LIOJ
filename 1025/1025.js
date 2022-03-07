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
    let tmp = []

    for (let i = n; i <= m; i++) {
        i = String(i)
        tmp.push(i.split(''))
        console.log(tmp)

        let a = 0
        for (let j = 0; j < tmp.length; j++) {
            
            a += Number(tmp[j]) ** tmp.length
            console.log(a)
        }
        
        // console.log(tmp)
    }

}

