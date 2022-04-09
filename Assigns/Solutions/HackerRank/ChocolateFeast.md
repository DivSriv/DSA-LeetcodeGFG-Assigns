## Chocolate Feast
[ Chocolate Feast ](https://www.hackerrank.com/challenges/chocolate-feast/problem)

![image](https://user-images.githubusercontent.com/72649014/162581664-56254c7b-1ba6-4e10-8959-f707f545f545.png)



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
 * Complete the 'chocolateFeast' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER c
 *  3. INTEGER m
 */

function chocolateFeast(n, c, m) {
    // Write your code here
    //Nice solution by me
    let count=0
    let initialCount=~~(n/c)
    let wrapCount=initialCount
    
    if(initialCount<m){
        return initialCount
    }
    
    
    while(wrapCount>=m){
        count=~~(wrapCount/m)
        let rem=(wrapCount%m)
        
        initialCount+=count
        wrapCount=count+rem
    }
    
    return initialCount

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const n = parseInt(firstMultipleInput[0], 10);

        const c = parseInt(firstMultipleInput[1], 10);

        const m = parseInt(firstMultipleInput[2], 10);

        const result = chocolateFeast(n, c, m);

        ws.write(result + '\n');
    }

    ws.end();
}


```
