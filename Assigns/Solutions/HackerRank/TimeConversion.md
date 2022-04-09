## Time Conversion
[ Time Conversion ](https://www.hackerrank.com/challenges/time-conversion/problem)




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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let temp=s.match(/[a-zA-Z]+|[0-9]+/g)

    if(temp[temp.length-1]=='PM'){
        temp.pop()
        if(temp[0]!=='12'){
            temp[0]=(Number(temp[0])+12).toString()
        }
    }
    
    if(temp[temp.length-1]=='AM'){
        temp.pop()
        if(temp[0]=='12'){
            temp[0]=(Number(temp[0])-12).toString()+'0'
        }
    }
    
    return temp.join(":") 
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}


```
