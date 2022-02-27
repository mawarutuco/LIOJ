//type input.txt | node 1003.js

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

    let num1 = Number(lines[0])
    let word1 = '' //組字串用
    let word2 = '' //字串抽字
    
    for (let i = 1; i <= num1; i++) {
        word1 += lines[i]
    }
   
    for (let j = num1 + 2; j < lines.length; j++) {
        word2 += word1.charAt(lines[j]-1)
    }

    console.log(word2)

}
