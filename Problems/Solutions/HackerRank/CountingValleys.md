## Counting Valleys
[ Counting Valleys ](https://www.hackerrank.com/challenges/counting-valleys/problem)

![image](https://user-images.githubusercontent.com/72649014/162626398-9f3d5654-586d-4ade-ad17-c3355cd40072.png)


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
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here
    let u=0
    let sign = 0
    let count=0
    let prevSign =1
    for(let i = 0; i < steps; i++){
        if(path[i]=="U"){
           u++ 
           
        }
        else if(path[i]=="D"){
           u--
           
        }
        sign=u/Math.abs(u)
        if(sign!==prevSign){
            prevSign=sign
            if(sign<0){count++}
            
        }
    }
    
    
    return count
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}


```
