//type input.txt | node 1023.js


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
    let n = Number(lines[0]), j = 1

    //印行數
    for (let a = 1; a <= n; a++) { 
        
        //印星星
        let start = ''
        for (let i = 1; i <= j; i++) {
            start += '*'
        }
        j += 2

        //印空白
        let blank = '' 
        for (let b = n - a; b > 0; b--) {
            blank += ' ' 
        }

        console.log(blank + start)  //先列印空白再列印星星
    }

    //印樹幹
    blank=' '
    for(let c=1;c<n;c++){
        console.log(blank.repeat(n-1)+'|')
    }
    
}

