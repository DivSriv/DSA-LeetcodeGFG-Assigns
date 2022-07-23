## Breaking the Records
[ Breaking the Records ](https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem)

![image](https://user-images.githubusercontent.com/72649014/162581594-b9dee829-30ab-40f9-bc88-894afd0bbd50.png)


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
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    // Write your code here
    let low=scores[0]
    let high=scores[0]
    let lc=0
    let hc=0
    
    for(let i=1;i<scores.length;i++){
        if(scores[i]<low){
            low=scores[i]
            lc++
        }
        if(scores[i]>high){
            high=scores[i]
            hc++
        }
    }
    return [hc,lc]
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const scores = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}


```
