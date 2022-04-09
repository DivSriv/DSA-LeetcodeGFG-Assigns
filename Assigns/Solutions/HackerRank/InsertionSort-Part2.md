## Insertion Sort - Part 2
[ Insertion Sort - Part 2 ](https://www.hackerrank.com/challenges/insertionsort2/problem)




Solution:
```js

'use strict';

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
 * Complete the 'insertionSort2' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 */

function insertionSort2(n, arr) {
    // Write your code here
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i+1; j > 0; j--) {
            if (arr[j] < arr[j-1]) {
                [arr[j],arr[j-1]]=[arr[j-1],arr[j]]
            } 
            
            else {
                break;
            }
            
        }
        console.log(...arr)
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort2(n, arr);
}


```
