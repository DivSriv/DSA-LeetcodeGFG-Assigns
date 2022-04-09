## Running Time of Algorithms
[ Running Time of Algorithms ](https://www.hackerrank.com/challenges/runningtime/problem)




Solution:
```js

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'runningTime' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function runningTime(arr) {
    // Write your code here
    let count =0
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i+1; j > 0; j--) {
            if (arr[j] < arr[j-1]) {
                [arr[j],arr[j-1]]=[arr[j-1],arr[j]]
                count++
            }
            else {
                break;
            }
        }
    }
    return count
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = runningTime(arr);

    ws.write(result + '\n');

    ws.end();
}


```
