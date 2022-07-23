## Sum vs XOR
[ Sum vs XOR ](https://www.hackerrank.com/challenges/sum-vs-xor/problem)

![image](https://user-images.githubusercontent.com/72649014/163767932-b61bf305-7493-4e1b-9a31-731c69c7f0a2.png)



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
 * Complete the 'sumXor' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function sumXor(n) {
    // Write your code here
    //count total numbers of ZERO present in binary number of given n, and answer will be the 2 to the power of (total num of zero)
    
    if(n==0){return 1}
    let str=n.toString(2)
    
    let count=0
    for(let i=0;i<str.length;i++){
        if(str[i]==1){
            continue
        }
        count++
    }
    return 2**count
    
    //OR
    
    // let count=BigInt(0)
    // n= BigInt(n)
    // while(n){
    //     count = count+ (n%BigInt(2)?BigInt(0):BigInt(1))
    //     n=~~(n/BigInt(2)) 
    // }
    // count=BigInt(2)**count
    // return count
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const result = sumXor(n);

    ws.write(result + '\n');

    ws.end();
}


```
