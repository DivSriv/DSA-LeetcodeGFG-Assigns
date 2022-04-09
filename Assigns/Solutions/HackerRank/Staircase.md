## Staircase
[ Staircase ](https://www.hackerrank.com/challenges/staircase/problem)




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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
    for(let row = 1; row <= n; row++){
        let noOfSpaces = n - row;
        let space =""
        for(let i = 0 ;i<noOfSpaces;i++){
            space=space+" "
        }
        let count = ""
        for(let col = 1; col<=row; col++){
          count=count+`#` 
        }
        console.log(space + count)
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}


```
