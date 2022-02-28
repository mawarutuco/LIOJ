//type input.txt | node 1006.js

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
    //存兩排位子陣列
    let line1 = []
    let line2 = []
    for (let i = 1; i <= lines[0]; i++) {
        if (i % 2 != 0) { line1.push(i) }
        if (i % 2 == 0) { line2.push(i) }
    }
    

    //存被座的位子
    suWaTeTaSeKi = []
    for (let i = 2; i < lines.length; i++) {
        suWaTeTaSeKi= Number(lines[i])
        for (let j = 0; j <= line1.length; j++) {
            if (suWaTeTaSeKi == line1[j]) { line1[j] = 'X' }
            if (suWaTeTaSeKi == line2[j]) { line2[j] = 'X' }
        }

    }
    // console.log(suWaTeTaSeKi)
    console.log(line1)
    console.log(line2)


    //比對兩排
    // for (let i = 0; i <= line1.length; i++) {

    // }

    // for (let i = 2; i < lines.length; i++) {
    //     suWaTeTaSeKi.push(Number(lines[i]))
    //     for (let j = 0; j <= line1.length; j++) {
    //         if (suWaTeTaSeKi[i] == line1[j]) { line1[j] = 'X' }
    //         if (suWaTeTaSeKi[i] == line2[j]) { line2[j] = 'X' }
    //     }

    // }
}
