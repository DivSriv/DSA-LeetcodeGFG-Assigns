## Cut the sticks
[ Cut the sticks ](https://www.hackerrank.com/challenges/cut-the-sticks/problem)

![image](https://user-images.githubusercontent.com/72649014/162626432-6b50ab64-7233-4b83-b722-1b4fb4126c49.png)



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
 * Complete the 'cutTheSticks' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function cutTheSticks(arr) {
    // Write your code here
    let arrCount=[arr.length]
    while(arr.length>1){
        let temp=Math.min(...arr)
        
        for(let i=0;i<arr.length;i++){
            if(temp==arr[i]){
                arr.splice(i,1)
                i--
            }
            else{
                arr[i]-=temp
            }
            
        }
        if(arr.length==0){
            continue
        }
        arrCount.push(arr.length)
    }
    return arrCount
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = cutTheSticks(arr);

    ws.write(result.join('\n') + '\n');

    ws.end();
}


```
