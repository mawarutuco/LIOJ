//type input.txt | node 1005.js

// const { json } = require('node:stream/consumers');
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
    for (let i = 0; i < lines.length; i++) {
        let num = Number(lines[i])
        if (num == 0) { return }
        let kids = 0  //存因數
        let kids2 = 0 //因數加總的因數
        kids = foundKids(num)
        kids2 = foundKids(kids)
        
        if (kids2 == num) {
            console.log(kids)
        } else {
            console.log('QQ')
        }
    }
}
function foundKids(num) {
    let temp = 0
    for (let j = 1; j < num; j++) {
        if (num % j == 0) {
            temp += j
        }
    }
    return temp
}