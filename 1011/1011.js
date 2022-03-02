//type input.txt | node 1011.js

const { copyFileSync } = require('fs');
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
    let tmp = 0
    let people = lines[1].split(' ')

    for (let i = 0; i < lines[0] ; i++) {
        tmp += Number(people[i])
    }
    
    if (tmp / lines[0] >= 183) { console.log('real') }
    else { console.log('fake') }
}

