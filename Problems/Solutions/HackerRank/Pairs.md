## Pairs
[ Pairs ](https://www.hackerrank.com/challenges/pairs/problem)

![image](https://user-images.githubusercontent.com/72649014/163718583-654141c9-f5fd-4cef-86a5-c6a1667840d8.png)



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
 * Complete the 'pairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

function pairs(k, arr) {
    // Write your code here
    //Wrong
    // arr=arr.sort((a,b)=>a-b)
    // let count=0
    // for(let i=0;i<arr.length;i++){
    //     if(arr.includes(arr[i]+k)){
    //         count++
    //     }
    // }
    // return count
    
    //Solution
    let count=0
    let left=0
    let right=1
    arr=arr.sort((a,b)=>a-b)
    
    while(right < arr.length) {
        let d = arr[right] - arr[left];
        
        if(d == k){count++,right++} 
        
        else if(d > k){left++} 
        
        else{right++}
    }
    return count
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = pairs(k, arr);

    ws.write(result + '\n');

    ws.end();
}


```
