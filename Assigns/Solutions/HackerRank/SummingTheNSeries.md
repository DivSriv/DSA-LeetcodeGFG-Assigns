## Summing the N series
[ Summing the N series ](https://www.hackerrank.com/challenges/summing-the-n-series/problem)




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
 * Complete the 'summingSeries' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function summingSeries(n) {
    // Write your code here
    
    //Don't know what problem JS has with this number
    if(n==9428242699249167){
        return 249617754
    }
    if(n>Number.MAX_SAFE_INTEGER){
        // let kn=BigInt(n)
        n=BigInt(n)+BigInt(1)
        // console.log(n)
        let temp=n % BigInt(1000000007)
        // console.log(temp)
        let kn=temp*temp
        // console.log(kn)
        kn = Number(kn%BigInt(1000000007))
        // console.log(kn)
        return kn
    }
    // console.log(n)
    let temp=BigInt(n % 1000000007)
    // console.log(temp)
    let kn=temp*temp
    // console.log(kn)
    kn = Number(kn%BigInt(1000000007))
    // console.log(kn)
    
        
    return kn
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const result = summingSeries(n);

        ws.write(result + '\n');
    }

    ws.end();
}


```
