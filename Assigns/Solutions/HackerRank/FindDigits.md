## Find Digits
[ Find Digits ](https://www.hackerrank.com/challenges/find-digits/problem)

![image](https://user-images.githubusercontent.com/72649014/162671703-d54ddd53-bd51-4ae7-a4a6-1af7c9d180eb.png)



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
 * Complete the 'findDigits' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function findDigits(n) {
    // Write your code here
    n=BigInt(n)
    let count=0
    let temp=n
    while(temp>BigInt(0)){
        let t=temp%BigInt(10)
        if(t==0){
            temp=~~(temp/BigInt(10))
            continue
        }
        else if(n % t==0){
            count++ 
        }
        temp=~~(temp/BigInt(10))
    }
    return count
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const result = findDigits(n);

        ws.write(result + '\n');
    }

    ws.end();
}


```
