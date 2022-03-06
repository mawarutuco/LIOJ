//type input.txt | node 1016.js

// const { copyFileSync } = require('fs');
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
    //---計算時間---
    // let start=0,end=0
    // start = new Date().getTime();

    //法1
    // let A = 0, B = 0

    // for (let i = 1; i <= lines[0]; i++) {
    //     if (lines[i] == 'A') { A++ }
    //     if (lines[i] == 'B') { B++ }
    // }

    // if (A == B || A == 0 || B == 0) { console.log('PEACE') }
    // else if (A < B) {
    //     for (let i = 1; i <= lines[0]; i++) {
    //         if (lines[i] == 'A') { console.log(i) }
    //     }
    // }else{
    //     for (let i = 1; i <= lines[0]; i++) {
    //         if (lines[i] == 'B') { console.log(i) }
    //     }
    // }

    //法2
    let A = [], B = []

    for (let i = 1; i <= lines[0]; i++) {
        if (lines[i] == 'A') { A.push(i) }
        if (lines[i] == 'B') { B.push(i) }
    }
    // console.log(A,B)

    if (A.length == B.length || A.length == 0 || B.length == 0) {
        console.log('PEACE')
    }
    else if (A.length < B.length) {
        for (let i = 0; i < A.length; i++) { console.log(A[i]) }
    }
    else {
        for (let i = 0; i < B.length; i++) { console.log(B[i]) }
    }

    //---計算時間---
    // end = new Date().getTime();
    // console.log((end-start)+'ms')
    //兩種方式時間差不多
}
