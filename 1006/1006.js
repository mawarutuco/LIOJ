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
    for (let i = 1; i < lines[0]; i+=2) {
        line1.push(i) 
        line2.push(i+1)
    }

    //存被座的位子
    suWaTeTaSeKi = 0
    for (let i = 2; i < lines.length; i++) {
        suWaTeTaSeKi = Number(lines[i])
        for (let j = 0; j <= line1.length; j++) {
            if (suWaTeTaSeKi == line1[j]) { line1[j] = 'X' }
            if (suWaTeTaSeKi == line2[j]) { line2[j] = 'X' }
        }
    }
    
    console.log(line1)
    console.log(line2)


    //比對兩排
    let soBaNi = 0
    for (let i = 0; i < line1.length - 1; i++) {
        if (line1[i] != 'X' && line1[i + 1] != 'X') { soBaNi++ }
        if (line2[i] != 'X' && line2[i + 1] != 'X') { soBaNi++ }
    }
    for (let i = 0; i < line1.length; i++) {
        if (line1[i] != 'X' && line2[i] != 'X') { soBaNi++ }
    }
    console.log(soBaNi)

}