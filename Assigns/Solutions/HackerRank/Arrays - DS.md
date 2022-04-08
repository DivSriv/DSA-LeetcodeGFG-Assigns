## Arrays - DS
[ Arrays - DS ](https://www.hackerrank.com/challenges/arrays-ds/problem)

![image](https://user-images.githubusercontent.com/72649014/162386983-b770f07e-4309-4e0e-a85b-bf19954afc35.png)


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
 * Complete the 'reverseArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function reverseArray(a) {
    // Write your code here
    //Two pointer
    let start=0;
    let end = a.length-1
    while(start<=end){
        [a[start],a[end]]=[a[end],a[start]]
        start++
        end--
    }
    //OR
    // a=a.reverse()
    return a
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = reverseArray(arr);

    ws.write(res.join(' ') + '\n');

    ws.end();
}


```
