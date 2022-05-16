//type input.txt | node 1032.js

var readline = require("readline");

var lines = [];
var rl = readline.createInterface({
  input: process.stdin,
});

rl.on("line", function (line) {
  lines.push(line);
});

rl.on("close", function () {
  solve(lines);
});

function solve(lines) {
  let groupNum = Number(lines[0]);
  let startPos = 1;
  for (let i = 0; i < groupNum; i++) {
    let group = [];
    for (let j = startPos; j < startPos + 4; j++) {
      group.push(Number(lines[j]));
    }
    startPos += 4;
    let ans = Math.sqrt(
      Math.pow(group[0] - group[2], 2) + Math.pow(group[1] - group[3], 2)
    );
    ans=ans.toFixed(2)
    console.log(ans);
  }
}
