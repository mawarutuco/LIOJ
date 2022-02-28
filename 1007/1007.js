//type input.txt | node 1007.js

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
    People = []
    biggest = 0

    for (let i = 0; i < lines[0]; i++) {
        People[i] = lines[i + 1].split(' ') //分割人名和票數
        People[i][1] = Number(People[i][1]) //票數轉為數字型態
        if (People[i][1] > biggest) { biggest = People[i][1] }//存最多票是多少
    }
    for (let i = 0; i < lines[0]; i++) {
        if (biggest == People[i][1]) { console.log(People[i][0]) }
    }

}