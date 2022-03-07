//type input.txt | node 1022.js


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
    //法1 星星第一行以外都加2**
    let n = Number(lines[0]), start = '*'

    for (let a = 1; a <= n; a++) { //列印行數

        if (a != 1) { start += '**' } //第一行外都加兩顆星星

        let blank = '' //清除空白
        for (let b = n - a; b > 0; b--) {
            blank += ' ' //空白遞減
        }

        console.log(blank + start)  //先列印空白再列印星星
    }

    //法2 星星1、3、5、7列印下去
    // let n = Number(lines[0]), j = 1

    // for (let a = 1; a <= n; a++) { //列印行數
        
    //     let start = ''
    //     for (let i = 1; i <= j; i++) {
    //         start += '*'
    //     }
    //     j += 2

    //     let blank = '' //清除空白
    //     for (let b = n - a; b > 0; b--) {
    //         blank += ' ' //空白遞減
    //     }

    //     console.log(blank + start)  //先列印空白再列印星星
    // }
}

