## Sherlock and Array
[ Sherlock and Array ](https://www.hackerrank.com/challenges/sherlock-and-array/problem)




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
 * Complete the 'balancedSums' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function balancedSums(arr) {
    // Write your code here
    let totalSum=function(a){
        return a.reduce((acc,curr)=>acc+curr,0)
    };
    
    //From maths-> targetSum(left) + targetSum(right) = TotalSum-y
    //for answer: targetSum(left) = targetSum(right)
    //Equation = 2 * targetSum = TotalSum-y
    //y -> each element of array which is to be checked
    let targetSum=0
    let sum= totalSum(arr)
    //For answer targetSum from both sides is equal so 2 * targetSum
    for (let y of arr){
        if(2 * targetSum == sum - y){ 
            return "YES";
        }
        targetSum = targetSum + y;
    }
    return "NO";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim(), 10);

    for (let TItr = 0; TItr < T; TItr++) {
        const n = parseInt(readLine().trim(), 10);

        const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const result = balancedSums(arr);

        ws.write(result + '\n');
    }

    ws.end();
}


```
