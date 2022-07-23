## Insertion Sort - Part 1
[ Insertion Sort - Part 1 ](https://www.hackerrank.com/challenges/insertionsort1/problem)

![image](https://user-images.githubusercontent.com/72649014/162671940-cce6c364-9628-4184-ae33-9c462bbbe3c0.png)


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
 * Complete the 'insertionSort1' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 */

function insertionSort1(n, arr) {
    // Write your code here
    let k=arr[arr.length-1]

    for(let i=n-1;i>=0;i--){

        if(k<arr[i-1]){
           arr[i]=arr[i-1] 
        }
        if(i==0){
           arr[i]=k 
           return console.log(...arr)
        }

        else if(k>=arr[i-1]){
           arr[i]=k 
           return console.log(...arr)
        }
        console.log(...arr)
    }

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort1(n, arr);
}


```
