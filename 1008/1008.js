//type input.txt | node 1008.js

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

    let water = Number(lines[0])
    let bucket = 0
    let tmp = 0
    do {
        
        for (let i = 0; Math.pow(2, i) <= water; i++) {
            tmp = Math.pow(2, i)
        }
        water -= tmp
        bucket++
    } while (water > 0)
    console.log(bucket)

}

// 因地制夷下午12:45
// function solve(lines) {
//   let water = Number(lines[0]);
//   let arr = [];
//   let counter = 0;
//   for (let i = 0; i < 31; i++) {
//     arr.push(2 ** i);
//   }
//   for (let i = 30; i >= 0; i--) {
//     let remainder = 0;
//     if (water >= arr[i]) {
//       remainder = water % arr[i];
//       counter = counter + (water - remainder) / arr[i];
//       water -= arr[i];
//     }
//   }

//   console.log(counter);
// }
// ciy-ydeh-jir