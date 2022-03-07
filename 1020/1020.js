//type input.txt | node 1020.js

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
    //P 是質數，輸出：Prime，否之則輸出 Composite

    let x = 0

    let num = Number(lines[0])
    for (let i = 1; i <= num; i++) {
        x = Number(lines[i])
        isComposite(x)
    }
}

function isComposite(x) {
    switch (x) {
        case 1:
            console.log('Composite')
            return
        case 2:
            console.log('Prime')
            return
    }

    for (let i = 2; i <= x / 2 + 1; i++) {
        if (x % i == 0) {
            console.log('Composite')
            return
        }
    }
    console.log('Prime')
}
