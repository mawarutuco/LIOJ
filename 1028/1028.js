//type input.txt | node 1028.js

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

let arr = [], sum = 0
function solve(lines) {

    let tmp = lines[0].split(' ')

    for (let i = 0; i < tmp.length; i++) {
        arr = tmp[i].split('')
        x()
        arr = []
    }
    while(sum>9){
        sum = String(sum)
        arr = sum.split('')
        sum = 0
        x()
    }
    
    console.log(sum)

    
}
function x() {
    
    for (let j = 0; j < arr.length; j++) {
        sum += Number(arr[j])
        // console.log(sum)

    }
}
