const fs = require('fs');
const readline = require('readline');

const itf = readline.createInterface({ input: fs.createReadStream('input.txt') });

let sum1 = 0;
let sum2 = 0;

function doSum1 (row) {
  let min = row.reduce((a, b) => Math.min(a, b));
  let max = row.reduce((a, b) => Math.max(a, b));
  return max - min;
}
function doSum2 (row) {
  for (let i = 0; i < row.length; i++) {
    for (let j = i + 1; j < row.length; j++) {
      if (row[i] % row[j] == 0 || row[j] % row[i] == 0) {
        return Math.max(row[i], row[j]) / Math.min(row[i], row[j]);
      }
    }
  }
}

itf.on('line', line => {
  let row = line.split('\t').map(s => parseInt(s.trim()));
  sum1 += doSum1(row);
  sum2 += doSum2(row);
});

itf.on('close', () => {
  console.log('Completed the challenge!');
  console.log('Result1: ' + sum1);
  console.log('Result2: ' + sum2);
});
