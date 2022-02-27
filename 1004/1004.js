//type input.txt | node 1004.js

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

    let teams = Number(lines[0])
    for (let i = 1; i <= teams; i++) {
        let tmp = lines[i].split(' ')
        let A = BigInt(tmp[0])
        let B = BigInt(tmp[1])
        let vs = BigInt(tmp[2])
        
        if (A == B) {
            console.log("DRAW")
        }
        else if (vs == 1) {
            if (A > B) { console.log("A") }
            else { console.log("B") }

        } else {
            if (A > B) { console.log("B") }
            else { console.log("A") }
        }

    }

}
