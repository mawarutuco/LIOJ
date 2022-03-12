//type input.txt | node 1030.js

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

    let arr = lines[0].split('')
    let arr2 = lines[0].split('')
    arr2.reverse()
    judgeArrSame(arr,arr2)
    // console.log(arr)
    // console.log(arr2)
}

function judgeArrSame(arr,arr2) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != arr2[i]) {
            console.log('False')
            return
        }
        // else if (i = arr.length - 1 && arr[i] == arr2[i]) {
        //     console.log('True')
        // }
    }
    console.log('True')
}
